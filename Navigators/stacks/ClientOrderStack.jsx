import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OrderHome from '../../screens/user/order/OrderHome'

const ClientOrderStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen  name='orderHome' component={OrderHome} />
    </Stack.Navigator>
  )
}

export default ClientOrderStack