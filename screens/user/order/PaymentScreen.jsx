import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import Colors from '../../../Constants/Colors'
import { CheckBox, Icon, Overlay } from '@rneui/base'
import { useNavigation } from '@react-navigation/native'
import httpClient from '../../../config/api'
import Loader from '../../../Components/Loader'
import { useToast } from 'react-native-toast-notifications'
import { AuthContext } from '../../../Context/AuthContext'
const PaymentScreen = (props) => {
    const  [selectedId,setselectedId] = useState(1)
    const [isLoading,setIsLoading] = useState(false)
    const {user} = useContext(AuthContext)
    const [ RatingModal,setRatingModal] = useState(false)
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

  console.log("offer id : ",props.route.params.offerId)
  const toast = useToast()
  // Make Payment
  const createPayment = async() => { 
    setIsLoading(true)
    try {
      const data ={
        senderId : props.route.params.senderId,
        receiverId : props.route.params.receiverId,
        amount : props.route.params.amount,
        type : selectedId,
        askerName : user.fullname,
        providerName : props.route.params.providerName,
      }
      setIsLoading(false)
      await httpClient.put(`/users/reservation/${props.route.params.reservationId}/payment`,data)
      toast.show("payment made successfully",{type : "success"})
      setRatingModal(true)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
   }

   const noRating = () => { 
   setRatingModal(false)
   props.navigation.goBack()
    }
   const yesRating = () => { 
   setRatingModal(false)
   props.navigation.navigate("rating",{offerId : props.route.params.offerId, 
    providerId : props.route.params.receiverId,
    providerName : props.route.params.providerName})
    }
  return (
    <View style={tw `flex-1 bg-white p-2`}>
  
        {/*  */}
        <Overlay isVisible={RatingModal} overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }>

<View style={tw `h-[7.5rem] bg-white w-[20rem] `}>

{/* question */}
<Text style={tw `font-semibold text-center`}>Do you want to rate the service ?</Text>


<View style={tw `flex items-center h-15  w-full mt-4 justify-center  flex-row`}>
<TouchableOpacity onPress={()=>  noRating() } style={tw `h-10 w-10 rounded-full items-center justify-center bg-[${Colors.redColor}]`}>
<Icon type='ionicon' name='close' color="white" />
</TouchableOpacity>
     
<TouchableOpacity onPress={()=>  yesRating() } style={tw `h-10 w-10 rounded-full items-center ml-6 justify-center bg-[${Colors.greenColor}]`}>
<Icon type='ionicon' name='checkmark' color="white" />
</TouchableOpacity>
</View>
</View>


</Overlay>
          <Text style={tw `ml-4 mt-5 font-semibold text-lg`}>Select the payment method</Text>
          { paymentMethods.map(payment => (
            <TouchableOpacity key={payment.id} activeOpacity={0.7} onPress={()=> setselectedId(payment.id) }  style={ tw ` h-20 rounded-lg bg-white shadow flex flex-row p-2 pl-4 items-center my-2`} >
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
           <Text style={tw `font-bold text-xl  `}> {props.route.params.amount} $</Text>
           </View>
          </View>
          <TouchableOpacity onPress={()=> createPayment()}  style={ tw `bg-[${Colors.primaryColor}] h-15 mt-15  flex justify-center items-center rounded-xl w-36 self-center`} >
         <Text style={tw`font-bold text-lg text-white`}>Pay Now</Text>
     </TouchableOpacity>
        </View>
        <Loader isLoading={isLoading} />
    </View>
  )
}

export default PaymentScreen