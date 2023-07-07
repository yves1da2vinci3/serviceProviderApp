import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Colors from '../../../../Constants/Colors'
import CalendarPicker from 'react-native-calendar-picker';
import moment from 'moment'
import tw from 'twrnc'
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'react-native-toast-notifications';
const PickDate = ({setStatus,setVisible,setServiceDate}) => {
    const [minDate, setMinDate] = useState('')
    const [displayDate, setdisplayDate] = useState('')
    useEffect(()=>{
        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        setMinDate(tomorrow.toISOString().split('T')[0])
      },[])
      const onDateChange = (date) => {
        console.log("ruh mais attends")
        console.log(  date.toISOString()) 
        setdisplayDate(moment(date).format('DD MMM YYYY'))
        setServiceDate(date.toISOString().split("T")[0])
    
       }
       const navigation = useNavigation()
       const toast = useToast()
  return (
    <View style={tw `flex-1 bg-white`}>
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
        <View style={tw `flex-row items-center justify-center pt-3`}>
          <TouchableOpacity onPress={()=> setVisible(false) }  style={ tw `bg-[${Colors.blackColor}] h-15   flex justify-center items-center rounded-2xl w-[45%]`} >
        <Text style={tw `capitalize text-white text-2xl font-semibold`} >Cancel</Text>
      </TouchableOpacity>
          <TouchableOpacity onPress={()=> displayDate ? setStatus(2) : toast.show("please select date")}  style={ tw `bg-[${Colors.primaryColor}] h-15   flex justify-center items-center ml-3 rounded-2xl w-[45%]`} >
        {/* <Text style={tw `capitalize text-white text-xl font-semibold`} >Confirm</Text> */}
        <Icon type='ionicon' name='arrow-forward' color="white" size={30} />
      </TouchableOpacity>
          </View>
    </View>
  )
}

export default PickDate