import { View, Text, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Colors from '../../../Constants/Colors'
import { useState } from 'react'
import { AirbnbRating, Avatar, Divider, Icon } from '@rneui/base'
import { Image } from 'react-native'
import OrderItem from '../../../Components/OrderItem'
const OrderHome = () => {

  const [selectedId,setSelectedId] = useState(1)
  const FilterOptions = [
     {
   id : 1,
   name : "All"
  },
     {
   id : 2,
   name : "On going"
  },
     {
   id : 3,
   name : "Completed"
  },
     {
   id : 4,
   name : "rejected"
  },
]
  return (
    <View style={tw `flex-1  bg-[#FDFDFD] p-5 pt-10`}>
      
      <View style={tw `h-20  `} >
        <ScrollView  showsHorizontalScrollIndicator={false} contentContainerStyle={tw `items-center`} horizontal={true} >
           {
            FilterOptions.map((options,index)=> (<TouchableOpacity onPress={()=> setSelectedId(options.id)} key={index} style={tw `mx-3 rounded-lg  items-center  ${options.id === selectedId ? `bg-[${Colors.blackColor}]` : "" }   p-4 justify-center`} ><Text style={tw ` ${options.id === selectedId ? `text-white` : "text-gray-500" }  font-bold`}>{options.name}</Text></TouchableOpacity>))
           }
        </ScrollView>
      </View>
      {/* List */}
       <OrderItem/>
       <OrderItem/>
    </View>
  )
}

export default OrderHome