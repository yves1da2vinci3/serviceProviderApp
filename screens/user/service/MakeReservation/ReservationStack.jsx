import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PickDate from './PickDate'
import TimeAndLocation from './TimeAndLocation'
const ReservationStack = () => {
  const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
    <Stack.Screen options={{ headerShown : false }} name='pickDate' component={PickDate} />
    <Stack.Screen options={{ headerShown : true }} name='TimeAndLocation' component={TimeAndLocation} />
  </Stack.Navigator>
  )
}

export default ReservationStack