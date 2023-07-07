import React from 'react'
import ServiceHome from '../../../screens/service/home/ServiceHome'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import NotificationScreen from '../../../screens/user/home/NotificationsScreen'
const ServiceHomeStack = () => {
    const Stack = createNativeStackNavigator()
    return (
      <Stack.Navigator>
       <Stack.Screen options={{ headerShown : false }} name='serviceHome' component={ServiceHome}  />
       <Stack.Screen options={{ headerShown : true }} name='notifications' component={NotificationScreen}  />
      </Stack.Navigator>
  )
}

export default ServiceHomeStack