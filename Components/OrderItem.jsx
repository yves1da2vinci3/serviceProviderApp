import { View, Text } from 'react-native'
import React from 'react'
import { Avatar, Divider } from '@rneui/base'
import tw from 'twrnc'
import { Icon, Image } from '@rneui/themed'
import Cooking from '../assets/images/cooking.jpg'
import Colors from '../Constants/Colors'

const OrderItem = () => {
  return (
    <View style={tw `h-58 mt-3 bg-white shadow-md border-gray-100 border-[0.1] rounded-lg p-2 flex-col `} >
         {/*Prodiver  */}
         <View style={tw `h-20  w-full px-2  flex-row items-center`}>
            <Avatar size={60} containerStyle={tw `rounded-lg`} source={{ uri : "https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo"}} />
             {/* Name and Description */}
             <View style={tw ` ml-2`}>
              <Text style={tw `font-bold`}>Yves Lionel Diomande</Text>
              <Text style={tw `font-semibold text-gray-500 mt-4`}>+3 years of experience</Text>
             </View>
             {/* status */}
             <Text style={tw `self-start mt-3 ml-3 font-bold text-yellow-500`}>on going</Text>
         </View>
        <Divider />

        {/* service Info */}

        <View style={tw `flex-1 flex-row px-2  mt-2 `}>
          <Image source={Cooking} resizeMode="cover" style={tw `w-30 rounded-lg h-20`} />
          <View style={tw `flex-1   pl-2`}>
            <Text style={tw `font-bold`}> Cooking</Text>
            <Text style={tw `font-semibold text-gray-500 mt-2 `}>12-03-2022 ~ 12h-13h</Text>
            <View style={tw `flex-1 flex-row  px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold`}> 22 $</Text>
           
           <View style={tw `flex-row items-center`} >
           <Icon type='ionicon' name='star' color={Colors.primaryColor} />
           <Text style={tw `font-bold`}> 2</Text>
           </View>
          </View>
          </View>
        </View>

        {/* Message */}
        <View style={tw `h-9 px-4  flex-row items-center `}>
          <View style={tw `flex-row items-center mr-2`}>
          <Icon name='comment-alt' color={Colors.primaryColor}  type='font-awesome-5'/>
            <Text style={tw `font-semibold ml-2`}>Chat with him</Text>
          </View>
          <View style={tw `flex-row items-center mr-2`}>
            <Icon name='credit-card' color={Colors.primaryColor}  type='font-awesome-5'/>
            <Text style={tw `font-semibold ml-2`}>Pay for  the service</Text>
          </View>
        </View>
        </View>
  )
}

export default OrderItem