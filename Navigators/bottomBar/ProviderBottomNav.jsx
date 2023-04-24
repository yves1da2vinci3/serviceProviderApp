import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Colors from '../../Constants/Colors'
import ProfileStack from '../stacks/provider/ServiceProfileStack'
import OrderStack from '../stacks/provider/ServiceOrderStack'
import ServiceHomeStack from '../stacks/provider/ServiceHomeStack'
import Statistics from '../.../../../screens/service/statistics/StatisticHome'
import { Icon } from '@rneui/base'
const ProviderBottomNav = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator  screenOptions={{ tabBarActiveTintColor : `${Colors.primaryColor}` ,tabBarInactiveTintColor : "lightgrey"} } >
      <Tab.Screen  options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
              
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="home" type='font-awesome' />
                
            </View>
            
            )} } name="home" component={ServiceHomeStack} />

      <Tab.Screen options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="stats-chart" type='ionicon' />
                
            </View>)} } name="statistics" component={Statistics} />

   

      <Tab.Screen options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="receipt-outline" type='ionicon' />
                
            </View>)} } name="order" component={OrderStack} />

      <Tab.Screen options={{ headerShown : false , tabBarShowLabel : false, tabBarIcon: ({ focused }) => (
            <View style={{ padding: 4, borderRadius: 8, alignItems: "center" }}>
                <Icon color={`${ focused ? Colors.primaryColor : "lightgrey"}`} name="person-outline" type='ionicon' />
                
            </View>)} } name="profile" component={ProfileStack} />
    </Tab.Navigator>
  )
}

export default ProviderBottomNav