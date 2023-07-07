import { View, Text} from 'react-native'
import React from 'react'
import { Overlay } from '@rneui/base'
import * as Progress from 'react-native-progress';
import tw from 'twrnc'
const Loader = ({isLoading}) => {
  return (
    <Overlay overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }   isVisible={isLoading} >
          <View style={tw `h-20 w-20 bg-white flex items-center justify-center`}>
          <Progress.CircleSnail size={40} color={['red', 'green', 'blue']} />
          </View>
    </Overlay>
  )
}

export default Loader