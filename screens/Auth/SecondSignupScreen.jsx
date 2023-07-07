import { View, Text, TouchableOpacity, TextInput,ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import Colors from '../../Constants/Colors'
import PasswordInput from '../../Components/PasswordInput'
import { isValidEmail, isValidPassword, isValidPhoneNumber } from '../../utils/Validator'
import { useToast } from 'react-native-toast-notifications'
const SecondSignupScreen = (props) => {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [fullName,setfullName] = useState("")
  const [confirmPassword,setconfirmPassword] = useState("")
  const [PhoneNumber,setPhoneNumber] = useState("")

  const toast = useToast()
  const moveToThird = () => {
    // Check if email is valid
    if (!isValidEmail(email)) {
      toast.show("Please enter a valid email address.")
      return;
    }
  
    // Check if password meets requirements
    if (!isValidPassword(password)) {
      toast.show("Please enter a password of at least 8 characters.");
      return;
    }
  
    // Check if fullName is not empty
    if (fullName.trim() === "") {
      toast.show("Please enter your full name.");
      return;
    }
  
    // Check if confirmPassword matches password
    if (confirmPassword !== password) {
      toast.show("Passwords do not match.");
      return;
    }
  
    // Check if PhoneNumber is valid
    if (!isValidPhoneNumber(PhoneNumber)) {
      toast.show("Please enter a valid phone number.");
      return;
    }
   const data = {
    email,
    password,
    phoneNumber : PhoneNumber,
    fullName,
    isServiceProvider : props.route.params.userType === 1? false : true
   }
   props.navigation.navigate("thirdSignup",{data})
    // All information is verified, proceed to the third step
    // Add your logic here to navigate or perform actions for the third step
  };
  
  return (
    <View  style={tw `flex-1 p-5 pt-10 bg-white`}>
    <TouchableOpacity   onPress={()=>props.navigation.goBack() } style={tw `h-14 mb-4 rounded-lg bg-[${Colors.blackColor}] items-center flex justify-center   z-20  border-white border-2 w-14`} >
               <Icon name='arrow-back-outline' type='ionicon' color="white" />
           </TouchableOpacity>
      <Text style={tw `text-3xl tracking-wide font-semibold`}>Let's get started</Text>
      <Text style={tw `text-lg tracking-wide font-medium`}>create an account</Text>

    <ScrollView showsVerticalScrollIndicator={false} style={tw `flex-1  px-5 mt-10 `} >
    <View style={tw `h-20 `} >
     <Text style={tw `font-semibold mb-2`}> Email </Text>
     <TextInput onChangeText={(txt)=> setEmail(txt)} style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your email'  />
    </View>
        {/* Full Name */}
    <View style={tw `h-20 `} >
     <Text style={tw `font-semibold mb-2`}>Full Name</Text>
     <TextInput onChangeText={(txt)=> setfullName(txt)} style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your fullname'  />
    </View>
   
     {/* Phone Number */}
    <View style={tw `h-20 mt-4 `} >
     <Text style={tw `font-semibold mb-2`}>Mobile Number</Text>
     <TextInput onChangeText={(txt)=> setPhoneNumber(txt)} style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your email'  />
    </View>
    {/* Password */}
    <View style={tw `h-20  mt-10`} >
     <Text style={tw `font-semibold mb-2`}>Password</Text>
     <PasswordInput  setPassword={setPassword} placeholder='enter your password'  />
    </View>
    {/* Confirm Password */}
    <View style={tw `h-20  mt-10`} >
     <Text style={tw `font-semibold mb-2`}>Confirm Password</Text>
     <PasswordInput  setPassword={setconfirmPassword} placeholder='enter your password'  />
    </View>

 
    </ScrollView>

    <TouchableOpacity onPress={()=> moveToThird()}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-full`} >
       <Text style={tw `capitalize text-white text-xl font-semibold`} >Continue</Text>
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> props.navigation.navigate("firstSignup")} style={tw `self-center  mt-2  flex-row items-center`}>   
      <Text style={tw `text-lg font-semibold`}>Have an account ?</Text>
      <Text style={tw `text-lg font-semibold  ml-1 text-[${Colors.primaryColor}]`}>Login to your account </Text>
     </TouchableOpacity>
   </View>
  )
}

export default SecondSignupScreen