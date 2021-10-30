import React from 'react'
import { StyleSheet, Text,Button,TouchableOpacity, View } from 'react-native'
import {NavigationContainer}  from '@react-navigation/native'
// import {createStackNavigator}  from '@react-navigation/stack'
// // import { Button } from 'native-base'
// // import {createBottomTabNavigator }  from '@react-navigation/bottom-tabs'




// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs'


const Tab=createBottomTabNavigator()



const Home=()=>{



    return(
        <Tab.Navigator>
            <Tab.Screen  name="tab1"  component={Tab1} />
            <Tab.Screen  name="tab2"  component={Tab2} />
        </Tab.Navigator>
    )
}

const Tab1=()=>{
    return(
        <View>
            <Text>Tab1 ha ye</Text>
        </View>
    )
}
const Tab2=()=>{
    return(
        <View>
            <Text>Tab2 ha ye</Text>
        </View>
    )
}




export default Home

















// const Tab = createBottomTabNavigator();
// const TabStack=createStackNavigator()
// function MyTabs() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen name="tab1" component={Tab1} />
//       {/* <Tab.Screen name="tab2" component={Tab2} /> */}
//     </Tab.Navigator>
//   );
// }

// export default MyTabs

// const styles = StyleSheet.create({})
// const Tab1=({navigation})=>{
//     return(
// <TabStack.Navigator>
//     <TabStack.Screen >
// <TouchableOpacity onPress={()=>navigation.navigate('tabStack1')} >
// <Text>Tab1</Text>
// </TouchableOpacity>
//     </TabStack.Screen>
//     <TabStack.Screen >
// <TouchableOpacity onPress={()=>navigation.navigate('tabStack2')} >
// <Text>Tab1</Text>
// </TouchableOpacity>
//     </TabStack.Screen>
//     <TabStack.Screen >
// <TouchableOpacity onPress={()=>navigation.navigate('tabStack3')} >
// <Text>Tab1</Text>
// </TouchableOpacity>
//     </TabStack.Screen>


  
// </TabStack.Navigator>
  
       
//     )
// }

// const TabStack1=()=>{
//     return(
//         <View>
//             <Text>TabStack1</Text>
//         </View>
//     )
// }


// const Tab2=({navigation})=>{
//     return(
//         <View>
// <TouchableOpacity onPress={()=>navigation.navigate('tab1')}><Text>Tab1</Text></TouchableOpacity>
// <TouchableOpacity onPress={()=>navigation.navigate('tab2')}><Text>Tab2</Text></TouchableOpacity>
// {/* <Button>Tab3</Button> */}
//         <Text>Tab1</Text>
//         </View>
//     )
// }
// const Tab3=({navigation})=>{
//     return(
//         <View>

//         <Text>Tab1</Text>
//         </View>
//     )
// }








