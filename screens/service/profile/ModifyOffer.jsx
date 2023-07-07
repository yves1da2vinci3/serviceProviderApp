import { View, Text, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import { Image } from 'react-native'
import massage from '../../../assets/images/masseur.jpg'
import { Icon, Tile } from '@rneui/base'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Colors from '../../../Constants/Colors'
import { useNavigation } from '@react-navigation/native'
import DropDown from '../../../Components/Dropdown'
import * as ImagePicker from 'expo-image-picker';
import httpClient, { apiUrl } from '../../../config/api'
import Loader from '../../../Components/Loader'
import { AuthContext } from '../../../Context/AuthContext'
import { useToast } from 'react-native-toast-notifications'

const ModifyOffer = (props) => {
  const {user} =useContext(AuthContext)
  const navigation = useNavigation()
  const [value, setValue] = useState(null);
  const [image,setImage] = useState(null)
  const [isLoading,setIsLoading] = useState(false)
  const [Title,setTitle] = useState("")
  const [Description,setDescription] = useState("")
  const [HourRate,setHourRate] = useState("")

  const toast = useToast()
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
  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />, title : props.route.params.hasOffer  ? "Modify your offer" : "Create your offer" })
  },[navigation])

  // Save Offer
  const SaveOffer = () => {
     if(props.route.params.hasOffer){
      modifyOffer()
     }else{
      createOffer()
     }
    }

    // Modify Offer

    const modifyOffer = async() => { 
      setIsLoading(true)

      try {
        const config = {
          headers: {
              'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
        const formData = new FormData();
        formData.append("image",image) 
        formData.append("title",Title) 
        formData.append("description",Description) 
        formData.append("hourRate",HourRate) 
        formData.append("type",value) 
        const {data} =  await httpClient.put(`/providers/offers/${props.route.params.offer._id}`,formData ,config)
        toast.show(`offer modified with success`,{ type : "success" })
        props.navigation.goBack()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
     }

    // create Offer

    const createOffer = async() => { 
      setIsLoading(true)
      try {
        const config = {
          headers: {
              'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
          },
        }
        const formData = new FormData();
        formData.append("image",image) 
        formData.append("title",Title) 
        formData.append("description",Description) 
        formData.append("hourRate",HourRate) 
        formData.append("type",value) 
        formData.append("userId",user._id) 
        const {data} =  await httpClient.post(`/providers/offers/`,formData ,config)
        toast.show(`offer created with success`,{ type : "success" })
        props.navigation.goBack()
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        console.log(error)
      }
     }
  return (
    <View style={tw `flex-1 bg-white  pt-10 px-3 `}>
      <View style={tw `h-52 mb-5 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-52 w-full rounded-lg`} resizeMode="cover" source={{ uri : image ? image.uri :  apiUrl + props.route.params.offer?.photoUrl }} />
      {/* like */}
      <TouchableOpacity onPress={()=> pickImage()} style={tw `h-full rounded-xl bg-black  absolute z-40 w-full bg-opacity-30   absolute items-center justify-center  z-40`} >
        <Icon type='ioncion' name='image' color="white" />
      <Text style={tw `mt-4 text-white  font-semibold`}>Change the image</Text>

      </TouchableOpacity>
    </View>
    <DropDown setValue={setValue} value={value}  />

    <ScrollView>
    <Text style={tw `mt-4 text-black text-xl mb-4 font-semibold`}>Title</Text>
    <TextInput defaultValue={props.route.params.hasOffer ? props.route.params.offer.title : "" } onChangeText={(text) => setTitle(text)} style={tw `min-h-14 p-2 border-b-2 border-b-black bg-slate-300`} />
    <Text style={tw `mt-4 text-black text-xl mb-4 font-semibold`}>Description</Text>
    <TextInput onChangeText={(text) => setDescription(text)}  defaultValue={props.route.params.hasOffer ? props.route.params.offer.description : "" } style={tw `min-h-14 p-2 border-b-2 border-b-black bg-slate-300`} />
    <Text style={tw `mt-4 text-black text-xl mb-4 font-semibold`}>Hour rate</Text>
    <TextInput onChangeText={(text) => setHourRate(text)}  style={tw `min-h-14 p-2 border-b-2 border-b-black bg-slate-300`} defaultValue={props.route.params.hasOffer ? props.route.params.offer.hourRate.toString() : "" } />
    </ScrollView>

  
    <TouchableOpacity onPress={()=> SaveOffer()}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >{props.route.params.hasOffer ? "update" : "Create" } offer</Text>
      </TouchableOpacity>
      <Loader  isLoading={isLoading} />
    </View>
  )
}

export default ModifyOffer