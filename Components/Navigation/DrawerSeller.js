import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator}  from '@react-navigation/drawer'
// import Login from '../Authentication/LoginUi'

import CreateCatorgories from '../SellerAccount/CreateCatorgories'
import CreateProducts from '../SellerAccount/CreateProducts'
const MainDrawer=createDrawerNavigator()
const DrawerSeller = () => {
    return (
        

        <MainDrawer.Navigator>
            <MainDrawer.Screen name='Create Categories' component={CreateCatorgories}  />
            <MainDrawer.Screen name='Create Products' component={CreateProducts}  />
            {/* <MainDrawer.Screen name='log Out' component={Login}  /> */}
            {/* <MainDrawer.Screen name='DetailsPage' component={DetailsPage}  /> */}
        </MainDrawer.Navigator>
  
    )
}

export default DrawerSeller

const styles = StyleSheet.create({})
