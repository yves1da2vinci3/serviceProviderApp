import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { CheckBox, Icon } from '@rneui/base'
import Colors from '../../Constants/Colors'
import Client from '../../assets/images/client.jpg'
import provider from '../../assets/images/serviceProvider.jpeg'
const FirstSignupScreen = (props) => {
    const  [userTypeIndex,setUserTypeIndex] = useState(1)
  return (
    <View style={tw `flex-1 p-5 pt-10 bg-white`}>
    <TouchableOpacity   onPress={()=>props.navigation.goBack() } style={tw `h-14 mb-4 rounded-lg bg-[${Colors.blackColor}] items-center flex justify-center   z-20  border-white border-2 w-14`} >
               <Icon name='arrow-back-outline' type='ionicon' color="white" />
           </TouchableOpacity>
      <Text style={tw `text-3xl tracking-wide font-semibold`}>You are</Text>
      <Text style={tw `text-lg tracking-wide font-medium`}>Please select your role for this app</Text>

    <View style={tw `flex-1  px-5 justify-center `} >
   <TouchableOpacity onPress={()=> setUserTypeIndex(1) } style={tw `h-54 flex `} >
    {/* CheckBox and UserName */}
    <View style={tw `flex flex-row h-13 items-center `} >
    <CheckBox
           checked={userTypeIndex === 1}
           onPress={() => setUserTypeIndex(1)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           checkedColor={`${Colors.blackColor}`}
         />
         <Text >Customer</Text>
        
       
      
    </View>
     {/* Image */}
    <Image source={Client}  style={tw `flex-1 w-full rounded-xl`} />
   </TouchableOpacity>
   <TouchableOpacity onPress={()=> setUserTypeIndex(2) } style={tw `h-54 flex `} >
    {/* CheckBox and UserName */}
    <View style={tw `flex flex-row h-13 items-center `} >
    <CheckBox
           checked={userTypeIndex === 2}
           onPress={() => setUserTypeIndex(2)}
           checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o"
           checkedColor={`${Colors.blackColor}`}
         />
         <Text >Service Provider</Text>
        
       
      
    </View>
     {/* Image */}
    <Image source={provider}  style={tw `flex-1 w-full rounded-xl`} />
   </TouchableOpacity>
   
   {/* Button */}
    <TouchableOpacity onPress={()=> props.navigation.navigate("secondSignup")}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-36 self-center`} >
    <Icon name='arrow-forward-outline' type='ionicon' color="white" />
     </TouchableOpacity>
     <TouchableOpacity onPress={()=> props.navigation.navigate("login")} style={tw `self-center  mt-2  flex-row items-center`}>   
      <Text style={tw `text-lg font-semibold`}>Have an  account ?</Text>
      <Text style={tw `text-lg font-semibold  ml-1 text-[${Colors.primaryColor}]`}>login to your account </Text>
     </TouchableOpacity>
    </View>

   </View>
  )
}

export default FirstSignupScreen