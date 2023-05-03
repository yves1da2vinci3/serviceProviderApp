import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { Image } from 'react-native'
import massage from '../../../assets/images/masseur.jpg'
import { Icon } from '@rneui/base'
import { TextInput } from 'react-native'
import { TouchableOpacity } from 'react-native'
import Colors from '../../../Constants/Colors'
import { useNavigation } from '@react-navigation/native'
const ModifyOffer = () => {
  const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />, title : "Modify your offer" })
  },[navigation])
  return (
    <View style={tw `flex-1 bg-white  pt-10 px-3 `}>
      <View style={tw `h-52 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-52  w-full  rounded-xl`} source={massage} />
      {/* like */}
      <View style={tw `h-full rounded-xl bg-black  absolute z-40 w-full bg-opacity-30   absolute items-center justify-center  z-40`} >
        <Icon type='ioncion' name='image' color="white" />
      <Text style={tw `mt-4 text-white  font-semibold`}>Change the image</Text>

      </View>
    </View>
    <Text style={tw `mt-4 text-black text-xl mb-4 font-semibold`}>Title</Text>
    <TextInput style={tw `min-h-14 p-2 border-b-2 border-b-black bg-slate-300`} />
    <Text style={tw `mt-4 text-black text-xl mb-4 font-semibold`}>Description</Text>
    <TextInput style={tw `min-h-14 p-2 border-b-2 border-b-black bg-slate-300`} />
    <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >update offer</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ModifyOffer