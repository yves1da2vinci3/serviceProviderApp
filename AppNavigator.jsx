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
import { useContext } from 'react'
import { AuthContext } from './Context/AuthContext'
import AuthStack from './Navigators/stacks/AuthStack'
import { HomeContext } from './Context/HomeContext'
const AppNavigator = () => {
    const Stack = createNativeStackNavigator()
    const {isLogin,user} = useContext(AuthContext)
    const {firstTime} = useContext(HomeContext)
    console.log(isLogin)
  return (
   
        <Stack.Navigator>
          { !firstTime && <Stack.Screen options={{ headerShown : false }} name='onboarding' component={OnBoardingScreen} /> }
            
            { !isLogin  && <Stack.Screen options={{ headerShown : false }} name='auth' component={AuthStack} /> }
            
             { user.isServiceProvider ? <Stack.Screen options={{ headerShown : false }} name='service' component={ProviderBottomNav} /> : <Stack.Screen options={{ headerShown : false }} name='client' component={ClientNav} /> }
            
        </Stack.Navigator>
   
    
  )
}

export default AppNavigator