import React, {createContext,useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const HomeContext = createContext()

 function HomeProvider({children}) {
    const [firstTime,setFirstime] = useState(false)
    const [FavouritesServicesIds,setfavouritesServicesIds] = useState([])
    const checkFirstime = async () => { 
        const firstimeString = await AsyncStorage.getItem("firstime")
        const FirstTime = JSON.parse(firstimeString)
       setFirstime(FirstTime)
     }

     const setFirsTime = async () => { 
        await AsyncStorage.setItem("firstime",JSON.stringify(true))
       setFirstime(true)
     }
    const RetrieveFavourites = async () => { 
       const favouritesServicesIdsString =   await AsyncStorage.getItem("favouritesServicesIds")
        const favouritesServicesIds = JSON.parse(favouritesServicesIdsString)
      
        setfavouritesServicesIds(favouritesServicesIds ? favouritesServicesIds : [])
     }
     const isAlreadySaved = (serviceId) => { 
       
          return FavouritesServicesIds.some(apartementId => apartementId === serviceId )


   }
   const AddFavourite = async(entityId,withRequest) => { 
    
    const newServicesFavourites = [...FavouritesServicesIds,entityId];
    setFavouritesApartements(newServicesFavourites)
    const  favouritesServicesString = JSON.stringify(newServicesFavourites)
    if(withRequest){
      await httpClient.put(`users/favourite?type=add`,{
          idToAdd : entityId
      })
  }
    try {
        await AsyncStorage.setItem("favouritesServicesIds", favouritesServicesString)
    } catch (error) {
        console.log("error while trying to cache",error)
    }

   
  }
  
 const RemoveFavourite = async(entityId,withRequest) => { 
    console.log("entity :",entityId,"withRequest : ",withRequest)

  
    FavouritesServicesIds.push(entityId)
    const newServiceFavourites = FavouritesServicesIds.filter(serviceId => serviceId !== entityId);
    setfavouritesServicesIds(newServiceFavourites)
    const  favouritesServicesString = JSON.stringify(newAppartementsFavourites)
    if(withRequest){
        await httpClient.put(`users/favourite`,{
            idToRemove : entityId
        })
    }
   
    try {
        await AsyncStorage.setItem("favouritesServicesIds", favouritesServicesString)
    } catch (error) {
        console.log("error while trying to cache",error)
    }

  }
    useEffect(() =>{
      RetrieveFavourites()

        checkFirstime()
    },[])

   
   
   
    
  return (
    <HomeContext.Provider value={{setFirstime,firstTime,setFirsTime,AddFavourite,RemoveFavourite, isAlreadySaved,RemoveFavourite}}>
        {children}
    </HomeContext.Provider>
  )
}

export default HomeProvider