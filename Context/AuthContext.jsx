import React, {createContext,useEffect,useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext()

 function AuthProvider({children}) {
    const [isLogin,setIsLogin] = useState(false)
    const [user,setUser] = useState({})
     
    const checkLogin = async () => { 
        const userStringfied = await AsyncStorage.getItem("userInfo")
        const user = JSON.parse(userStringfied)
        if(user){
            setIsLogin(true)
            setUser(user) 
        }
     }
    useEffect(() =>{
        checkLogin()
    },[])

    const setSession = async (data) => { 
        console.log( "from context :", data)
        setIsLogin(true)
        setUser(data)
       await  AsyncStorage.setItem("userInfo",JSON.stringify(data))
     }
   
    const logout = async () => { 
        setIsLogin(false)
        setUser({})
        await AsyncStorage.removeItem("userInfo")
     }
    const getUser = async () => {  
        return user
     }
    
  return (
    <AuthContext.Provider value={{user,setSession,logout,getUser,isLogin}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider