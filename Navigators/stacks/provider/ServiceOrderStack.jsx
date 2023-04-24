import { View, Text } from 'react-native'
import React from 'react'
import OrderHome from '../../../screens/service/order/OrderHome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const ServiceOrderStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator>
       <Stack.Screen name='serviceOrderHome' component={OrderHome}  />
      </Stack.Navigator>
  )
}

export default ServiceOrderStack