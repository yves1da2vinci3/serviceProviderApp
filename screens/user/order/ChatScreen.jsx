import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/base'
import Message from '../../../Components/MessageItem'

import { useState } from 'react'

import { useRef } from 'react'
import Colors from '../../../Constants/Colors'
const ChatScreen = (props) => {
  const navigation = useNavigation()
  const [isLoading,setIsLoading] = useState(false)
// const [messages,setMessages] = useState([])
const [messageText,setMessageText] = useState("")
const messageInputRef = useRef(null)
//   const fetchMessages = () => { 

//      const serviceRefernce  = doc(db,"offers",props.route.params.service.id)  
//     onSnapshot(serviceRefernce,(snapsahot) => {
//        setMessages (snapsahot.data().messages)
//     } )
//  scrollRef.current.scrollToEnd()
//     setIsLoading(false)

//    }
const messages = [
    {
      id: '1',
      senderId: 'user1',
      content: 'Hey there!',
    },
    {
      id: '2',
      senderId: 'user2',
      content: 'Hi! How are you?',
    },
    {
      id: '3',
      senderId: 'user1',
      content: 'I\'m good, thanks! How about you?',
    },
    {
      id: '4',
      senderId: 'user2',
      content: 'I\'m doing well too, thanks for asking!',
    },
    {
      id: '5',
      senderId: 'user1',
      content: 'What have you been up to lately?',
    },
    {
      id: '6',
      senderId: 'user2',
      content: 'Not much, just working on some new projects. How about you?',
    },
    {
      id: '7',
      senderId: 'user1',
      content: 'Same here, just trying to stay busy!',
    },
    {
      id: '8',
      senderId: 'user2',
      content: 'That\'s always a good goal to have!',
    },
    {
      id: '9',
      senderId: 'user1',
      content: 'Absolutely! Talk to you later!',
    },
    {
      id: '10',
      senderId: 'user2',
      content: 'Bye for now!',
    },
  ];
  


  useEffect(()=>{
    // fetchMessages()
    
  navigation.setOptions({title :  "Tves Li", headerBackVisible :false, headerTintColor : "white",headerLeft: ()=>       <Avatar size={40} rounded={true} source={{ uri :"https://images.squarespace-cdn.com/content/v1/5414d5e0e4b01b3bfb338b76/1563749889904-RZ8VMF29WZK2DEV3TALV/Screen+Shot+2019-07-21+at+3.57.54+PM.png"} } />
  , headerStyle : { backgroundColor : `${Colors.primaryColor}`},headerRight: ()=>  <View style={ tw `flex flex-row justify-between items-center`}>
    <Icon style={tw `mr-4`} name='phone' type='font-awesome' color='white' />
    <Icon name='videocam-outline' type='ionicon' color='white' />
  </View>      })
  },[])


  // Send Message
  const scrollRef = useRef(null)

//   const sendTextMessage = async() => { 
//     // defineChatRef
//     const serviceRefernce  = doc(db,"offers",props.route.params.service.id)
//      let message ;
    
    
//       message = {
//         content : messageText,
//         senderId : user.uid,
//     }
   

// // mettre a jour
// try {
//   await updateDoc(serviceRefernce, {
//     messages: arrayUnion(message)
//   });
//  messageInputRef.current.clear()
//  scrollRef.current.scrollToEnd()
// } catch (error) {
//   console.log(error)
// }
//    } 



//    const scrollTo = (diff) => {
//     scrollRef.current.scrollTo(pageScrollY + diff);
//   };

  return (
    <View style={tw `flex-1 bg-white relative p-2 flex`}>
{/* Body Message */}

        <ScrollView automaticallyAdjustContentInsets={true}  ref={scrollRef} showsVerticalScrollIndicator={false} style={tw `flex-1 `}>

          {  isLoading ? <Text>...</Text> : messages.map(message => (<Message message={{ content : `${message.content}` , senderId : `${message.senderId}`  }} /> )) }
         
      
        </ScrollView>

      {/* MessageInput */}
      <View style={ tw `h-14   flex flex-row justify-center items-center   w-full self-center`}>
        <View style={tw `h-10  border-2 border-gray-300 bg-white flex-1 flex-row items-center px-2 rounded-full `}>
        <Icon type='ionicon' name='happy-outline' color="black"  size={25}/>
          
          <TextInput ref={messageInputRef}  onChangeText={(txt)=> setMessageText(txt) } placeholder='message' style={tw `flex-1 px-2  rounded-full h-8`}  />
        </View>
        <TouchableOpacity style={tw `flex justify-center h-10 w-10 bg-[${Colors.primaryColor}] ml-2 rounded-full`} >
          <Icon type='font-awesome' name='paper-plane' color="white"  size={20}/>
        </TouchableOpacity>
      </View>
      {/* <Loader isLoading={isLoading} /> */}
    </View>
  )
}

export default ChatScreen