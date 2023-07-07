import { View, Text } from 'react-native'
import React from 'react'
import { AirbnbRating, Avatar } from '@rneui/base'
import tw from 'twrnc'
import Colors from '../Constants/Colors'
import { apiUrl } from '../config/api'
const ReviewItem = ({rating}) => {
  return (
    <View style={tw `min-h-30 `}>
       <View style={tw `flex items-center justify-between h-13 flex-row flex `}>
        {/* Avatar & Img */}
        <View style={tw `flex flex-row  ml-4 `}>
          <Avatar size={40} rounded source={ { uri : apiUrl + rating.user.photoUrl }} />
          <Text style={tw `font-bold ml-1`}>{rating.user.fullname}</Text>
     
        </View>
        {/* Rating */}
        <View style={tw `flex flex-row  h-13 items-center mr-3`}>
      <AirbnbRating count={1} selectedColor={`${Colors.yellowColor}`} size={20} v isDisabled={true} showRating={false} />
      <Text style={tw `font-bold ml-1`}>{rating.rating}</Text>

        </View>
       </View>
       <View style={tw `flex-1  p-2`}>
        <Text numberOfLines={5} style={tw `flex-1  `}>{rating.comment}</Text>
       </View>
      </View>
  )
}

export default ReviewItem