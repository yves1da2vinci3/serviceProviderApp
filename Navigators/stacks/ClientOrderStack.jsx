import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderHome from '../../screens/user/order/OrderHome'
import ChatScreen from '../../screens/user/order/ChatScreen'
import PaymentScreen from '../../screens/user/order/PaymentScreen'

const ClientOrderStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen  name='orderHome' component={OrderHome} />
      <Stack.Screen  name='chat' component={ChatScreen} />
      <Stack.Screen  name='payment' component={PaymentScreen} />
    </Stack.Navigator>
  )
}

export default ClientOrderStack