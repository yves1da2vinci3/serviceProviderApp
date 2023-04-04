import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ClientHome from '../../screens/user/home/ClientHome'
import NotificationsScreen from '../../screens/user/home/NotificationsScreen'
const UserHomeStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown : false }} name='clientHome' component={ClientHome} />
    <Stack.Screen options={{ headerShown : true }} name='notifications' component={NotificationsScreen} />
  </Stack.Navigator>
  )
}

export default UserHomeStack