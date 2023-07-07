import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'twrnc'
import Colors from '../../../../Constants/Colors'
import { Icon, Overlay } from '@rneui/base'
import DateTimePicker from '@react-native-community/datetimepicker';
import { useToast } from 'react-native-toast-notifications'
import {AuthContext} from "../../../../Context/AuthContext"
import Loader from '../../../../Components/Loader'
import calculateHourDifference from '../../../../utils/CalcuateHourDifference'
import formatTime from '../../../../utils/formatTime'
import httpClient from '../../../../config/api'
import { useNavigation } from '@react-navigation/native'
const TimeAndLocation = ({setStatus,serviceDate,service,setVisible}) => {
  const {user} = useContext(AuthContext)
  const [DatePortion,setDatePortion] = useState("start")
      const [show,setShow] = useState(false)
      const [date, setDate] = useState(new Date(1598051730000));
      const toast = useToast()
      const [isLoading,setIsLoading] = useState(false)
    const [deletionModal,setdeletionModal] = useState(false)

      const [startTime,setStartTime] = useState("2020-08-21T12:15:30.000Z")
      const [endTime,setEndTime] = useState("2020-08-21T16:15:30.000Z")
      const [location,setLocation] = useState("")
  const selectDatePortion = (portion) => { 
    setDatePortion(portion)
    setShow(true)
    }
    const onChange = (e,selectedDate) => { 
      console.log( selectedDate)
      const currentDate = selectedDate;
      setDate(currentDate);
     }
  const saveTime = () => { 
    if(DatePortion === "end"){

        setEndTime(date.toISOString())
        setShow(false)
      
      
    }
    if(DatePortion === "start"){
 
        setStartTime(date.toISOString())
         setShow(false)
     
      
    }

   }
const navigation = useNavigation()
   const makeReservation = async() => { 
    try {
      setIsLoading(true)
      const data = {
        askerName : user.fullname,
        askerId : user._id,
       location,
       endTime,
       startTime,
       amount : (calculateHourDifference(formatTime(startTime) ,formatTime(endTime) )*service.hourRate).toFixed(2),
       providerId :  service.userId._id,
       notificationType : 3,
       serviceDate
      }
      console.log(data)
      await httpClient.post("/users/services",data)
      toast.show("reservation created with success",{type : "success"})
      setVisible(false)
      setdeletionModal(false)
      navigation.goBack()
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
    }
  return (
    <View style={tw `flex-1`} >
      {/* Time OverLay */}
      <Overlay overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }   isVisible={show} onBackdropPress={()=> setShow(false)}>
     <View style={tw`flex  p-3 h-85 w-85 bg-white`}>
      <Text style={tw `text-lg font-semibold my-2`}>Select the time : { DatePortion === "start"? "Start Time" : "End Time" }</Text>
     <DateTimePicker
          testID="dateTimePicker"
          mode="time"
          value={date}
          
          is24Hour={true}
          display="spinner"
          onChange={onChange}
        />
     <TouchableOpacity  onPress={()=> saveTime()} style={tw `self-end h-12 w-24 flex bg-[${Colors.primaryColor}] mt-2 rounded-xl justify-center items-center`}>
        <Text style={tw `text-white`}>Save Time</Text>
      </TouchableOpacity>
     </View>
    </Overlay>
    {/* Cost */}
    <Overlay isVisible={deletionModal} overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }>

<View style={tw `h-[7.5rem] bg-white w-[20rem] `}>
  {/* Price */}
<View style={tw `flex-row  items-center`}>
<Text style={tw `font-semibold text-center`}>This is the price that it is going to cost </Text>
<Text style={tw ` text-lg italic text-[${Colors.primaryColor}] font-bold text-center`}> {endTime ? (calculateHourDifference(formatTime(startTime) ,formatTime(endTime) )*service.hourRate).toFixed(1).toString() : ""} $ </Text>

</View>
{/* question */}
<Text style={tw `font-semibold text-center`}>Are you okay with ?</Text>


<View style={tw `flex items-center h-15  w-full mt-4 justify-center  flex-row`}>
<TouchableOpacity onPress={()=>  setdeletionModal(false)} style={tw `h-10 w-10 rounded-full items-center justify-center bg-[${Colors.redColor}]`}>
<Icon type='ionicon' name='close' color="white" />
</TouchableOpacity>
<TouchableOpacity onPress={()=>  makeReservation()} style={tw `h-10 w-10 rounded-full items-center ml-6 justify-center bg-[${Colors.greenColor}]`}>
<Icon type='ionicon' name='checkmark' color="white" />
</TouchableOpacity>
</View>
</View>


</Overlay>
      {/* Main */}
              <Text style={tw `text-center text-lg font-semibold`}>Time and Location</Text>
              {/* Startime */}
              <Text style={tw `my-4  font-semibold`}>Start Time </Text>
              <TouchableOpacity onPress={()=> selectDatePortion("start") }  style={tw `h-18 items-center flex-row px-4 justify-center w-full bg-gray-200 rounded-xl`}>
                <View style={tw `flex items-center justify-center`}>
                  <Icon size={30} color={Colors.primaryColor} type='ionicon' name='stopwatch-outline' />
                </View>
          {/* <Text style={tw `text-xl font-semibold flex-1 ml-4`}>{Number(startTime.split(":")[0]) > 12 ? Number(startTime.split(":")[0]) -12 + " PM" : Number(startTime.split(":")[0]) + " AM"  }</Text> */}
          <Text style={tw `text-xl font-semibold flex-1 ml-4`}>{formatTime(startTime) }</Text>

        </TouchableOpacity>
             {/* End Time */}
             <Text style={tw `my-4  font-semibold`}>End Time </Text>
              <TouchableOpacity onPress={()=> selectDatePortion("end") } style={tw `h-18 items-center flex-row px-4 justify-center w-full bg-gray-200 rounded-xl`}>
                <View style={tw `flex items-center justify-center`}>
                  <Icon size={30} color={Colors.primaryColor} type='ionicon' name='stopwatch-outline' />
                </View>
          {/* <Text style={tw `text-xl font-semibold flex-1 ml-4`}>{Number(endTime.split(":")[0]) > 12 ? Number(endTime.split(":")[0]) -12 + " PM" : Number(endTime.split(":")[0]) +" AM" }</Text> */}
          <Text style={tw `text-xl font-semibold flex-1 ml-4`}>{formatTime(endTime) }</Text>
        </TouchableOpacity>
        {/* Location */}
        <Text style={tw `my-4  font-semibold`}>Location </Text>
              <View style={tw `h-18 items-center flex-row px-4 justify-center w-full bg-gray-200 rounded-xl`}>
                <View style={tw `flex items-center justify-center`}>
                  <Icon size={30} color={Colors.primaryColor} type='ionicon' name='pin-outline' />
                </View>
          <TextInput onChangeText={(text)=> setLocation(text)} placeholder='enter your location' style={tw `text-xl font-semibold flex-1`}/>
        </View>
        {/* Buttons */}
      <View style={tw `flex-row items-center justify-center pt-3`}>
          <TouchableOpacity onPress={()=> setStatus(1) }  style={ tw `bg-[${Colors.blackColor}] h-15   flex justify-center items-center rounded-2xl w-[45%]`} >
        <Text style={tw `capitalize text-white text-2xl font-semibold`} >Back</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={()=> setdeletionModal(true) }  style={ tw `bg-[${Colors.primaryColor}] h-15   flex justify-center items-center ml-3 rounded-2xl w-[45%]`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Confirm</Text>
      </TouchableOpacity>
          </View>
          <Loader isLoading={isLoading} />
    </View>
  )
}

export default TimeAndLocation