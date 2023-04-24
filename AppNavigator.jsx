import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import OnBoardingScreen from './screens/OnBoardingScreen'
import HomeScreen from './screens/HomeScreen'
import LoginScreen from './screens/Auth/LoginScreen'
import FirstSignupScreen from './screens/Auth/FirstSignupScreen'
import SecondSignupScreen from './screens/Auth/SecondSignupScreen'
import ThirdSignupScreen from './screens/Auth/ThirdSignupScreen'
import ClientNav from './Navigators/bottomBar/ClientBottomNav'
import ProviderBottomNav from './Navigators/bottomBar/ProviderBottomNav'
const AppNavigator = () => {
    const Stack = createNativeStackNavigator()
  return (
   
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown : false }} name='onboarding' component={OnBoardingScreen} />
            <Stack.Screen options={{ headerShown : false }} name='home' component={HomeScreen} />
            <Stack.Screen options={{ headerShown : false }} name='login' component={LoginScreen} />
            <Stack.Screen options={{ headerShown : false }} name='firstSignup' component={FirstSignupScreen} />
            <Stack.Screen options={{ headerShown : false }} name='secondSignup' component={SecondSignupScreen} />
            <Stack.Screen options={{ headerShown : true }} name='thirdSignup' component={ThirdSignupScreen} />
            <Stack.Screen options={{ headerShown : false }} name='client' component={ClientNav} />
            <Stack.Screen options={{ headerShown : false }} name='service' component={ProviderBottomNav} />

        </Stack.Navigator>
   
    
  )
}

export default AppNavigator