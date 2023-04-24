import { View, Text, TouchableOpacity, Dimensions, ScrollView } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Colors from '../../../Constants/Colors';
import { Bar, VictoryBar ,VictoryChart, VictoryTheme} from "victory-native";
import { AirbnbRating, Icon } from '@rneui/base';
import { Image, Overlay } from '@rneui/themed';
const StatisticHome = () => {
  const chartConfig = {
    backgroundColor : "white",
    color: (opacity = 1) => `${Colors.blackColor}`,
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    propsForHorizontalLabels: {
      r: "2",
      translateX : 17,
      strokeWidth: "1",
      stroke: `${Colors.blackColor}`
    },
    propsForVerticalLabels: {
      r: "6",
      strokeWidth: "1",
      stroke: `${Colors.blackColor}`
    },
    
  
    labelColor: (opacity = 1) => `${Colors.blackColor}`,
    strokeWidth: 4, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  // const data = {
  //   labels: ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin"],
  //   datasets: [
  //     {
  //       data: [20000, 450000, 280000, 800000, 9900000, 4300000]
  //     }
  //   ]
  // };
  const data = [
    { quarter: "jan", earnings: 13000 },
    { quarter: "fev", earnings: 16500 },
    { quarter: "Mar", earnings: 14250 },
    { quarter: "Avril", earnings: 19000 },
    { quarter: "Mai", earnings: 14250 },
    { quarter: "Juin", earnings: 19000 },
    { quarter: "juil", earnings: 3000 },
    { quarter: "Ao", earnings: 16500 },
    { quarter: "Sept", earnings: 14250 },
    { quarter: "Oct", earnings: 19000 },
    { quarter: "Nov", earnings: 14250 },
    { quarter: "Dec", earnings: 19000 }
  ];
  const data1 = [
    { quarter: "jan", earnings: 33000 },
    { quarter: "fev", earnings: 16500 },
    { quarter: "Mar", earnings: 14250 },
    { quarter: "Avril", earnings: 29000 },
    { quarter: "Mai", earnings: 14250 },
    { quarter: "Juin", earnings: 9000 },
    { quarter: "juil", earnings: 3000 },
    { quarter: "Ao", earnings: 136500 },
    { quarter: "Sept", earnings: 14250 },
    { quarter: "Oct", earnings: 19000 },
    { quarter: "Nov", earnings: 14250 },
    { quarter: "Dec", earnings: 170000 }
  ];
  const data2 = [
    { quarter: "jan", earnings: 13000 },
    { quarter: "fev", earnings: 6500 },
    { quarter: "Mar", earnings: 4250 },
    { quarter: "Avril", earnings: 19000 },
    { quarter: "Mai", earnings: 114250 },
    { quarter: "Juin", earnings: 119000 },
    { quarter: "juil", earnings: 3000 },
    { quarter: "Ao", earnings: 16500 },
    { quarter: "Sept", earnings: 114250 },
    { quarter: "Oct", earnings: 19000 },
    { quarter: "Nov", earnings: 14250 },
    { quarter: "Dec", earnings: 449000 }
  ];
  const [ selectedId,setSeletectedId] = useState(1)

  const filterList = [
    {
      id : 1,
      title : "Residences",
      iconName : "home"
    },
    {
      id : 2,
      title : "Hotel",
      iconName : "hotel"
    },
    {
      id : 3,
      title : "Ecotourisme",
      iconName : "tree"
    },
  
   
  
  ]
  const [visible,setVisible] = useState(false)
  const toggleOverlay = () => { 
    setVisible(!visible)
   }
  const [monthlyEarning,setMonthlyEarning] = useState(false)
  const toggleOverlayMonthlyEarning = () => { 
    setMonthlyEarning(!monthlyEarning)
   }
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={ tw `bg-white relative pt-10  flex flex-1 `}>
      
      {/* Appartement Modal */}
      <Overlay overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }   isVisible={visible} onBackdropPress={toggleOverlay}>
     <View style={tw`flex  p-3 min-h-70 w-90 bg-white`}>
      <Text style={tw `text-[${Colors.primaryColor}] mb-2 font-semibold text-lg`}>Appartement le plus visionné</Text>
 
    
         {/* Dropdown */}
         <TouchableOpacity onPress={()=> navigation.navigate("property")}  style={tw `h-100   bg-white`}>
   
   {/* Image */}

<View style={tw `h-80  w-86 self-center relative `} >
 <View  style={tw `absolute z-50 top-2 right-5`}>
 <Icon type='ionicon' size={30} name='heart-outline' color="white" />

 </View>
   <Image source={{ uri : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Cihotelprsidt2.JPG/1200px-Cihotelprsidt2.JPG" }} style={tw `h-80 self-center rounded-lg w-86`}/>
   </View>
   <View style={tw `h-6  flex items-center flex-row px-5 mt-1 justify-between`}>
     <Text style={tw `font-semibold`}>Hotel president yamousskro</Text>
     <View style={tw `flex flex-row  h-10 items-center mr-3`}>
<AirbnbRating count={1} selectedColor={`${Colors.blackColor}`} size={13} v isDisabled={true} showRating={false} />
<Text style={tw `font-semibold ml-1`}>4,2</Text>

</View>
   </View>
{/* Other Informations */}
<View style={tw `flex    justify-between px-5 `}>
{/* Mark and Like */}
<Text style={tw ` text-gray-500 `}>17-22 sep.</Text>
<View style={tw `flex flex-row items-center`} >
<Text style={tw `font-semibold`}>14000 FCFA </Text>
<Text>par nuit </Text>

</View>

         {/* Price */}
 </View>
 </TouchableOpacity>
      
         
      
     

     </View>
    </Overlay>
    {/* Information about Earning */}
      <Overlay overlayStyle={tw `border-0 border-red-500 bg-white rounded-lg` }   isVisible={monthlyEarning} onBackdropPress={toggleOverlayMonthlyEarning}>
     <View style={tw`flex  p-3 h-70 w-90 bg-white`}>
      <Icon  onPress={toggleOverlayMonthlyEarning} name='close' type='ionicon' style={tw `self-end`} />
      <Text style={tw `text-[${Colors.primaryColor}] mb-2 font-semibold text-lg`}>Récapitulatif des revenus</Text>
 {/* Columns */}
      <View style={tw `bg-gray-400 h-12 flex-row items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-white font-bold`}>Mois</Text>
</View>
<View style={tw `flex p-2 border-l-2 border-white flex-1 items-center`}>
    <Text style={tw `text-white font-bold`}>Revenus</Text>
</View>


</View>
{/* rows */}
<ScrollView   > 

<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Janvier</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Fevrier</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Mars</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Avril</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Mai</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Juin</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Juillet</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Aout</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Sepetembre</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Octobre</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Novembre</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
<View style={tw ` h-12 flex-row border-b-2 border-gray-100 items-center flex`} >

<View style={tw `flex p-2 w-25 items-center`}>
    <Text style={tw `text-black `}>Decembre</Text>
</View>
<View style={tw `flex p-2 flex-1 border-l-2 items-center`}>
    <Text style={tw `text-black font-bold`}>300.000 FCFA</Text>
</View>

</View>
         
</ScrollView>

         

         

         

         
      
     

     </View>
    </Overlay>
     <View style={tw `bg-white rounded-sm h-24  mb-5 px-2 flex flex-row items-center justify-between`} >
      {/* wallwt balance */}
      <TouchableOpacity activeOpacity={0.7} style={tw `flex flex-col`}>
        <Text style={ tw`text-gray-600 text-xl font-semibold `}> Gains du mois en cours: </Text>
        <Text style={ tw` text-2xl font-bold`}>  {selectedId === 1 ? "12.600.000 FCFA" : selectedId === 2 ? "32.660.000 FCFA" : "42.220.000 FCFA" } </Text>
      </TouchableOpacity>
      
     </View>
     

<Text style={tw `text-center`}>Evolution du Gain Mensuel</Text>
<VictoryChart  width={400}  domainPadding={{ x: 10, y: [0, 20] }}  style={{ background : { backgroundColor :"#1877f2" }}} theme={VictoryTheme.material}>
          <VictoryBar style={{ data : { fill : "#FF6347" } }   } dataComponent={<Bar    />} alignment="middle" data= {selectedId === 1 ?data : selectedId === 2 ? data1 : data2 } x="quarter" y="earnings" />
        </VictoryChart>
        <View style={tw `flex self-center mb-15 flex-row  ml-8 items-center`}>
    <View style={tw `h-4 w-4 bg-[#FF6347]`}></View>
    <Text style={tw ` font-bold ml-5 `}>Gain Mensuel (fcfa)</Text>
    <TouchableOpacity onPress={()=> toggleOverlayMonthlyEarning()} style={tw `h-5 ml-2 rounded items-center justify-center flex w-12 bg-[#FF6347]`}>
      <Icon type='ionicon' size={20} color="white" name='eye'/>
    </TouchableOpacity>

   </View>
    </ScrollView>
  )
}

export default StatisticHome