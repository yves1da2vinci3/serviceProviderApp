import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import tw from 'twrnc';
import Colors from '../../../Constants/Colors';
import { AirbnbRating, Avatar, Divider, Icon } from '@rneui/base';
import { Image } from 'react-native';
import ProviderOrderItem from '../../../Components/ProviderOrderItem';
import  httpClient  from '../../../config/api';
import { AuthContext } from '../../../Context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import Loader from '../../../Components/Loader'
const OrderHome = () => {
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);
  const [reservations, setReservations] = useState([]);
  const [reservationsBackup, setReservationsBackup] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const FilterOptions = [
    {
      id: 0,
      name: 'All',
    },
    {
      id: 1,
      name: 'Accepted',
    },
    {
      id: 2,
      name: 'Done',
    },
    {
      id: 3,
      name: 'Refused',
    },
  ];

  const fetchReservations = async () => {
    try {
      const { data } = await httpClient.get(`/providers/reservations/${user._id}`);
      setReservations(data.reservations);
      setReservationsBackup(data.reservations);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchReservations();
    }, [])
  );

  const filterFunction = () => { 
    if(selectedId === 0){
      setReservations(reservationsBackup)
    }else{
      const newReservations = reservationsBackup.filter(reservation => reservation.status === selectedId)
      setReservations(newReservations)
    }
    
   }

   useEffect(()=>{
filterFunction()
   },[selectedId])
  return (
    <View style={tw `flex-1  bg-[#FDFDFD] p-5 pt-10`}>
      <View style={tw `h-20`}>
        <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={tw `items-center`} horizontal={true}>
          {FilterOptions.map((options, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedId(options.id)}
              style={tw `mx-3 rounded-lg  items-center  ${options.id === selectedId ? `bg-[${Colors.blackColor}]` : ''}   p-4 justify-center`}
            >
              <Text style={tw `${options.id === selectedId ? 'text-white' : 'text-gray-500'} font-bold`}>{options.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      {/* List */}
      <FlatList data={isLoading ? [] : reservations} renderItem={({ item }) => <ProviderOrderItem item={item} />} />
      <Loader isLoading={isLoading} />
    </View>
  );
};

export default OrderHome;
