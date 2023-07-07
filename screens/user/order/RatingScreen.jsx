import { View, Text, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import { Image } from 'react-native'
import { AirbnbRating } from '@rneui/themed'
import Loader from '../../../Components/Loader'
import { AuthContext } from '../../../Context/AuthContext'
import httpClient from '../../../config/api'
import { useToast } from 'react-native-toast-notifications'

const RatingScreen = (props) => {
    const navigation = useNavigation()
const {user} = useContext(AuthContext)
  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );
 const [comment,setComment] =useState("")
 const [rating,setRating] =useState(0)
 const [isLoading,setIsLoading] =useState(0)
  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft /> })
  },[navigation])

  // console.log("offerId : ",props.route.params.offerId)
  const toast = useToast()
  const makeRating = async() => { 
    setIsLoading(true)
    try {
      const data = {
        rating ,
        comment,
        userId : user._id,
        askerName : user.fullname,
        providerId : props.route.params.providerId,
        providerName : props.route.params.providerName
      }
      await httpClient.post(`/users/offers/${props.route.params.offerId}/rating`,data)
      setIsLoading(false)
      toast.show("thanks for the rating",{type : "success"})
      props.navigation.navigate("orderHome")
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
   }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw `flex-1  p-3 bg-white`}>
       
      <Text style={tw ` text-lg mt-12 font-semibold`}>Give a mark</Text>
         <AirbnbRating onFinishRating={(number)=> setRating(number)} showRating={false}  />

         {/* Text */}
      <Text style={tw ` text-lg mt-4 font-semibold text-left`}>Enter a comment</Text>

      <TextInput multiline={true} numberOfLines={5} onChangeText={(text)=> setComment(text)} style={tw `flex-1 min-h-13 w-50  w-full bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your comment'  />

      <TouchableOpacity onPress={()=> makeRating()}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15 mb-4  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Comment</Text>
      </TouchableOpacity>
      <Loader isLoading={isLoading} />
    </ScrollView>
  )
}

export default RatingScreen