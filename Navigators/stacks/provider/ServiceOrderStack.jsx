import { View, Text } from 'react-native'
import React from 'react'
import OrderHome from '../../../screens/service/order/OrderHome'
import ChatScreen from '../../../screens/service/order/ChatScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
const ServiceOrderStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator  >
       <Stack.Screen options={{ headerShown : false }} name='serviceOrderHome' component={OrderHome}  />
       <Stack.Screen options={{ headerShown : true }} name='serviceChat' component={ChatScreen}  />
      </Stack.Navigator>
  )
}

export default ServiceOrderStack