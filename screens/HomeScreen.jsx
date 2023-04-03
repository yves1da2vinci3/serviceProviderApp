import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import HappyPicture from '../assets/images/happyFamily.jpg'
import Colors from '../Constants/Colors'
const HomeScreen = (props) => {
  return (
    <View style={tw `flex-1  bg-white`}>
     <Image source={HappyPicture} style={tw `h-118 rounded-b-[20] w-full`}  />
     <Text style={tw `font-bold text-3xl mt-4  text-center `}>All that matters is your happiness</Text>
     <View style={tw `flex-1 px-4 `}>
     <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-30  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate("firstSignup")} style={tw `self-center  mt-2  flex-row items-center`}>   
       <Text style={tw `text-lg font-semibold`}>New User ?</Text>
       <Text style={tw `text-lg font-semibold  ml-1 text-[${Colors.primaryColor}]`}>create an account </Text>
      </TouchableOpacity>
     </View>
     
    </View>
  )
}

export default HomeScreen