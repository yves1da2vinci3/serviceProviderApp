import { View, Text ,StyleSheet} from 'react-native'
import React, { useContext } from 'react'
import Colors from '../Constants/Colors'
const me = `${Colors.primaryColor}`
const away =  'lightgrey'

const userId = "user1"
const MessageItem = ({message}) => {
  
//   const { user } = useContext(AuthContext)
    // const isMe = user.uid === message.senderId ;
    const isMe = userId === message.senderId ;
  return (
    <View style={[styles.container,
        isMe ? styles.rightContainer : styles.leftContainer    ]}>
      <Text style={{color : isMe ? 'black' : 'white' }}>{message.content}</Text>
    </View>
  )

  
}
const styles = StyleSheet.create({
    container : {
        padding : 10,
        margin:10,
        borderRadius : 10,
        maxWidth : '75%'
    },
    text :{
        color : 'white'
    },
    leftContainer :{
     backgroundColor : me,
     marginLeft: 10,
     marginRight : 'auto'
    },
    rightContainer : {
        backgroundColor : away,
        marginLeft: 'auto',
        marginRight : 10
    }
  });
export default MessageItem