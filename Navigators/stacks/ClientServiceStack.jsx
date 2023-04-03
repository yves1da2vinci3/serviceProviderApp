import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServiceHome from '../../screens/user/service/ServiceHome'

const ClientServiceStack = () => {
    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
    <Stack.Screen  name='serviceHome' component={ServiceHome} />
  </Stack.Navigator>
  )
}

export default ClientServiceStack