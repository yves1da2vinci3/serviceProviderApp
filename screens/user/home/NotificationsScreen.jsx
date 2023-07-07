import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import httpClient from '../../../config/api'
import { AuthContext } from '../../../Context/AuthContext'
import Loader from '../../../Components/Loader'
import NotificationItem from '../../../Components/NotificationItem'

const NotificationsScreen = () => {
  const navigation = useNavigation()
  const [notifications,setNotifications] = useState([]) 
  const [isLoading,setIsLoading] = useState(true)
  const {user} = useContext(AuthContext)
  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft /> })
  },[navigation])


  

  const fetchNotifications =  async() => { 
    try {
      const {data} = await httpClient.get(`/users/${user._id}/notifications`)
      setNotifications(data.notifications)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)

      console.log(error)
    }
   }

   useFocusEffect( 
    useCallback(()=>{
    fetchNotifications()
    },[])
   )

  return (
    <View style={tw `flex-1 bg-[#FDFDFD] p-4`}>
      <ScrollView>
     
       { isLoading ? <Text>loading</Text>  : notifications.map((notifi,index)=> (
        <NotificationItem notification={notifi} key={index} />
       )) }
       
      </ScrollView>
      <Loader  isLoading={isLoading} />
    </View>
  )
}

export default NotificationsScreen
