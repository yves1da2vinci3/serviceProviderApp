import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import carpenter from '../../../assets/images/carpenter.jpg'
const ClientHome = (props) => {
  const [selectedId,setSelectedId] = useState(6)

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
  return (
    <View style={tw `bg-white flex-1 pt-10`}>
      {/* NavBar */}
      <View style={ tw `h-12 bg-white  flex-row px-5 items-center justify-between `} >
      <View style={ tw `flex flex-row items-center`}>
      <Icon name='person-circle-outline' type='ionicon' size={26}  color={`${Colors.primaryColor}`} />
      <Text style={tw `ml-3 font-semibold`}>Yves lionel Diomande</Text>
      </View>
       {/* Icon for notifications */}
       <TouchableOpacity onPress={()=> props.navigation.navigate("notifications")} style={tw `flex shadow-lg rounded-lg h-10  bg-white  w-12 justify-center items-center `}>
       <View style={tw `flex justify-center items-center relative`} >
        <View style={tw `h-2 w-2 bg-yellow-400 rounded-full absolute top-0 -right-1`}></View>
        <Icon type='ionicon' color="black" name='notifications' />
       </View>
       </TouchableOpacity>
      
    </View>
    <View style={tw `flex-1 px-4`} >
    {/* Information */}
    <Text style={tw `text-2xl tracking-wide font-medium`}>Hello, benjamin</Text>
    <Text style={tw `text-lg tracking-wide text-gray-400 font-medium`}>Which service do you want to pick today ?</Text>
    <View style={tw `h-58 mt-4 rounded-3xl bg-red-100 w-full relative`} >
      <View style={tw `absolute h-full w-40 bg-black bg-opacity-30 p-4 rounded-r-3xl  items-center justify-center z-30 right-0`} >
        <Text style={tw `text-white text-xl uppercase mb-5 `} >Off</Text>
        <Text style={tw `text-white text-6xl uppercase `} >20%</Text>
        <Text style={tw `text-white text-xl capitalize mb-5 `} >Carpenter service</Text>

      </View>
     <Image source={carpenter}  style={tw `h-58  w-full rounded-3xl bg-red-100`} />
    </View>
    {/* Service */}
    <View style={tw `h-45`} >
    <ScrollView horizontal  style={tw `mt-5 bg-white p-2 `} showsHorizontalScrollIndicator={false}  >
      {
        foodFilter.map(filter => (
          <TouchableOpacity activeOpacity={0.7} onPress={()=> setSelectedId(filter.id)} style={ tw `flex mx-2  p-4 h-20 `}>
            <View style={tw `h-15 items-center justify-center p-3 rounded w-full bg-${filter.color}-100`} >
            <Icon type='font-awesome-5'  name={filter.Iconname}  color={filter.color} size={34} />
            </View>
          
           <Text style={tw` text-gray-500 mt-3  text-center text-sm font-semibold`}>{filter.Title}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
    </View>
    <Text style={tw `text-2xl tracking-wide font-medium`}>Popular services</Text>

    </View>
    </View>
  )
}

export default ClientHome