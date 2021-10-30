import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import AllProducts from '../Home/AllProducts'
import CategoriesAll from '../Catgories/CategoriesAll'
import WishList from '../Favourite/WishList'
import AddToCard from '../CardOptions/AddToCard'
import Profile from '../Authentication/Profile'

const MainTab=createBottomTabNavigator()

const TabBottom = () => {
    return (
      <MainTab.Navigator>
          <MainTab.Screen  name='Home' component={AllProducts}  />
          <MainTab.Screen  name='Search' component={CategoriesAll}  />
          <MainTab.Screen  name='WishList' component={WishList}  />
          <MainTab.Screen  name='Add to Card' component={AddToCard}  />
          <MainTab.Screen  name='Profile' component={Profile}  />
      </MainTab.Navigator>
    )
}

export default TabBottom

const styles = StyleSheet.create({})
const Tab1=()=>{
    return(
        <View>
            <Text>TAB1</Text>
        </View>
    )
}
const Tab2=()=>{
    return(
        <View>
            <Text>TAB2</Text>
        </View>
    )
}