import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {NavigationContainer}  from '@react-navigation/native'
import {createNativeStackNavigator}  from '@react-navigation/native-stack'
import Login  from '../Authentication/LoginUi'
import SignUp from '../Authentication/SignUp'
import MyTabs  from '../Home/Home'

const Stack=createNativeStackNavigator()

const Home=()=>{
    return(
        <Text>HOME</Text>
    )
}
const Navigation = () => {


    return (
       <NavigationContainer>
           <Stack.Navigator>
               <Stack.Screen  name="Home"  key={1} component={MyTabs}    />
               {/* <Stack.Screen  name="SignUp"  component={SignUp}    /> */}
           </Stack.Navigator>
       </NavigationContainer>
    )
}

export default Navigation

const styles = StyleSheet.create({})
