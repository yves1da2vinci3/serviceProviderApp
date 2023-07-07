import { View, Text } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
const NotificationItem = () => {
  return (
    <View style={tw `h-25 mt-3 bg-white shadow-md border-gray-100 border-[0.1] rounded-lg p-2 flex-row `} >
    {/* Icon */}
  <View  style={tw `h-15 items-center justify-center rounded-lg mr-5 w-15 bg-green-400`} >
<Icon  name='checkmark' color="white" type='ionicon' size={30} />
</View> 
  {/* Content */}

<View style={tw `flex-1  h-full`}>
<Text style={tw `text-[4] font-bold`}>Book Confirmed</Text>
<Text style={tw ` font-semibold text-gray-500 italic`}>Your booking has been confirmed. Please check your email for confirmation details.</Text>
</View>
  </View>
  )
}

export default NotificationItem