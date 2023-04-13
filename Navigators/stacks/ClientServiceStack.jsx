import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ServiceHome from '../../screens/user/service/ServiceHome'
import ServiceList from '../../screens/user/service/ServiceList'
import ServiceOneScreen from '../../screens/user/service/ServiceOneScreen'

const ClientServiceStack = () => {
    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
    <Stack.Screen  name='serviceHome' component={ServiceHome} />
    <Stack.Screen  name='serviceList' component={ServiceList} />
    <Stack.Screen  name='serviceOne' component={ServiceOneScreen} />
  </Stack.Navigator>
  )
}

export default ClientServiceStack