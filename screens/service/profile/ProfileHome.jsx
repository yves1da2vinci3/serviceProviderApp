import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import Colors from '../../../Constants/Colors'
import { Icon } from '@rneui/base'
// import * as Notifications  from 'expo-notifications';



const ProfileHome = (props) => {
  // useEffect(()=>{
  //   Notifications.setNotificationHandler({
  //     handleNotification: async () => ({
  //       shouldShowAlert: true,
  //       shouldPlaySound: false,
  //       shouldSetBadge: false,
  //     }),
  //   });
    
  //   Notifications.scheduleNotificationAsync({
  //     content: {
  //       title: 'My Notification Title',
  //       body: 'Hello, world!',
  //     },
  //     trigger: {
  //       seconds: null, // wait for 5 seconds before triggering the notification
  //     },
  //   });
  // },[])
  return (
    <View style={tw `flex-1 pt-10 bg-white px-3`}>
{/* user Info */}
     <View style={tw `h-40  p-2 flex-row`}>
      {/* Image */}
      <View style={tw ` h-30 w-30 rounded-lg`}>
        <Image  style={tw `h-30 w-30 rounded-lg`} source={{ uri : 'https://images.squarespace-cdn.com/content/v1/5414d5e0e4b01b3bfb338b76/1563749889904-RZ8VMF29WZK2DEV3TALV/Screen+Shot+2019-07-21+at+3.57.54+PM.png' }} />
      </View>
      <View style={tw `flex-1  p-2`}>
        <Text style={tw `font-bold text-lg`}>Yves lionel diomande</Text>
        <Text style={tw `text-gray-500 `}>yves.lionel.diomande@gmail.com</Text>
        <View style={tw `items-center bg-yellow-400 rounded-full justify-center p-2`}>
        <Text style={tw `font-bold text-[${Colors.primaryColor}]`}>COOKER</Text>
        </View>
       
      </View>
     </View>
     {/* Opitons */}
  <View style={tw `flex-1  `}>
  <Text style={tw `font-bold text-gray-400 ml-4 uppercase  mb-4 text-md`}>Account</Text>

    <TouchableOpacity onPress={()=> props.navigation.navigate("serviceModifyProfile")} style={tw `h-13 border-b-gray-200 border-b-2 flex items-center p-2 flex-row`}>
      <Icon type='ionicon' name='person-outline' />
      <Text style={tw `font-bold ml-4 text-md`}>profile data</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> props.navigation.navigate("modifyOffer")} style={tw `h-13 border-b-gray-200 border-b-2  flex items-center p-2 flex-row`}>
      <Icon type='ionicon' name='receipt-outline' />
      <Text style={tw `font-bold ml-4 text-md`}>Modify offer</Text>
    </TouchableOpacity>
  </View>
    </View>
  )
}

export default ProfileHome