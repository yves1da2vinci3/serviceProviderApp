import { View, Text, TouchableOpacity, Image ,ScrollView} from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import massage from '../../../assets/images/masseur.jpg'
import Accordion from '../../../Components/Accordion'
import ReviewItem from '../../../Components/ReviewItem'
import { BottomSheet } from '@rneui/themed'
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment'
import httpClient, { apiUrl } from '../../../config/api'
import Loader from '../../../Components/Loader'
const ServiceOneScreen = (props) => {
  const [minDate, setMinDate] = useState('')
  const [serviceDate, setServiceDate] = useState('')
  const [displayDate, setdisplayDate] = useState('')
  const [service,setService] = useState()
  const [ratings,setratings] = useState([])
  const [isLoading,setIsLoading] = useState(true)
 const [visible,setVisible] = useState(false)
  useEffect(()=>{
    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    setMinDate(tomorrow.toISOString().split('T')[0])
  },[])
  const onDateChange = (date) => {
    console.log(  date.toISOString()) 
    setdisplayDate(moment(date).format('DD MMM YYYY'))
    setServiceDate(date.toISOString().split("T")[0])

   }
  const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-2 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  const fetchOneService = async() => { 
    try {
      const  {data} = await httpClient.get(`/users/services/${props.route.params.serviceId}`)
      setService(data.service)
      console.log(data.service)
      setratings(data.ratings)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
   }
  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />,title : `${props.route.params.serviceName}` })
    fetchOneService()
  },[navigation])
  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={tw `bg-white flex-1 p-2`}>
     <TouchableOpacity activeOpacity={0.6}  style={tw `bg-white   h-65 mb-8 w-full rounded-xl `} >
    {/* iamge and heart */}
    <View style={tw `h-52 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-52  w-full  rounded-xl`} source={{uri :  isLoading ? "..." : apiUrl + service.photoUrl}} />
      {/* like */}
      <View style={tw `h-10 w-10 top-3 right-4 bg-white absolute items-center justify-center rounded-full z-40`} >
        <Icon type='ionicon' name='heart-outline'  color={Colors.primaryColor} />
      </View>
    </View>
    {/* Title */}
    <View style={tw `flex-row justify-between px-3 items-center`} >
    <Text style={tw `pl-2 text-4 mt-2`}>{isLoading?"..." :service.title}</Text>

    </View>
  
   </TouchableOpacity>
   <Text style={tw `text-lg font-semibold`}>Description</Text>
   <Text style={tw `text-lg`}>{isLoading? "..." : service.description}</Text>
   <View style={tw `flex-row justify-between  items-center`} >
    <Text style={tw `pl-2 text-3 font-semibold text-gray-400 mt-2`}>12/03/2023 12h30min~13h30min</Text>
    <Text style={tw `pl-2 text-3 font-semibold text-gray-400 mt-2`}>1h00min</Text>

    </View>
    <View style={tw `h-20  w-full px-2  flex-row items-center`}>
            <Avatar  size={60} containerStyle={tw `rounded-lg`} source={{ uri : isLoading ? "..." : apiUrl + service.userId.photoUrl }} />
             {/* Name and Description */}
             <View style={tw ` ml-2`}>
              <Text style={tw `font-bold`}>{isLoading ?"... " : service.userId.fullname}</Text>
              <Text style={tw `font-semibold text-gray-500 mt-4`}>+3 years of experience</Text>
             </View>
             {/* status */}
             <View style={tw `flex flex-1 justify-end flex-row items-center`}>
              <Icon name='call' type='ionicon' color={Colors.primaryColor}  />
              <Icon name='chatbox' style={tw `ml-4`} type='ionicon' color={Colors.primaryColor}  />
             </View>
         </View>
         <Accordion title="Ratings and comments" children={<ScrollView showsVerticalScrollIndicator={false} style={tw `h-auto`}>
          <ReviewItem />
          <ReviewItem />
          <ReviewItem />
         </ScrollView>}  />

         <TouchableOpacity   onPress={()=> setVisible(true)} style={ tw `bg-[${Colors.primaryColor}] h-15  self-center   flex justify-center items-center ml-3 rounded-2xl w-[45%]`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Book now</Text>
      </TouchableOpacity>
         <BottomSheet isVisible={visible} >
           <View style={tw `bg-white h-140 p-4 `}>
            <Text style={tw `text-center text-lg font-semibold`}>Select Date</Text>
            {/* Calendar */}
            <CalendarPicker
          selectedDayColor={`${Colors.primaryColor}`}
          selectedDayStyle={tw`bg-[${Colors.primaryColor}] `}
          selectedDayTextStyle={tw `text-white font-semibold`}
          selectedDayTextColor={`#fff`}
          onDateChange={(date)=>onDateChange(date)}
          minDate={minDate}
          
        />
        {/* Show date  */}

        <View style={tw `h-18 items-center justify-center w-full bg-gray-200 rounded-xl`}>
          <Text style={tw `text-xl font-semibold`}>{displayDate}</Text>
        </View>
        {/* Confirm and cancel button */}
          <View style={tw `flex-row items-center justify-center pt-3`}>
          <TouchableOpacity onPress={()=> setVisible(false) }  style={ tw `bg-[${Colors.blackColor}] h-15   flex justify-center items-center rounded-2xl w-[45%]`} >
        <Text style={tw `capitalize text-white text-2xl font-semibold`} >Cancel</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15   flex justify-center items-center ml-3 rounded-2xl w-[45%]`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Confirm</Text>
      </TouchableOpacity>
          </View>
           </View>
         </BottomSheet>
         <Loader isLoading={isLoading} />
    </ScrollView>
  )
}

export default ServiceOneScreen