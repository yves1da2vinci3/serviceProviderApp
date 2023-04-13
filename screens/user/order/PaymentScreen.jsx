import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import tw from 'twrnc'
import Colors from '../../../Constants/Colors'
import { CheckBox, Icon } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
const PaymentScreen = () => {
    const  [selectedId,setselectedId] = useState(0)

    const paymentMethods = [ 
        {
        id: 1,
        IconName : "card-outline",
        Title : "Pay with your MasterCard"
     },
        {
        id: 2,
        IconName : "logo-google",
        Title : "Pay with Google Pay"
     },
        {
        id: 3,
        IconName : "logo-apple",
        Title : "Pay with Apple Pay"
     },

    ]
    const navigation = useNavigation()

  const HeaderLeft = () => ( 
    <TouchableOpacity onPress={()=> navigation.goBack() } style={tw `h-10 mb-3 items-center justify-center rounded-lg mr-5 w-10 bg-[${Colors.blackColor}]`} >
      <Icon  name='arrow-back-outline' color="white" type='ionicon' />
    </TouchableOpacity> 
  );

  useEffect(()=>{
    navigation.setOptions({ headerLeft : () => <HeaderLeft />, title : "Payment details" })
  },[navigation])
  return (
    <View style={tw `flex-1 bg-white p-2`}>
      <View style={tw ` flex-row   px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold text-xl`}> Address </Text>
           
           <View style={tw `flex-row  items-center`} >
           <Text style={tw `font-bold text-[${Colors.primaryColor}] `}> change the the address</Text>
           </View>
          </View>
          {/* Address */}
          <View style={tw `h-20 rounded-lg bg-white shadow flex flex-row p-4 items-center`} >
            <Icon name='map-marker-alt' color={Colors.primaryColor}  size={35} type='font-awesome-5' />

            <Text style={tw `ml-4`}>liberia ,monrovia</Text>
          </View>

          <Text style={tw `ml-4 mt-5 font-semibold text-lg`}>Select the payment method</Text>
          { paymentMethods.map(payment => (
            <TouchableOpacity activeOpacity={0.7} onPress={()=> setselectedId(payment.id) }  style={ tw ` h-20 rounded-lg bg-white shadow flex flex-row p-2 pl-4 items-center my-2`} >
                <Icon style={tw `mr-3`} name={payment.IconName} type="ionicon" color="gray" />
                <View style={tw `w-60 `}>
            <Text style={tw `capitalize  text-black  text-xl  text-center `} >{payment.Title}</Text>
            </View>

             
            <CheckBox checked={selectedId === payment.id} style={tw `h-20`} checkedColor={Colors.blackColor} checkedIcon="dot-circle-o"
           uncheckedIcon="circle-o" />
       
          </TouchableOpacity>
        ))}
        <View style={tw `flex-1  border-t-2`}>
        <View style={tw ` flex-row   px-4 mt-5 justify-between  pl-2`}>
            <Text style={tw ` `}> Payable account </Text>
           
           <View style={tw `flex-row  items-center`} >
           <Text style={tw `font-bold text-xl  `}> 55.00 $</Text>
           </View>
          </View>
          <TouchableOpacity onPress={()=> props.navigation.navigate("secondSignup")}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-36 self-center`} >
         <Text style={tw`font-bold text-lg text-white`}>Pay Now</Text>
     </TouchableOpacity>
        </View>
    </View>
  )
}

export default PaymentScreen