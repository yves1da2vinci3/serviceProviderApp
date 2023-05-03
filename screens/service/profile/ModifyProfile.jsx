import { View, Text, TouchableOpacity, TextInput ,ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
const ModifyProfile = () => {
    const navigation = useNavigation()
    useEffect(()=>{
        navigation.setOptions({title : 'Profile settings',headerLeft: ()=>       <Icon size={30} type="ionicon" name='arrow-back-outline'  />
        ,      })
        },[])
  return (
    <ScrollView style={tw `flex-1 relative bg-white px-2`}>
        {/* Avatar */}
        <View style={tw `h-56 w-full  mt-2 flex justify-center items-center`}>
            <View style={tw`relative`}>
           <Avatar size={160} rounded source={{ uri : "https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo"}} />
                <TouchableOpacity style={tw `h-8 w-8 bg-[${Colors.primaryColor}] flex justify-center items-center absolute bottom-2 right-2 rounded-full`}>
                    <Icon  type='ionicon' name='pencil-outline' color="white" size={20} />
                </TouchableOpacity>
            </View>
        </View>

{/* Value */}
<View style={tw `h-15 w-full mt-2 p-2`}>
    <Text style={tw `text-gray-400 ml-3`}>Full name</Text>
    <View style={tw`flex justify-between  flex-row items-center px-2`}>
      <TextInput selectionColor={`${Colors.primaryColor}`} secureTextEntry={false} style={ tw `p-2  flex-1 text-gray-500 font-semibold border-b-2 border-b-gray-200`} value="yves DIOMANDE" />

        <Text style={tw `font-semibold text-[${Colors.primaryColor}]`}>EDIT</Text>
    </View>
</View>
<View style={tw `h-15 w-full mt-2 p-2`}>
    <Text style={tw `text-gray-400 ml-3`}>Phone Number</Text>
    <View style={tw`flex justify-between  flex-row items-center px-2`}>
      <TextInput selectionColor={`${Colors.primaryColor}`} secureTextEntry={false} style={ tw `p-2  flex-1 text-gray-500 font-semibold border-b-2 border-b-gray-200`} value="0140117596" />

        <Text style={tw `font-semibold text-[${Colors.primaryColor}]`}>EDIT</Text>
    </View>
</View>
<View style={tw `h-15 w-full mt-2 p-2`}>
    <Text style={tw `text-gray-400 ml-3`}>Email</Text>
    <View style={tw`flex justify-between  flex-row items-center px-2`}>
      <TextInput selectionColor={`${Colors.primaryColor}`} secureTextEntry={false} style={ tw `p-2  flex-1 text-gray-500 font-semibold border-b-2 border-b-gray-200`} value="yves.lionel.diomande@gmail.com" />

        <Text style={tw `font-semibold text-[${Colors.primaryColor}]`}>EDIT</Text>
    </View>
</View>
<View style={tw `h-15 w-full mt-2 p-2`}>
    <Text style={tw `text-gray-400 ml-3`}>Location</Text>
    <View style={tw`flex justify-between  flex-row items-center px-2`}>
      <TextInput selectionColor={`${Colors.primaryColor}`} secureTextEntry={false} style={ tw `p-2  flex-1 text-gray-500 font-semibold border-b-2 border-b-gray-200`} value="yopougon" />

        <Text style={tw `font-semibold text-[${Colors.primaryColor}]`}>EDIT</Text>
    </View>
</View>
<View style={tw `h-15 w-full mt-2 p-2`}>
    <Text style={tw `text-gray-400 ml-3`}>password</Text>
    <View style={tw`flex justify-between  flex-row items-center px-2`}>
      <TextInput selectionColor={`${Colors.primaryColor}`} secureTextEntry={true} style={ tw `p-2  flex-1 text-gray-500 font-semibold border-b-2 border-b-gray-200`} value="yves DIOMANDE" />

        <Text style={tw `font-semibold text-[${Colors.primaryColor}]`}>EDIT</Text>
    </View>
</View>
{/* bton for confirmation */}
      <TouchableOpacity onPress={()=> props.navigation.navigate("orderOnMap")}  style={ tw `  bottom-2 self-center bg-[${Colors.primaryColor}] h-14 mt-36 flex justify-center items-center rounded-lg w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Confirm</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default ModifyProfile