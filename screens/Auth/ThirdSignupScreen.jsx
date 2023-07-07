import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Avatar, Icon } from '@rneui/base'
import Colors from '../../Constants/Colors'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';
import Loader from '../../Components/Loader'
import DropDown from '../../Components/Dropdown'
import { useToast } from 'react-native-toast-notifications'
import httpClient from '../../config/api'
const ThirdSignup = (props) => {
  const toast = useToast()
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title : 'Pick an Image',headerLeft: ()=>       <Icon onPress={()=> props.navigation.goBack() } size={30} type="ionicon" name='arrow-back-outline'  />
        ,      })
        },[])
    const [Image,setImage] = useState(null)
    const [isLoading,setIsLoading] = useState(false)
    const [serviceId,setServiceId] = useState({})
    // get user information from the props
  const userInfo = props.route.params.data
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
      // signup handler
      const signupHandler = async () => { 
        
      if(Image === null){
      toast.show("Please pick an Image", {
        type: "danger",
        placement: "bottom",
        duration: 4000,
        offset: 60,
        animationType: "slide-in",
      })
     }else{
      setIsLoading(true)
      try {
        const config = {
          headers: {
              'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
        const formData = new FormData();
        formData.append("image",Image) 
        formData.append("fullName",props.route.params.data.fullName) 
        formData.append("isServiceProvider",props.route.params.data.isServiceProvider) 
        formData.append("phoneNumber",props.route.params.data.phoneNumber) 
        formData.append("password",props.route.params.data.password) 
        formData.append("email",props.route.params.data.email) 
        const {data} =  await httpClient.post("/auth/register",formData ,config)
        toast.show(`user created with success`,{ type : "success" })
        props.navigation.navigate("login")
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
    

      
    
     
       }
  return (
    <View style={tw `flex-1 bg-white px-3`}>
      <View style={tw `h-48 w-full   flex justify-center items-center`}>
        <View style={tw`relative`}>
       <Avatar size={140} rounded source={{ uri : Image ? Image.uri :"https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo" }} />
            <TouchableOpacity onPress={()=> pickImage()} style={tw `h-8 w-8 bg-[${Colors.primaryColor}] flex justify-center items-center absolute bottom-2 right-2 rounded-full`}>
                <Icon  type='ionicon' name='pencil-outline' color="white" size={20} />
            </TouchableOpacity>
        </View>
    </View>
    {/* choose subservice */}
    {userInfo.userType === 2 && (<View style={tw``}>
     <Text style={tw `font-semibold mb-2`}> Select yout service category </Text>
       <DropDown value={serviceId} setValue={setServiceId} />
    </View>)}
    {/* btn */}
    <TouchableOpacity onPress={()=> signupHandler()}  style={ tw ` absolute bottom-6 self-center bg-[${Colors.primaryColor}] h-14 mt-36 flex justify-center items-center rounded-lg w-full`} >
    <Text style={tw `capitalize text-white text-xl font-semibold`} >Finalize</Text>
  </TouchableOpacity>
  <Loader isLoading={isLoading} />
    </View>
  )
}

export default ThirdSignup