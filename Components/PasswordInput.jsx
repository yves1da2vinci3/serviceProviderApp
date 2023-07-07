import { View,  TouchableOpacity, TextInput, } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/themed'
import Colors from '../Constants/Colors'
import { Text } from 'react-native'

const PasswordInput = ({setPassword,placeholder}) => {
    
    const [Hide,setHide] = useState(true)
  return (
    <View style={tw `h-17  bg-white rounded-lg shadow p-2  flex-row `} >
    
    <TextInput placeholder={placeholder ? placeholder :"Password"} onChangeText={(txt)=> setPassword(txt)} selectionColor={`${Colors.blackColor}`} secureTextEntry={Hide}    style={tw `flex-1   `}  />
    <TouchableOpacity onPress={()=> setHide(!Hide)} style={tw `w-10 h-full items-center justify-center flex`}>
        {/* <Image style={ tw `h-6 w-6`} source={depositIcon} /> */}
        <Icon type='ionicon' size={20}  color={`${Colors.blackColor}`} name={Hide ? "eye" : "eye-off"} />
      </TouchableOpacity>
   </View>
  )
}

export default PasswordInput