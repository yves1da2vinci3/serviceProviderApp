import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'
import { Avatar } from '@rneui/base'
import tw from 'twrnc'
import { apiUrl } from '../config/api'
const OfferItem = ({chooseService,service}) => {
  return (
    <TouchableOpacity onPress={()=> chooseService(service)} style={ tw `h-20 mt-2 bg-white  flex-row flex p-2 border-b-2 border-b-gray-300 mx-3`} >
    <Avatar size={60} rounded={true} source={{ uri : apiUrl + service.askerId.photoUrl } } />
<View style={ tw `pl-4 flex-1`}>
  <Text style={ tw `text-xl font-semibold`}>{service.askerName}</Text>
  <View style={ tw `flex items-center flex-row`}>
    <Icon type='ionicon' name='pin-outline' color="black" />
  <Text ellipsizeMode="tail" style={tw `text-sm text-blue-400` }>{service.location}</Text>

  </View>
</View>
<View style={ tw `pl-4  `}>
{  service.status === 0 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-blue-300 items-center ios:mr-4`} >
          <Text style={tw `text-blue-500  font-semibold`}>submitted</Text>
        </View> :  service.status === 1 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-yellow-300 items-center ios:mr-4`} >
          <Text style={tw `text-yellow-500  font-semibold`}>Accepted</Text>
        </View>  : service.status === 2 ? <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-green-300 items-center ios:mr-4`} >
          <Text style={tw `text-green-500  font-semibold`}>done</Text>
        </View> : <View style={ tw `h-8 ml-auto  w-20 rounded-full  justify-center bg-red-300 items-center ios:mr-4`} >
          <Text style={tw `text-red-500  font-semibold`}>refused</Text>
        </View> }


  <Text ellipsizeMode="tail" style={tw `text-sm mt-2 text-gray-400 ml-4 ` }>{service.amount}LD</Text>
</View>

    </TouchableOpacity>
  )
}

export default OfferItem