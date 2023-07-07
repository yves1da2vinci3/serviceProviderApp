import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Avatar, Divider, Icon } from '@rneui/base'
import Colors from '../Constants/Colors'
import tw from 'twrnc'
import {  Image } from '@rneui/themed'
import Cooking from '../assets/images/cooking.jpg'
import { useNavigation } from '@react-navigation/native'
import { apiUrl } from '../config/api'
import formatDate from '../utils/FomatDate'
import formatTime from '../utils/formatTime'
const ProviderOrderItem = ({item}) => {
  const navigation = useNavigation()
  return (
    <View style={tw `h-66 mt-3 bg-white shadow-md border-gray-100 border-[0.1] rounded-lg p-2 flex-col `} >
         {/*Prodiver  */}
         <View style={tw `h-20  w-full px-2  flex-row items-center`}>
            <Avatar size={60} containerStyle={tw `rounded-lg`} source={{ uri :  apiUrl + item.askerId.photoUrl }} />
             {/* Name and Description */}
             <View style={tw ` ml-2`}>
              <Text style={tw `font-bold`}>{item.askerId.fullname}</Text>
             </View>
             {/* status */}
             {  item.status === 0 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-blue-300 items-center ios:mr-4`} >
          <Text style={tw `text-blue-500  font-semibold`}>submitted</Text>
        </View> :  item.status === 1 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-yellow-300 items-center ios:mr-4`} >
          <Text style={tw `text-yellow-500  font-semibold`}>Accpeted</Text>
        </View>  : item.status === 2 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-green-300 items-center ios:mr-4`} >
          <Text style={tw `text-green-500  font-semibold`}>Done</Text>
        </View> : <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-red-300 items-center ios:mr-4`} >
          <Text style={tw `text-red-500  font-semibold`}>Refused</Text>
        </View> }
         </View>
        <Divider />

        {/* service Info */}

        <View style={tw `flex-1 flex-row px-2  mt-2 `}>
          <View style={tw `flex-1   pl-2`}>
            {/* Date */}
            <View style={tw `flex items-center flex-row`} >
              <Icon name="calendar" type="ionicon" color={Colors.primaryColor} />
              <Text style={tw `ml-4 font-semibold`}>{formatDate(item.Date)}</Text>
            </View>
            {/* Time */}
            <View style={tw `flex items-center flex-row`} >
              <Icon name="time" type="ionicon" color={Colors.primaryColor} />
              <Text style={tw `ml-4 font-semibold`}>{formatTime(item.startTime) }  - {formatTime(item.endTime) }</Text>
            </View>
              {/* Money */}
              <View style={tw `flex items-center flex-row`} >
              <Icon name="cash" type="ionicon" color={Colors.primaryColor} />
              <Text style={tw `ml-4 font-semibold`}>{item.amount} $</Text>
            </View>
              {/* Location */}
              <View style={tw `flex items-center flex-row`} >
              <Icon name="pin" type="ionicon" color={Colors.primaryColor} />
              <Text style={tw `ml-4 font-semibold`}>{item.location}</Text>
            </View>
          </View>
        </View>
        <Divider />

        {/* Message */}
        <View style={tw `h-9 px-4  flex-row items-center `}>
          <TouchableOpacity onPress={()=> navigation.navigate("serviceChat",{isProvider : true, asker : item.askerId,reservationId : item._id})} style={tw `flex-row items-center mr-2`}>
          <Icon name='comment-alt' color={Colors.primaryColor}  type='font-awesome-5'/>
            <Text style={tw `font-semibold ml-2`}>Chat with him</Text>
          </TouchableOpacity>
       
        </View>
        </View>
  )
}

export default ProviderOrderItem