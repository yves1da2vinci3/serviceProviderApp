import React from 'react'
import ServiceHome from '../../../screens/user/service/ServiceHome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const ServiceHomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator>
       <Stack.Screen name='serviceHome' component={ServiceHome}  />
      </Stack.Navigator>
  )
}

export default ServiceHomeStack