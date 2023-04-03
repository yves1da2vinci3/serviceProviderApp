import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import Colors from '../../Constants/Colors'
const LoginScreen = (props) => {
  return (
    <View style={tw `flex-1 p-5 pt-10 bg-white`}>
     <TouchableOpacity   onPress={()=>props.navigation.goBack() } style={tw `h-14 mb-4 rounded-lg bg-[${Colors.blackColor}] items-center flex justify-center   z-20  border-white border-2 w-14`} >
                <Icon name='arrow-back-outline' type='ionicon' color="white" />
            </TouchableOpacity>
       <Text style={tw `text-3xl tracking-wide font-semibold`}>Welcome back</Text>
       <Text style={tw `text-lg tracking-wide font-medium`}>Login to your existing account</Text>

     <View style={tw `flex-1  px-5 justify-center `} >
     <View style={tw `h-20 `} >
      <Text style={tw `font-semibold mb-2`}>Email</Text>
      <TextInput style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your email'  />
     </View>
     <View style={tw `h-20  mt-10`} >
      <Text style={tw `font-semibold mb-2`}>Password</Text>
      <TextInput style={tw `flex-1 bg-white rounded-lg shadow p-2  `} placeholder='enter your password'  />
     </View>
     <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-full`} >
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

export default LoginScreen