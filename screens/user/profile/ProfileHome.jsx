import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import { TextInput } from 'react-native'
import { AuthContext } from '../../../Context/AuthContext'
import httpClient, { apiUrl } from '../../../config/api'
import Loader from '../../../Components/Loader'
import * as ImagePicker from 'expo-image-picker';
import { useToast } from 'react-native-toast-notifications'

const ProfileHome = (props) => {
  const navigation = useNavigation()
  const [isLoading,setIsLoading] = useState(false)
  const [fullname,setFullName] = useState("")
  const [phoneNumber,setPhoneNumber] = useState("")
  const toast = useToast()
  const [image,setImage] = useState(null)
  const {user,logout} = useContext(AuthContext)

 const HeaderLeft = () => {
  if (!navigation) {
    return null;
  }

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon name='reorder-four-outline' color="white" type='ionicon' />
    </TouchableOpacity>
  );
};



  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft /> ,title : "my profile" })
  },[navigation])

// Pick Image
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage({ uri : result.assets[0].uri,name: `user`, type : result.assets[0].type});
    }
  };

  const modifyProfile = async() => { 
    setIsLoading(false)
    try {
      const config = {
        headers: {
            'Accept': 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      }
      const formData = new FormData();
      formData.append("image",image) 
      formData.append("fullName",fullname) 
      formData.append("phoneNumber",phoneNumber) 
      const {data} =  await httpClient.put(`/auth/${user._id}/edit`,formData ,config)
      toast.show(`user modfied with success`,{ type : "success" })
      props.navigation.goBack()
      setSession(data.user)
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
      console.log(error)
      setIsLoading(false)
      
    }
   }
 
  return (
    <View style={tw `flex-1 bg-white items-center  p-4`}>
      {/* IMage */}
      <View style={tw `h-70  bg-red-100 mt-3 relative  w-60`}>
        <TouchableOpacity onPress={()=> pickImage()} style={tw `h-12  absolute z-30 right-0 -top-3 w-12 shadow-lg items-center justify-center  rounded-lg bg-white`} >
          <Icon type='ioncion' name='camera' />
        </TouchableOpacity>
        <Image style={tw `h-70 w-60 rounded-lg`} resizeMode="cover" source={{ uri : image ? image.uri :  apiUrl + user.photoUrl }} />
        <Text style={tw `text-center text-lg mt-4 font-semibold`}>{ user.fullname}</Text>
      
      </View>

      <View style={tw `flex-1  w-full  px-5 mt-15 `} >
        {/* Full Name */}
    <View style={tw `h-20 `} >
     <Text style={tw `font-semibold mb-2`}>Full Name</Text>
     <TextInput onChangeText={(text)=> setFullName(text)} style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your full name' defaultValue={user.fullname}  />
    </View>
     {/* Phone Number */}
    <View style={tw `h-20 mt-4 `} >
     <Text style={tw `font-semibold mb-2`}>Mobile Number</Text>
     <TextInput onChangeText={(text)=> setPhoneNumber(text)} style={tw `flex-1 bg-white rounded-lg 2 shadow  p-2 `} placeholder='enter your phoneNumber'   />
    </View>
    
    <TouchableOpacity onPress={()=> modifyProfile()}  style={ tw `bg-[${Colors.primaryColor}] h-15   flex justify-center items-center  rounded-2xl mt-10 self-center w-[45%]`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Confirm</Text>
      </TouchableOpacity>
    </View>
    <Loader isLoading={isLoading} />
    </View>
  )
}

export default ProfileHome