import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Colors from '../Constants/Colors'
import Cleaning from '../assets/images/cleaning.jpg'
import Cooking from '../assets/images/cooking.jpg'
import driving from '../assets/images/driving.jpg'
import { Icon } from '@rneui/base'

const OnBoardingScreen = (props) => {
    const [selectId,setSelectedId] = useState(0)
    // TITLE
    const TitleMap = new Map()
    TitleMap.set("0","The Ultimate Guide to Efficient and Effective Cleaning")
    TitleMap.set("1","Cooking Made Easy: Simple and Delicious Recipes for Every Occasion")
    TitleMap.set("2","Get Behind the Wheel: A Comprehensive Guide to Safe and Confident Driving")
    // Descrption
    const DescriptionMap = new Map()
    DescriptionMap.set("0","TStreamline your cleaning routine and enjoy a cleaner, more organized space with our reliable and affordable cleaning services.")
    DescriptionMap.set("1"," Our affordable and convenient cooking services are designed to make your life easier.")
    DescriptionMap.set("2"," Our affordable and reliable driving services are designed to meet your needs and exceed your expectations.")
  return (
    <View style={tw `flex-1 bg-white pt-10 px-4`}>
      <View style={tw `h-118 relative  rounded-[20] w-full bg-[${Colors.primaryColor}]`} >

          {/* Back Button */}
          { selectId !== 0 &&    <TouchableOpacity   onPress={()=>setSelectedId(selectId-1)} style={tw `h-12 rounded-lg bg-gray-200 items-center flex justify-center absolute  z-20 top-8 left-8 border-white border-2 w-12`} >
                <Icon name='arrow-back-outline' type='ionicon' color="white" />
            </TouchableOpacity> }
         
          {/* Image */}
        {  selectId === 0 ?  <Image source={Cleaning} style={tw `h-118 rounded-[20] w-full`}  /> : selectId === 1 ? <Image source={Cooking} style={tw `h-118 rounded-[20] w-full`}  /> : <Image source={driving} style={tw `h-118 rounded-[20] w-full`}  /> }
        
      </View>
      <View style={tw `flex-1  pt-5`} >
        <Text style={tw `font-bold text-lg text-center `}>{TitleMap.get(`${selectId.toString()}`)}</Text>
        <Text style={tw `font-medium text-lg text-gray-500 text-center `}>{DescriptionMap.get(`${selectId.toString()}`)}</Text>

        <TouchableOpacity  onPress={()=> selectId +1>2 ? props.navigation.navigate("home") : setSelectedId(selectId+1) } style={tw `self-center w-38 h-15 flex items-center justify-center mt-5 rounded-2xl bg-[${Colors.primaryColor}]`} >
              <Text style={tw `text-white font-bold text-lg`}>{selectId +1>2 ? "Continue" : "Next"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default OnBoardingScreen