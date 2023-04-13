import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon, Image } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import Barber from '../../../assets/images/bar.jpg'
import massage from '../../../assets/images/masseur.jpg'
import electrician from '../../../assets/images/eletrician.jpg'
const ServiceList = (props) => {
  const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />,title : "Popular services" })
  },[navigation])
  const foodFilter = [
    {
      id: 1,
      Iconname : "broom",
      color : "green",
      Title : "Cleaning"
      
    },
    {
      id: 6,
      Iconname : "hand-sparkles",
      color : "blue",
      Title : "Hand"
      
    },
    {
      id: 2,
      Iconname : "cookie-bite",
      color : "red",
      Title : "Cooking"
      
    },
    {
      id: 3,
      Iconname : "car",
      color : "pink",
      Title : "Driving"
      
    },
   
  ]

  const popularServices = [ 
     {
    id : 1,
    name : "Barber",
    imageLink : Barber,
    price : "34",
    rating : "4.3",
    time : "1h 30min"
  } ,
     {
    id : 1,
    name : "Massage",
    imageLink : massage,
    price : "60",
    rating : "4",
    time : "0h 40min"
  } ,
     {
    id : 1,
    name : "Electrician",
    imageLink : electrician,
    price : "14",
    rating : "5",
    time : "2h 15min"

  } ,

]
  return (
    <View style={tw `flex-1 bg-white p-2`}>
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} contentContainerStyle={tw `mt-2`} >
        { popularServices.map(popS => (<TouchableOpacity activeOpacity={0.6} onPress={()=> props.navigation.navigate("serviceOne")} style={tw `bg-white   h-75 mb-8 w-full rounded-xl shadow`} >
    {/* iamge and heart */}
    <View style={tw `h-52 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-52  w-full  rounded-xl`} source={popS.imageLink} />
      {/* like */}
      <View style={tw `h-10 w-10 top-3 right-4 bg-white absolute items-center justify-center rounded-full z-40`} >
        <Icon type='ionicon' name='heart-outline'  color={Colors.primaryColor} />
      </View>
    </View>
    {/* Title */}
    <View style={tw `flex-row justify-between px-3 items-center`} >
    <Text style={tw `pl-2 text-4 mt-2`}>{popS.name}</Text>
    <Text style={tw `pl-2 text-4 font-semibold text-gray-400 mt-2`}>{popS.time}</Text>

    </View>
    <View style={tw ` flex-row   px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold text-2xl`}> {popS.price} $</Text>
           
           <View style={tw `flex-row  items-center`} >
           <Icon type='ionicon' name='star' color={Colors.primaryColor} />
           <Text style={tw `font-bold text-[${Colors.primaryColor}] `}> {popS.rating}</Text>
           </View>
          </View>
   </TouchableOpacity> )) }
    </ScrollView>
    </View>
  )
}

export default ServiceList