import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createDrawerNavigator}  from '@react-navigation/drawer'
import {NavigationContainer}  from '@react-navigation/native'
import TabBottom from './TabBottom'
import AllProducts from '../Home/AllProducts'
import DetailsPage from '../Details/DetailsPage'

const MainDrawer=createDrawerNavigator()
const Drawer = () => {
    return (
        

        <MainDrawer.Navigator>
            <MainDrawer.Screen name='tabBottom' component={TabBottom}  />
            <MainDrawer.Screen name='about' component={About}  />
            {/* <MainDrawer.Screen name='DetailsPage' component={DetailsPage}  /> */}
        </MainDrawer.Navigator>
  
    )
}

export default Drawer

const styles = StyleSheet.create({})
const Home=()=>{
    return(
        <View>
            <Text>HOME</Text>
        </View>
    )
}
const About=()=>{
    return(
        <View>
            <Text>ABOUT</Text>
        </View>
    )
}