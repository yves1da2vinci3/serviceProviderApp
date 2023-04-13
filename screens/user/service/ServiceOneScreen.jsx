import { View, Text, TouchableOpacity, Image ,ScrollView} from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import massage from '../../../assets/images/masseur.jpg'
import Accordion from '../../../Components/Accordion'
import ReviewItem from '../../../Components/ReviewItem'

const ServiceOneScreen = () => {
  const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-2 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />,title : "service  : cleaning" })
  },[navigation])
  return (
    <ScrollView  showsVerticalScrollIndicator={false} style={tw `bg-white flex-1 p-2`}>
     <TouchableOpacity activeOpacity={0.6}  style={tw `bg-white   h-65 mb-8 w-full rounded-xl `} >
    {/* iamge and heart */}
    <View style={tw `h-52 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-52  w-full  rounded-xl`} source={massage} />
      {/* like */}
      <View style={tw `h-10 w-10 top-3 right-4 bg-white absolute items-center justify-center rounded-full z-40`} >
        <Icon type='ionicon' name='heart-outline'  color={Colors.primaryColor} />
      </View>
    </View>
    {/* Title */}
    <View style={tw `flex-row justify-between px-3 items-center`} >
    <Text style={tw `pl-2 text-4 mt-2`}>Full time massage</Text>

    </View>
  
   </TouchableOpacity>
   <Text style={tw `text-lg font-semibold`}>Description</Text>
   <Text style={tw `text-lg`}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</Text>
   <View style={tw `flex-row justify-between  items-center`} >
    <Text style={tw `pl-2 text-3 font-semibold text-gray-400 mt-2`}>12/03/2023 12h30min~13h30min</Text>
    <Text style={tw `pl-2 text-3 font-semibold text-gray-400 mt-2`}>1h00min</Text>

    </View>
    <View style={tw `h-20  w-full px-2  flex-row items-center`}>
            <Avatar  size={60} containerStyle={tw `rounded-lg`} source={{ uri : "https://media.licdn.com/dms/image/C4E03AQGr1ATJxgLlFg/profile-displayphoto-shrink_800_800/0/1639553598181?e=2147483647&v=beta&t=UInTmNwhvz8vV051gs45Uo28k_e5aYk6NKnmMSRj5Zo"}} />
             {/* Name and Description */}
             <View style={tw ` ml-2`}>
              <Text style={tw `font-bold`}>Yves Lionel Diomande</Text>
              <Text style={tw `font-semibold text-gray-500 mt-4`}>+3 years of experience</Text>
             </View>
             {/* status */}
             <View style={tw `flex flex-1 justify-end flex-row items-center`}>
              <Icon name='call' type='ionicon' color={Colors.primaryColor}  />
              <Icon name='chatbox' style={tw `ml-4`} type='ionicon' color={Colors.primaryColor}  />
             </View>
         </View>
         <Accordion title="Ratings and comments" children={<ScrollView>
          <ReviewItem />
         </ScrollView>}  />

         
    </ScrollView>
  )
}

export default ServiceOneScreen