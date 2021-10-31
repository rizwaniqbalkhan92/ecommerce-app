import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator}  from '@react-navigation/drawer'
import CreateCatorgories  from '../SellerAccount/CreateCatorgories'
import CreateProducts  from '../SellerAccount/CreateProducts'

import CreateCatorgories from '../SellerAccount/CreateCatorgories'
import CreateProducts from '../SellerAccount/CreateProducts'
const MainDrawer=createDrawerNavigator()
const DrawerSeller = () => {
    return (
        

        <MainDrawer.Navigator  screenOptions={{header:false}}>
            <MainDrawer.Screen name='Create Categories' component={CreateCatorgories}  />
            <MainDrawer.Screen name='Create Products' component={CreateProducts}  />
            {/* <MainDrawer.Screen name='DetailsPage' component={DetailsPage}  /> */}
        </MainDrawer.Navigator>
  
    )
}

export default DrawerSeller

const styles = StyleSheet.create({})
