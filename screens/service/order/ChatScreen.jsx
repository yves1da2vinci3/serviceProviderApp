import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState, useRef } from 'react'
import tw from 'twrnc'
import { useNavigation } from '@react-navigation/native'
import { Avatar, Icon } from '@rneui/base'
import Message from '../../../Components/MessageItem'
import io from 'socket.io-client';

import Colors from '../../../Constants/Colors'
import httpClient, { apiUrl } from '../../../config/api'
import { AuthContext } from '../../../Context/AuthContext'
import Loader from '../../../Components/Loader'

const ChatScreen = (props) => {
  const navigation = useNavigation()
  const [isLoading, setIsLoading] = useState(true)
  const [messages, setMessages] = useState([])
  const [messageText, setMessageText] = useState("")
  const messageInputRef = useRef(null)
  const { user } = useContext(AuthContext)

  // fetchMessages
  const fetchMessages = async () => {
    try {
      const { data } = await httpClient.get(`/${props.route.params.isProvider ? "providers" : "users"}/reservations/${props.route.params.reservationId}/messages`)
      setMessages(data.messages)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
      setIsLoading(false)
    }
  }

  useEffect(() => {
    const socket = io(`${apiUrl}`);
    socket.on('connect', () => {
      console.log('Connected to Socket.IO server');
    });
    socket.on('messageSent', (data) => {
      if (data.reservationId === props.route.params.reservationId) {
        setMessages(prevMessages => [...prevMessages, data.message]);
      }
    });
    fetchMessages()
    navigation.setOptions({
      title: props.route.params.isProvider ? `${props.route.params.asker.fullname}` : `${props.route.params.provider.fullname}`,
      headerBackVisible: false,
      headerTintColor: "white",
      headerLeft: () => <Avatar size={40} rounded={true} source={{ uri: props.route.params.isProvider ? apiUrl + props.route.params.asker.photoUrl : apiUrl + props.route.params.provider.photoUrl }} />,
      headerStyle: { backgroundColor: `${Colors.primaryColor}` },
      headerRight: () => (
        <View style={tw `flex flex-row justify-between items-center`}>
          <Icon style={tw `mr-4`} name='phone' type='font-awesome' color='white' />
          <Icon name='videocam-outline' type='ionicon' color='white' />
        </View>
      )
    })
  }, [])

  // post Message
  const postMessage = async () => {
    try {
      await httpClient.post(`/${props.route.params.isProvider ? "providers" : "users"}/reservations/${props.route.params.reservationId}/messages`, {
        content: messageText,
        senderId: user._id
      })
      messageInputRef.current.clear()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <View style={tw `flex-1 bg-white relative p-2 flex`}>
      {/* Body Message */}
      <ScrollView automaticallyAdjustContentInsets={true} showsVerticalScrollIndicator={false} style={tw `flex-1 `}>
        {isLoading ? <Text>...</Text> : messages.map(message => (<Message key={message._id} message={{ content: `${message.content}`, isMe: message.senderId === user._id }} />))}
      </ScrollView>
      {/* MessageInput */}
      <View style={tw `h-14   flex flex-row justify-center items-center   w-full self-center`}>
        <View style={tw `h-10  border-2 border-gray-300 bg-white flex-1 flex-row items-center px-2 rounded-full `}>
          <Icon type='ionicon' name='happy-outline' color="black" size={25} />
          <TextInput ref={messageInputRef} onChangeText={(txt) => setMessageText(txt)} placeholder='message' style={tw `flex-1 px-2  rounded-full h-8`} />
        </View>
        <TouchableOpacity onPress={postMessage} style={tw `flex justify-center h-10 w-10 bg-[${Colors.primaryColor}] ml-2 rounded-full`} >
          <Icon type='font-awesome' name='paper-plane' color="white" size={20} />
        </TouchableOpacity>
      </View>
      <Loader isLoading={isLoading} />
    </View>
  )
}

export default ChatScreen;
