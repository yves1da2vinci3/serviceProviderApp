import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { apiUrl } from '../config/api';
import barber from '../assets/images/bar.jpg'
import Colors from '../Constants/Colors';
import { Icon } from '@rneui/base';
const FavouriteItem = ({
  favourite,
  favourtitesDeltedIds,
  setFavourtiesDeltedIds,
  setisVisible,
  isVisible
}) => {
  const addToDeletion = (type) => {
    const fav ={ id: favourite.id, type,entityId : favourite.idApartment ? favourite.idApartment : favourite.idEvent }
    const newfavoritedeletion = [
      ...favourtitesDeltedIds,fav
      
    ];
    setFavourtiesDeltedIds(newfavoritedeletion);
    setisVisible(true);
  };

  const removeToDeletion = () => {
    const oldfavoritedeletion = [...favourtitesDeltedIds];
    setFavourtiesDeltedIds(
      oldfavoritedeletion.filter(
        (deleteObj) => deleteObj.id !== favourite.id
      )
    );
  };

  console.log("favourite :", favourite)
  const handlePress = () => {
    if (isVisible && favourtitesDeltedIds.findIndex((fav) => favourite.id === fav.id) !== -1) {
      removeToDeletion();
    } else {
      addToDeletion(favourite.idApartment ? 'apart' : 'evt');
    }
  };

  return (
    <TouchableOpacity
      delayLongPress={500}
      onLongPress={handlePress}
      onPress={handlePress}
    //   style={tw`h-35 ${
    //     favourtitesDeltedIds.findIndex((fav,index)=> fav.id == favourite.id) !==-1 ? 'bg-blue-100' : ''
    //   } mt-2 mx-2 relative flex flex-row`}
      style={tw`h-35  mt-2 mx-2 relative flex flex-row`}
    >
      <Image
        style={tw`h-35 bg-blue-200 bg-opacity-20 w-35 rounded`}
        source={{ uri : apiUrl+ favourite.offer.photoUrl }}
      />
      {/* Others Informations */}
      <View style={tw`flex-1 flex justify-center py-1 ml-2`}>
        <Text style={tw`font-bold capitalize text-lg`}>{favourite.offer.title}</Text>
        <Text>{favourite.offer.description.substring(0,120)}</Text>
        <View style={tw ` flex-row   px-4 mt-1 justify-between  pl-2`}>
            <Text style={tw `font-bold text-2xl`}> {favourite.offer.hourRate} $</Text>
           
           <View style={tw `flex-row  items-center`} >
           <Icon type='ionicon' name='star' color={Colors.primaryColor} />
           <Text style={tw `font-bold text-xl text-[${Colors.primaryColor}] `}> {favourite.offer.rating.toFixed(2)}</Text>
           </View>
          </View>
      </View>
    </TouchableOpacity>
  );
};

export default FavouriteItem;
