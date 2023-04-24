import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import { Avatar, Icon } from '@rneui/base'
import Colors from '../../Constants/Colors'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker';

const ThirdSignup = (props) => {
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title : 'Pick an Image',headerLeft: ()=>       <Icon onPress={()=> props.navigation.goBack() } size={30} type="ionicon" name='arrow-back-outline'  />
        ,      })
        },[])
    const [Image,setImage] = useState(null)

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
    {/* Mot de passe */}
    <TouchableOpacity onPress={()=> props.navigation.navigate("service",{ fromSignup : true })}  style={ tw ` absolute bottom-6 self-center bg-[${Colors.primaryColor}] h-14 mt-36 flex justify-center items-center rounded-lg w-full`} >
    <Text style={tw `capitalize text-white text-xl font-semibold`} >Finalize</Text>
  </TouchableOpacity>
    </View>
  )
}

export default ThirdSignup