import { View, Text, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import { Image } from 'react-native'
import { AirbnbRating } from '@rneui/themed'

const RatingScreen = () => {
    const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft /> })
  },[navigation])
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw `flex-1  p-3 bg-white`}>
       <View style={tw `h-70  self-center bg-red-100 mt-3 relative  w-60`}>
        <TouchableOpacity style={tw `h-12  absolute z-30 right-0 -top-3 w-12 shadow-lg items-center justify-center  rounded-lg bg-white`} >
          <Icon type='ioncion' name='camera' />
        </TouchableOpacity>
        <Image style={tw `h-70 w-60 rounded-lg`} resizeMode="cover" source={{ uri : "https://yop.l-frii.com/wp-content/uploads/2023/04/Deviens-le-Achraf-Hakimi-de-ta-generation-une-grande-formation-bientot-organisee-pour-les-hommes-photo-1024x683.jpg"}} />
        <Text style={tw `text-center text-lg mt-4 font-semibold`}>Picture of the work</Text>
      
      </View>
      <Text style={tw ` text-lg mt-12 font-semibold`}>Give a mark</Text>
         <AirbnbRating showRating={false}  />

         {/* Text */}
      <Text style={tw ` text-lg mt-4 font-semibold text-left`}>Enter a comment</Text>

      <TextInput style={tw `flex-1 min-h-13 w-50  w-full bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your email'  />

      <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15 mb-4  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Comment</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default RatingScreen