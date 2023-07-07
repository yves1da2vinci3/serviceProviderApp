import { NavigationContainer } from '@react-navigation/native';
import {  Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import AuthProvider from './Context/AuthContext';
import { ToastProvider } from 'react-native-toast-notifications';
import tw from 'twrnc'
import { Icon } from '@rneui/base';
import Colors from './Constants/Colors';
import HomeProvider from './Context/HomeContext';
export default function App() {
  return (
    <NavigationContainer>
    <ToastProvider  renderToast={(toastOptions) => <View style={tw `h-17   shadow   border-l-[${ toastOptions.type === "success"? Colors.greenColor : Colors.redColor}] border-l-8 min-w-70 flex  px-3 justify-center rounded-lg bg-white pl-4  `}><Text style={tw `font-semibold `}> {toastOptions.message}</Text></View> }  dangerIcon={<Icon color={Colors.redColor} type="ionicon" name="alert-circle" /> } >

       <HomeProvider>

      <AuthProvider>
      <AppNavigator />
      </AuthProvider>
      </HomeProvider>

   </ToastProvider>

    </NavigationContainer>
  );
}

