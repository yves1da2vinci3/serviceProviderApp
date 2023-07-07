import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderHome from '../../screens/user/order/OrderHome'
import ChatScreen from '../../screens/service/order/ChatScreen'
import PaymentScreen from '../../screens/user/order/PaymentScreen'
import RatingScreen from '../../screens/user/order/RatingScreen'

const ClientOrderStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen  options={{ headerShown : false}} name='orderHome' component={OrderHome} />
      <Stack.Screen  name='chat' component={ChatScreen} />
      <Stack.Screen  name='payment' component={PaymentScreen} />
      <Stack.Screen  name='rating' component={RatingScreen} />
    </Stack.Navigator>
  )
}

export default ClientOrderStack