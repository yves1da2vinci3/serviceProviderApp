import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'

const NotificationsScreen = () => {
  const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft /> })
  },[navigation])

  return (
    <View style={tw `flex-1 bg-[#FDFDFD] p-4`}>
      <ScrollView>
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
        <View style={tw `h-25 mt-3 bg-white shadow-md border-gray-100 border-[0.1] rounded-lg p-2 flex-row `} >
          {/* Icon */}
        <View  style={tw `h-15 items-center justify-center rounded-lg mr-5 w-15 bg-yellow-400`} >
      <Icon  name='star-half' color="white" type='ionicon' size={30} />
    </View> 
        {/* Content */}

    <View style={tw `flex-1  h-full`}>
      <Text style={tw `text-[4] font-bold`}>Rating recieved</Text>
      <Text style={tw ` font-semibold text-gray-500 italic`}>Your booking has been confirmed. Please check your email for confirmation details.</Text>
    </View>
        </View>
       
      </ScrollView>
    </View>
  )
}

export default NotificationsScreen
