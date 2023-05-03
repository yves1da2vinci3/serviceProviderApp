import React from 'react'
import ServiceHome from '../../../screens/service/home/ServiceHome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const ServiceHomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator>
       <Stack.Screen options={{ headerShown : false }} name='serviceHome' component={ServiceHome}  />
      </Stack.Navigator>
  )
}

export default ServiceHomeStack