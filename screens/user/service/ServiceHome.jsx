import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'

import tw from 'twrnc'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
const ServiceHome = (props) => {
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
    {
      id: 22,
      Iconname : "lightbulb",
      color : "gray",
      Title : "electricians"
      
    },
    {
      id: 33,
      Iconname : "screwdriver",
      color : "lime",
      Title : "Repair"
      
    },
    {
      id: 36,
      Iconname : "hammer",
      color : "orange",
      Title : "Carpenter"
      
    },
    {
      id: 46,
      Iconname : "air-freshener",
      color : "teal",
      Title : "hair"
      
    },
   
  ]
  return (
    <View style={tw `flex-1 p-4 bg-white`}>
      <View  style={tw `flex flex-row items-center px-2 h-20 `}>
        <TextInput style={tw `h-15 rounded-md shadow-md bg-white flex-1 px-4`} placeholder='type the service name' />

        <View style={tw `h-15 w-15 justify-center  rounded-lg items-center ml-5 bg-white shadow-md`}>
          <Icon name="filter"  color={Colors.primaryColor} type="font-awesome-5" />
        </View>
      </View>
      <Text style={tw `text-lg font-semibold`}>All services</Text>

{/* SERVICES List */}
<View style={tw `flex flex-row flex-wrap `} >
{
        foodFilter.map(filter => (
          <TouchableOpacity onPress={()=> props.navigation.navigate("serviceList",{serviceType : filter.id,serviceName : filter.Title}) } key={filter.id} activeOpacity={0.7}  style={ tw `flex m-2 mt-4  p-4 h-20 `}>
            <View style={tw `h-15 items-center justify-center p-3 rounded w-full bg-${filter.color}-100`} >
            <Icon type='font-awesome-5'  name={filter.Iconname}  color={filter.color} size={34} />
            </View>
          
           <Text style={tw` text-gray-500 mt-3  text-center text-sm font-semibold`}>{filter.Title}</Text>
          </TouchableOpacity>
        ))
      }
</View>
    </View>
  )
}

export default ServiceHome