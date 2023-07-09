import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Icon, Image } from '@rneui/base'
import Colors from '../../../Constants/Colors'
import Barber from '../../../assets/images/bar.jpg'
import massage from '../../../assets/images/masseur.jpg'
import electrician from '../../../assets/images/eletrician.jpg'
import Loader from '../../../Components/Loader'
import httpClient, { apiUrl } from '../../../config/api'
import {HomeContext} from '../../../Context/HomeContext'
import { AuthContext } from '../../../Context/AuthContext'
const ServiceList = (props) => {
  const {user} =useContext(AuthContext)
  const navigation = useNavigation()
  const {isAlreadySaved,AddFavourite,RemoveFavourite} = useContext(HomeContext)
  const TitleComponent = ({  }) => {
    return (
      <View style={tw`flex-row items-center`}>
        <Text style={tw`font-bold text-lg`}>Services for </Text>
        <Text style={tw` text-lg font-bold text-[${Colors.primaryColor}]`}>
        {props.route.params.serviceName}
        </Text>
      </View>
    );
  };
  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />,headerTitle: () => <TitleComponent  /> })
  },[navigation])
  const [isLoading,setIsLoading] = useState(true)
  const [Services,setServices] = useState([])
 



const fetchServices = async() => { 
  console.log("serviceType : ",props.route.params.serviceType)
  try {
    const {data} = await httpClient.get(`/users/services?type=${props.route.params.serviceType}`)
    setServices(data.services)
    setIsLoading(false)
  } catch (error) {
    setIsLoading(false)
    console.log(error)
  }
 }
 useEffect(()=>{
  fetchServices()
 },[])
  return (
    <View style={tw `flex-1 bg-white p-2`}>
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false} contentContainerStyle={tw `mt-2`} >
        { isLoading? <Text>...</Text> :  Services.map(service => (<TouchableOpacity key={service._id} activeOpacity={0.6} onPress={()=> props.navigation.navigate("serviceOne",{serviceId : service._id,serviceName : service.title})} style={tw `bg-white   h-75 mb-8 w-full rounded-xl shadow`} >
    {/* iamge and heart */}
    <View style={tw `h-52 bg-white relative w-full rounded-xl`} >
      {/* iamge */}
      <Image style={tw `h-52  w-full  rounded-xl`} source={{ uri : apiUrl + service.photoUrl}} />
      {/* like */}
      <TouchableOpacity onPress={()=> isAlreadySaved(service._id)? RemoveFavourite(service._id,true,user._id) : AddFavourite(service._id,true,user._id) } style={tw `h-10 w-10 top-3 right-4 bg-white absolute items-center justify-center rounded-full z-40`} >
        <Icon type='ionicon' name={isAlreadySaved(service._id)? `heart` : "heart-outline"}  color={Colors.primaryColor} />
      </TouchableOpacity>
    </View>
    {/* Title */}
    <View style={tw `flex-row justify-between px-3 items-center`} >
    <Text style={tw `pl-2 text-4 mt-2`}>{service.title}</Text>
    {/* <Text style={tw `pl-2 text-4 font-semibold text-gray-400 mt-2`}>{}</Text> */}

    </View>
    <View style={tw ` flex-row   px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold text-2xl`}> {service.hourRate} $/hour</Text>
           
           <View style={tw `flex-row  items-center`} >
           <Icon type='ionicon' name='star' color={Colors.primaryColor} />
           <Text style={tw `font-bold text-lg text-[${Colors.primaryColor}] `}> {service.rating.toFixed(2)}</Text>
           </View>
          </View>
   </TouchableOpacity> )) }
    </ScrollView>
    <Loader isLoading={isLoading} />
    </View>
  )
}

export default ServiceList