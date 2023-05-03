import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ProfileHome from '../../../screens/service/profile/ProfileHome'
import ModifyOffer from '../../../screens/service/profile/ModifyOffer'
import ModifyProfile from '../../../screens/service/profile/ModifyProfile'
const ServiceProfileStack = () => {
    const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
     <Stack.Screen options={{ headerShown : false}} name='serviceProfileHome' component={ProfileHome}  />
     <Stack.Screen options={{ headerShown : false}} name='serviceModifyProfile' component={ModifyProfile}  />
     <Stack.Screen options={{ headerShown : true}} name='modifyOffer' component={ModifyOffer}  />
    </Stack.Navigator>
  )
}

export default ServiceProfileStack