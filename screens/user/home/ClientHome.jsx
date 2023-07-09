import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useState } from 'react'
import tw from 'twrnc'
import { Icon } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import carpenter from '../../../assets/images/carpenter.jpg'
import Barber from '../../../assets/images/bar.jpg'
import massage from '../../../assets/images/masseur.jpg'
import electrician from '../../../assets/images/eletrician.jpg'
import { AuthContext } from '../../../Context/AuthContext'
import httpClient, { apiUrl } from '../../../config/api'
import { useFocusEffect } from '@react-navigation/native'
import { HomeContext } from '../../../Context/HomeContext'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
const ClientHome = (props) => {
  const {user,logout} = useContext(AuthContext)
  const [selectedId,setSelectedId] = useState(6)
  const [isLoading,setIsLoading] = useState(true)
  const [Services,setServices] = useState([true])

  const services = [
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
  const {isAlreadySaved,AddFavourite,RemoveFavourite} = useContext(HomeContext)

const fetchPopularsServices = async() => { 
  try {
    const {data} = await httpClient.get(`/users/services/popular`)
    setServices(data.mostDemandingOffers)
    setIsLoading(false)
  } catch (error) {
    console.log(error)
    setIsLoading(false)
  }
 }
 useFocusEffect(
  React.useCallback(()=>{
 fetchPopularsServices()
  },[])
 )

 const Logout = () => { 
  logout()
  setTimeout(()=>{
    props.navigation.navigate("login")
  },1000)
  }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={tw `bg-white flex-1 pb-20 pt-10`}>
      {/* NavBar */}
      <View style={ tw `h-12 bg-white  flex-row px-5 items-center justify-between `} >
      <Menu  style={tw ` `}>
      <MenuTrigger  >
      <View style={ tw `flex flex-row items-center`}>
      <Icon name='person-circle-outline' type='ionicon' size={26}  color={`${Colors.primaryColor}`} />
      <Text style={tw `ml-3 font-semibold`}>{user.fullname}</Text>
      </View>
      </MenuTrigger>
      <MenuOptions>

        <MenuOption style={tw `flex flex-row items-center h-10 `} onSelect={() =>  props.navigation.navigate("profile") } >
          
            <Icon  style={tw `ml-1`} type='font-awesome' name='user' />
          <Text style={tw `ml-1`} >See profile</Text>
        </MenuOption>
        <MenuOption style={tw `flex flex-row items-center h-10 `} onSelect={() =>  Logout()} >
            <Icon  style={tw `ml-1`} type='ionicon' name='log-out-outline' />
          <Text style={tw `ml-1`} > logout </Text>
        </MenuOption>
      </MenuOptions>
    </Menu>
      
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
    <Text style={tw `text-2xl tracking-wide font-medium`}>Hello</Text>
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
        services.map(service => (
          <TouchableOpacity activeOpacity={0.7} onPress={()=> setSelectedId(service.id)} style={ tw `flex mx-2  p-4 h-20 `}>
            <View style={tw `h-15 items-center justify-center p-3 rounded w-full bg-${service.color}-100`} >
            <Icon type='font-awesome-5'  name={service.Iconname}  color={service.color} size={34} />
            </View>
          
           <Text style={tw` text-gray-500 mt-3  text-center text-sm font-semibold`}>{service.Title}</Text>
          </TouchableOpacity>
        ))
      }
    </ScrollView>
    </View>
    <Text style={tw `text-2xl tracking-wide font-medium`}>Popular services</Text>

  <View style={tw `flex-1 `}>
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={tw `mt-2`} >
        { isLoading ? <Text>...</Text> : Services.map(popS => (<View style={tw `bg-white mx-2  h-50 mb-20 w-45 rounded-xl shadow`} >
    {/* iamge and heart */}
    <View style={tw `h-30 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-30 bg-blue-500 w-full  rounded-xl`} source={{ uri : apiUrl + popS.photoUrl}} />
      {/* like */}
      <TouchableOpacity onPress={()=> isAlreadySaved( isLoading ?"...": popS._id)? RemoveFavourite(isLoading ?"...": popS._id,true,user._id) : AddFavourite(isLoading ?"...": popS._id,true,user._id) } style={tw `h-10 w-10 top-3 right-4 bg-white absolute items-center justify-center rounded-full z-40`} >
        <Icon type='ionicon' name={isAlreadySaved(isLoading ?"...": popS._id)? `heart` : "heart-outline"}  color={Colors.primaryColor} />
      </TouchableOpacity>
    </View>
    {/* Title */}
    <Text style={tw `pl-2 text-4 mt-2`}>{popS.title}</Text>
    <View style={tw ` flex-row   px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold text-2xl`}> {popS.hourRate} $</Text>
           
           <View style={tw `flex-row  items-center`} >
           <Icon type='ionicon' name='star' color={Colors.primaryColor} />
           <Text style={tw `font-bold text-[${Colors.primaryColor}] `}> {popS.rating.toFixed(2)}</Text>
           </View>
          </View>
   </View> )) }
    </ScrollView>
  </View>
   
    </View>
    </ScrollView>
  )
}

export default ClientHome