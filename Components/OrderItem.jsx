import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { Avatar, Divider } from '@rneui/base'
import tw from 'twrnc'
import { Icon, Image } from '@rneui/themed'
import Cooking from '../assets/images/cooking.jpg'
import Colors from '../Constants/Colors'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { apiUrl } from '../config/api'
import formatDate from '../utils/FomatDate'
import formatTime from '../utils/formatTime'
import {AuthContext} from '../Context/AuthContext'
const OrderItem = ({item}) => {
  const {user} = useContext(AuthContext)
  const navigation = useNavigation()
  return (
    <View style={tw `h-58 mt-3 bg-white shadow-md border-gray-100 border-[0.1] rounded-lg p-2 flex-col `} >
         {/*Prodiver  */}
         <View style={tw `h-20  w-full px-2  flex-row items-center`}>
            <Avatar size={60} containerStyle={tw `rounded-lg`} source={{ uri : apiUrl+ item.providerId.photoUrl }} />
             {/* Name and Description */}
             <View style={tw ` ml-2`}>
              <Text style={tw `font-bold`}>{item.providerId.fullname}</Text>
              <Text style={tw `font-semibold text-gray-500 mt-4`}></Text>
             </View>
             {/* status */}
             {  item.status === 0 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-blue-300 items-center ios:mr-4`} >
          <Text style={tw `text-blue-500  font-semibold`}>submitted</Text>
        </View> :  item.status === 1 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-yellow-300 items-center ios:mr-4`} >
          <Text style={tw `text-yellow-500  font-semibold`}>on going</Text>
        </View>  : item.status === 2 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-green-300 items-center ios:mr-4`} >
          <Text style={tw `text-green-500  font-semibold`}>completed</Text>
        </View> : <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-red-300 items-center ios:mr-4`} >
          <Text style={tw `text-red-500  font-semibold`}>rejected</Text>
        </View> }
         </View>
        <Divider />

        {/* service Info */}

        <View style={tw `flex-1 flex-row px-2  mt-2 `}>
          <Image source={{ uri : apiUrl + item.offerId.photoUrl}} resizeMode="cover" style={tw `w-30 rounded-lg h-20`} />
          <View style={tw `flex-1   pl-2`}>
            <Text style={tw `font-bold`}> {item.offerId.title}</Text>
            <Text style={tw `font-semibold text-[2.6] text-gray-500 mt-2 `}>{formatDate(item.Date)} ~ {formatTime(item.startTime) }  - {formatTime(item.endTime) }</Text>
            <View style={tw `flex-1 flex-row  px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold`}> {item.amount} $</Text>
           
           <View style={tw `flex-row items-center`} >
           <Icon type='ionicon' name='star' color={Colors.primaryColor} />
           <Text style={tw `font-bold`}>{item.offerId.rating.toFixed(2)} </Text>
           </View>
          </View>
          </View>
        </View>

        {/* Message */}
        <View style={tw `h-9 px-4  flex-row items-center `}>
          <TouchableOpacity onPress={()=> navigation.navigate("chat",{isProvider : false, provider : item.providerId,reservationId : item._id})} style={tw `flex-row items-center mr-2`}>
          <Icon name='comment-alt' color={Colors.primaryColor}  type='font-awesome-5'/>
            <Text style={tw `font-semibold ml-2`}>Chat with him</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate("payment",{offerId : item.offerId._id,amount : item.amount,receiverId:item.providerId._id,senderId :user._id,reservationId : item._id,providerName : item.providerId.fullname})} style={tw `flex-row items-center mr-2`}>
            <Icon name='credit-card' color={Colors.primaryColor}  type='font-awesome-5'/>
            <Text style={tw `font-semibold ml-2`}>Pay for  the service</Text>
          </TouchableOpacity>
        </View>
        </View>
  )
}

export default OrderItem