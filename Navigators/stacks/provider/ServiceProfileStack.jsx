import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileHome from '../../../screens/service/profile/ProfileHome'
const ServiceProfileStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
     <Stack.Screen name='serviceProfileHome' component={ProfileHome}  />
    </Stack.Navigator>
  )
}

export default ServiceProfileStack