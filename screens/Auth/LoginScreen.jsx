import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import Colors from '../../Constants/Colors'

import { useToast } from 'react-native-toast-notifications'
import Loader from '../../Components/Loader'
import PasswordInput from '../../Components/PasswordInput'
import httpClient from '../../config/api'
import {AuthContext} from '../../Context/AuthContext'
const LoginScreen = (props) => {
  const {setSession} = useContext(AuthContext)
  const [email,setEmail] = useState("")
  const [password,setpassword] = useState("")
  const toast = useToast()
  const [isLoading,setIsLoading] = useState(false)
  const loginHandler = async() => { 
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
     toast.show("Enter a Valid Email", {
       type: "danger",
       placement: "bottom",
       duration: 4000,
       offset: 60,
       animationType: "slide-in",
     })
 }
 else if (password === '') {
   toast.show("Please Enter Password", {
     type: "warning",
     placement: "bottom",
     duration: 4000,
     offset: 60,
     animationType: "slide-in",
   })
    
 }
 else if (password.length < 6) {
   toast.show("Passwords must be at least 6 characters", {
     type: "warning",
     placement: "bottom",
     duration: 4000,
     offset: 60,
     animationType: "slide-in",
   })
    
 }else{
  setIsLoading(true)
  try {
  const { data} = await httpClient.post("/auth/login",{email,password})
  setSession(data.user)
  props.navigation.navigate(`${data.user.isServiceProvider ?"service" : "client"}`)
  // console.log(reponse)
  setIsLoading(false)  
  } catch (error) {
    console.log(error)
    toast.show(`${error.response.data.message}`, {
       type: "danger",
       placement: "bottom",
       duration: 4000,
       offset: 60,
       animationType: "slide-in",
     })
    setIsLoading(false)
  }
 }
   }
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
      <TextInput onChangeText={(txt)=> setEmail(txt)} style={tw `flex-1 bg-white rounded-lg  shadow  p-2 `} placeholder='enter your email'  />
     </View>
     <Text style={tw `font-semibold mb-2 mt-3`}>Password</Text>

     <PasswordInput placeholder="enter password" setPassword={setpassword} />
     <TouchableOpacity onPress={()=> loginHandler() }  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> props.navigation.navigate("firstSignup")} style={tw `self-center  mt-2  flex-row items-center`}>   
       <Text style={tw `text-lg font-semibold`}>New User ?</Text>
       <Text style={tw `text-lg font-semibold  ml-1 text-[${Colors.primaryColor}]`}>create an account </Text>
      </TouchableOpacity>
     </View>
       <Loader isLoading={isLoading} />
    </View>
  )
}

export default LoginScreen