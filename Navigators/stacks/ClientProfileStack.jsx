import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileHome from '../../screens/user/profile/ProfileHome'
const ClientProfileStack = () => {
    const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
    <Stack.Screen  name='profileHome' component={ProfileHome} />
  </Stack.Navigator>
  )
}

export default ClientProfileStack