import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import { notifcationsBase } from '../utils/data'
const NotificationItem = ({notification}) => {
  console.log(notification)
  return (
    <View style={tw `h-25 mt-3 bg-white shadow-md border-gray-100 border-[0.1] rounded-lg p-2 flex-row `} >
    {/* Icon */}
  <View  style={tw `h-15 items-center justify-center rounded-lg mr-5 w-15 ${notifcationsBase[notification.type-1].bgColor}`} >
<Icon  name={notifcationsBase[notification.type-1].iconName} color="white" type='ionicon' size={30} />
</View> 
  {/* Content */}

<View style={tw `flex-1  h-full`}>
<Text style={tw `text-[4] font-bold`}>{notifcationsBase[notification.type-1].title}</Text>
<Text style={tw ` font-semibold text-gray-500 italic`}>{notification.content}</Text>
</View>
  </View>
  )
}

export default NotificationItem