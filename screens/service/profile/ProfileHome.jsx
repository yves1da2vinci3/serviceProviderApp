import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import Colors from '../../../Constants/Colors'
import { Icon } from '@rneui/base'
import httpClient, { apiUrl } from '../../../config/api'
import { AuthContext } from '../../../Context/AuthContext'
import { useFocusEffect } from '@react-navigation/native'
import { serviceMap } from '../../../utils/data'
// import * as Notifications  from 'expo-notifications';



const ProfileHome = (props) => {
  const {user,logout} = useContext(AuthContext)
  const [Offer,setOffer] = useState({})
  const [isLoading,setIsLoading] = useState(true)
  const fetchOffer = async() => { 
    try {
      const {data} = await httpClient.get(`/providers/offers/${user._id}/users`)
      setOffer(data.offer)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
   }
  useFocusEffect( 
    React.useCallback(()=>{
      fetchOffer()
    },[])
  )
  const Logout = () => { 
    logout()
    props.navigation.navigate("login")
    }
  return (
    <View style={tw `flex-1 pt-10 bg-white px-3`}>
{/* user Info */}
     <View style={tw `h-40  p-2 flex-row`}>
      {/* Image */}
      <View style={tw ` h-30 w-30 rounded-lg`}>
        <Image  style={tw `h-30 w-30 rounded-lg`} source={{ uri : apiUrl + user.photoUrl }} />
      </View>
      <View style={tw `flex-1  p-2`}>
        <Text style={tw `font-bold text-lg`}>{user.fullname}</Text>
        <Text style={tw `text-gray-500 mb-4 `}>{user.email}</Text>
        <View style={tw `items-center bg-yellow-400 rounded-full  justify-center p-2`}>
        <Text style={tw `font-bold text-[${Colors.primaryColor}]`}>{isLoading ? "..." : Offer ? serviceMap.get(Offer.type) : "None"}</Text>
        </View>
       
      </View>
     </View>
     {/* Opitons */}
  <View style={tw `flex-1  `}>
  <Text style={tw `font-bold text-gray-400 ml-4 uppercase  mb-4 text-md`}>Account</Text>

    <TouchableOpacity onPress={()=> props.navigation.navigate("serviceModifyProfile")} style={tw `h-13 border-b-gray-200 border-b-2 flex items-center p-2 flex-row`}>
      <Icon type='ionicon' name='person-outline' />
      <Text style={tw `font-bold ml-4 text-md`}>profile data</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> props.navigation.navigate("modifyOffer",{offer : Offer ,hasOffer : Offer ? true : false})} style={tw `h-13 border-b-gray-200 border-b-2  flex items-center p-2 flex-row`}>
      <Icon type='ionicon' name='receipt-outline' />
      <Text style={tw `font-bold ml-4 text-md`}> {isLoading ? "..." : Offer ? "Modify offer" : "Create offer" } </Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={()=> Logout()}  style={tw `h-13 border-b-gray-200 border-b-2  flex items-center p-2 flex-row`}>
      <Icon type='ionicon' name='log-out-outline' />
      <Text style={tw `font-bold ml-4 text-md`}> logout </Text>
    </TouchableOpacity>
  </View>
    </View>
  )
}

export default ProfileHome