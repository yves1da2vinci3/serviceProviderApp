import { View, Text, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import tw from 'twrnc'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { Icon, Image, Overlay } from '@rneui/base'
import FavouriteItem from '../../../Components/FavouriteItem'
import Colors from '../../../Constants/Colors'
import { useToast } from 'react-native-toast-notifications'
import { AuthContext } from '../../../Context/AuthContext'
import Loader from '../../../Components/Loader'
import { HomeContext } from '../../../Context/HomeContext'
import httpClient from '../../../config/api'
const HomeFavourite = () => {
    const toast = useToast()
    const {RemoveFavourite} = useContext(HomeContext)
    const {user} = useContext(AuthContext)
    const [isLoading,setIsLoading] = useState(true)
    const [deletionModal,setdeletionModal] = useState(false)
    const [favourites,setFavourties] = useState([])
    const navigation = useNavigation()
    const [favourtitesDeltedIds,setFavourtiesDeltedIds] = useState([])
    useEffect(()=>{
        navigation.setOptions({title : 'My favourites '
             })
        },[])
        const [ isVisible,setisVisible] = useState(false)

       
        const fetchUserFavourite = async() => { 
            try {
                const {data} = await httpClient.get(`/users/favourites/${user._id}`)
                  console.log("from : ",data)
                  setFavourties(data.userFavorites.Favourites)
                  setIsLoading(false)
            } catch (error) {
                toast.show(`${error?.response?.data?.message}`, {
                    type: "custom",
                    dangerColor :`${Colors.redColor}`,
                    placement: "bottom",
                    duration: 4000,
                    offset: 60,
                    animationType: "slide-in",
                  })
                console.log(error)
                 setIsLoading(false)

            }
         }
         useFocusEffect(
            React.useCallback(()=>{
              fetchUserFavourite()
            },[])
          )
          const cancelDeletion = () => { 
            setFavourtiesDeltedIds([])
            setisVisible(false)
           }
           const deletion = () => { 
            setdeletionModal(true)
            }

            // save the fe
            const UserRemoveFavourite = async() => { 
              setIsLoading(true)
              const favouritesDeletedIds = favourtitesDeltedIds.map((fav => fav.id))
              try {
                await httpClient.put("users/favourite/bulk",{favouritesDeletedIds},{
                  headers: {
                    Authorization: `Bearer ${Token}`,
                  },
                })
                for (var i = 0; i < favourtitesDeltedIds.length; i++){
                  console.log(favourtitesDeltedIds[i])
                    
                      RemoveFavourite(favourtitesDeltedIds[i].entityId,false)

                }
                // deletion of favorites
                const newFavourites  = favourites.filter(f => !favouritesDeletedIds.includes(f.id))
               setFavourties(newFavourites)
                toast.show("suppression done with success",{type : "success"})
                setIsLoading(false)
                setdeletionModal(false)
                setisVisible(false)
                setFavourtiesDeltedIds([])
              } catch (error) {
                console.log(error)
                setIsLoading(false)
              }
             }
  return (
    <View style={tw `flex-1 bg-white `}>
      {/* deletion verlay */}
      <Overlay isVisible={deletionModal} overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }>

<View style={tw `h-[7.5rem] bg-white w-[20rem] `}>
<Text style={tw `font-semibold text-center`}>Are you sure that you want to delete ?</Text>
<View style={tw `flex items-center h-15  w-full mt-4 justify-center  flex-row`}>
<TouchableOpacity onPress={()=>  setdeletionModal(false)} style={tw `h-10 w-10 rounded-full items-center justify-center bg-[${Colors.redColor}]`}>
<Icon type='ionicon' name='close' color="white" />
</TouchableOpacity>
<TouchableOpacity onPress={()=>  UserRemoveFavourite()} style={tw `h-10 w-10 rounded-full items-center ml-6 justify-center bg-[${Colors.greenColor}]`}>
<Icon type='ionicon' name='checkmark' color="white" />
</TouchableOpacity>
</View>
</View>


</Overlay>
      {/* favourite */}
     { isLoading ? <Text>Loading...</Text> : favourites.length === 0? <Text style={tw `mt-3 text-center` }>Aucun favouris pour l'instant</Text> : favourites.map((favourite,index)=> (
        <FavouriteItem setisVisible={setisVisible} isVisible={isVisible} setFavourtiesDeltedIds={setFavourtiesDeltedIds}  favourtitesDeltedIds={favourtitesDeltedIds} favourite={favourite} key={index} />
     )) }
     

     { isVisible && favourtitesDeltedIds.length>0 && (<View style={tw `h-40 absolute bottom-0 z-20 w-full items-center justify-center bg-slate-100 p-2`}>
            <View style={tw `flex flex-row items-center`}>
            <Text style={tw `font-semibold`}> {favourtitesDeltedIds.length} element{favourtitesDeltedIds.length >1 ? "s" : ""} </Text>
            <Text style={tw `font-semibold italic ml-2 text-[${Colors.blueColor}]`}>selectionné{favourtitesDeltedIds.length >1 ? "s" : ""}</Text>

            </View>
            <View style={tw `flex flex-row mt-4 items-center`}>
            <TouchableOpacity onPress={()=> cancelDeletion()} style={tw `h-10 w-10 border-2 rounded-full items-center justify-center`}>
                <Icon type='ionicon' name='close' />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> deletion()} style={tw `h-10 w-10 border-2 ml-4 rounded-full items-center justify-center`}>
                <Icon type='ionicon' name='trash' />
            </TouchableOpacity>

            </View>
            
        </View>) }
    
     <Loader  isLoading={isLoading} />
    </View>
  )
}

export default HomeFavourite