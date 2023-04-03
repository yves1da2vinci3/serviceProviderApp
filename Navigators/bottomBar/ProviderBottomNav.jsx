import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../Constants/Colors'
import HomeStack from '../stacks/UserHomeStack'
import ProfileStack from '../stacks/ClientProfileStack'
import ServiceStack from '../stacks/ClientServiceStack'
import OrderStack from '../stacks/ClientOrderStack'
const ProviderBottomNav = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator  screenOptions={{ tabBarActiveTintColor : `${Colors.primaryColor}` ,tabBarInactiveTintColor : "lightgrey"} } >
      <Tab.Screen  options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
              
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="home" type='font-awesome' />
                {focused && <Badge  status='success' />}
            </View>
            
            )} } name="home" component={HomeStack} />

      <Tab.Screen options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="search-outline" type='ionicon' />
                {focused && <Badge  status='success' />}
            </View>)} } name="search" component={ServiceStack} />

   

      <Tab.Screen options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="receipt-outline" type='ionicon' />
                {focused && <Badge  status='success' />}
            </View>)} } name="order" component={OrderStack} />

      <Tab.Screen options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="person-outline" type='ionicon' />
                {focused && <Badge  status='success' />}
            </View>)} } name="profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default ProviderBottomNav