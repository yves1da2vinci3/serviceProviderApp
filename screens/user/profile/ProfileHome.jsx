import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import { TextInput } from 'react-native'
const ProfileHome = () => {
  const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='reorder-four-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft /> ,title : "my profile" })
  },[navigation])
  return (
    <View style={tw `flex-1 bg-white items-center  p-4`}>
      {/* IMage */}
      <View style={tw `h-70  bg-red-100 mt-3 relative  w-60`}>
        <TouchableOpacity style={tw `h-12  absolute z-30 right-0 -top-3 w-12 shadow-lg items-center justify-center  rounded-lg bg-white`} >
          <Icon type='ioncion' name='camera' />
        </TouchableOpacity>
        <Image style={tw `h-70 w-60 rounded-lg`} resizeMode="cover" source={{ uri : "https://yop.l-frii.com/wp-content/uploads/2023/04/Deviens-le-Achraf-Hakimi-de-ta-generation-une-grande-formation-bientot-organisee-pour-les-hommes-photo-1024x683.jpg"}} />
        <Text style={tw `text-center text-lg mt-4 font-semibold`}>The Goat Archraf Hakimi</Text>
      
      </View>

      <View style={tw `flex-1  w-full  px-5 mt-15 `} >
        {/* Full Name */}
    <View style={tw `h-20 `} >
     <Text style={tw `font-semibold mb-2`}>Full Name</Text>
     <TextInput style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your email'  />
    </View>
     {/* Phone Number */}
    <View style={tw `h-20 mt-4 `} >
     <Text style={tw `font-semibold mb-2`}>Mobile Number</Text>
     <TextInput style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your email'  />
    </View>
    
    <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15   flex justify-center items-center  rounded-2xl mt-10 self-center w-[45%]`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Confirm</Text>
      </TouchableOpacity>
    </View>
    </View>
  )
}

export default ProfileHome