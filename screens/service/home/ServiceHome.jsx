import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import { Avatar, BottomSheet, Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import { mockServices } from '../../../utils/data'
import OfferItem from '../../../Components/OfferItem'
const ServiceHome = () => {
  const [isLoading,setIsLoading] = useState(false)
  const [isVisible,setIsVisible] = useState(false)
  const [service,setService] = useState({})

  const chooseService = (service) => { 
    setService(service)
    setIsVisible(true)
    }
  return (
    <View style={tw `flex-1 bg-white pt-10 px-3`}>
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
    {/* Sumary */}
    <Text style={ tw `text-xl text-center font-bold  ml-1`}>Statsitics of services</Text>
<View style={tw `mt-4 h-36 w-full flex flex-row mb-2`}>

  <View style={tw `flex-1 bg-white justify-center items-center flex border-2 p-2 border-gray-200 border-b-4 border-b-blue-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{ isLoading ? "..." : mockServices?.length}</Text>
  <Text style={ tw ` font-bold  ml-1`}>Totals</Text>

  </View>
  <View style={tw `flex-1 bg-white justify-center items-center flex p-2 border-2 p-2 border-gray-200 border-b-4 border-b-green-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{isLoading ? "..." : mockServices?.filter(service => service.status === 2).length}</Text>
  <Text style={ tw `font-bold  ml-1`}>Done</Text>

  </View>
  <View style={tw `flex-1 bg-white justify-center items-center flex p-2  border-2 p-2 border-gray-200 border-b-4 border-b-yellow-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{isLoading ? "..." : mockServices?.filter(service => service.status === 1).length}</Text>
  <Text style={ tw ` font-bold  ml-1`}>On going</Text>

  </View>
  <View style={tw `flex-1 bg-white justify-center items-center flex border-2 p-2 border-gray-200 p-2 border-b-4 border-b-red-500 rounded-lb-8 `}>
  <Text style={ tw `text-4xl font-bold  ml-1`}>{isLoading ? "..." : mockServices?.filter(service => service.status === 3).length}</Text>
  <Text style={ tw `text-md font-bold  ml-1`}>Refused</Text>

  </View>
</View>
    {/* Reservation */}
    <ScrollView>
    { mockServices.map(mocser=> (<OfferItem key={mocser.id}  chooseService={chooseService} service={mocser} />)) }

    </ScrollView>

    {/* Accept or refuse offer */}
    <BottomSheet  modalProps={{}} isVisible={isVisible}>
    <View style={ tw`h-[111] w-full bg-white flex px-2 `}>
      <Icon type='ionicon' name='close-outline'  size={25} onPress={()=> setIsVisible(false)} style={tw `self-end mr-4 mt-2`} />
    <View  style={tw `  relative p-4 flex-row  flex`} >
      <Avatar size={80} rounded={true} source={{ uri :"https://images.squarespace-cdn.com/content/v1/5414d5e0e4b01b3bfb338b76/1563749889904-RZ8VMF29WZK2DEV3TALV/Screen+Shot+2019-07-21+at+3.57.54+PM.png"} } />
    <View style={tw `ml-5 pt-3 flex flex-col`}>
      <Text style={tw `text-xl font-semibold `}>{ service ? service.askerName :  "george grear"}</Text>
     
    </View>

      </View>
      {/* location */}
      <View style={ tw `flex ml-4 mt-2 items-center w-full flex-row`}>
    <Icon type='ionicon' name='pin-outline' color={Colors.primaryColor} />
  <Text ellipsizeMode="tail" style={tw `text-sm text-black font-bold ml-2` }>{ service ? service.location :  "george grear"}</Text>

  </View>
  {/* date and time */}
  <View style={ tw `flex w-full  pl-4 flex-row`}>
  <View style={ tw `flex flex-1  mt-2 mb-3 items-center w-full flex-row`}>
    <Icon type='ionicon' name='calendar-outline' color={Colors.primaryColor} />
  {/* <Text ellipsizeMode="tail" style={tw `text-sm text-black font-bold ml-2` }>{ service.date ? formatDate(service.date) : "12/01/2022"}</Text> */}
  <Text ellipsizeMode="tail" style={tw `text-sm text-black font-bold ml-2` }>{ service.date ? service.date : "12/01/2022"}</Text>

  </View>
  <View style={ tw `flex flex-1  mt-2 mb-3 items-center  flex-row`}>
    <Icon type='ionicon' name='time-outline' color={Colors.primaryColor} />
    {/* { service.date ?    <Text ellipsizeMode="tail" style={tw `text-sm text-black font-bold ml-2` }> {RenderTime(service.startTime)}  - {RenderTime(service.endTime)}  </Text> : <Text>12AM-3PM</Text> } */}
    { service.date ?    <Text ellipsizeMode="tail" style={tw `text-sm text-black font-bold ml-2` }> {service.startTime}  - {service.endTime}  </Text> : <Text>12AM-3PM</Text> }


  </View>
 
  </View>
      
      <View style={ tw `flex ml-4 mt-2 mb-3 items-center w-full flex-row`}>
    <Icon type='ionicon' name='cash-outline' color={Colors.primaryColor} />
  <Text ellipsizeMode="tail" style={tw `text-sm text-black font-bold ml-2` }>{ service ? service.amount :  "george grear"} LD</Text>

  </View>


       { service.status === 0 &&  <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.primaryColor}] h-15   flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >Accept</Text>
      </TouchableOpacity> } 
      
      { service.status === 0 && <TouchableOpacity onPress={()=> props.navigation.navigate("login")}  style={ tw `bg-[${Colors.greyColor}] h-15  mt-4  flex justify-center items-center rounded-xl w-full`} >
        <Text style={tw `capitalize text-white text-xl font-semibold`} >reject</Text>
      </TouchableOpacity> }
     
    </View>
     
    </BottomSheet>
    </View>
  )
}

export default ServiceHome