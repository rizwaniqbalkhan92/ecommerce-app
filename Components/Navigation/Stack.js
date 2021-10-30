import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createStackNavigator}  from '@react-navigation/stack'
import Login from '../Authentication/LoginUi'
import SignUp from '../Authentication/SignUp'
import Drawer  from '../Navigation/Drawer'
import CreateProducts from '../SellerAccount/CreateProducts'
import CreateCatorgories from '../SellerAccount/CreateCatorgories'



const MainStack=createStackNavigator()

const Stack = () => {
    return (
     <MainStack.Navigator>
         {/* <MainStack.Screen  name='Drawer' component={Drawer}  />
         <MainStack.Screen  name='SignUp' component={SignUp}  />
         <MainStack.Screen  name='Login' component={Login}  /> */}
         {/* <MainStack.Screen  name='CreateProducts' component={CreateProducts} /> */}
         <MainStack.Screen  name='CreateProducts' component={CreateCatorgories} />

     </MainStack.Navigator>
    )
}

export default Stack

const styles = StyleSheet.create({})
