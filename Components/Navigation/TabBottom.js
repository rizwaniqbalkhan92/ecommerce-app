import React from 'react'
import { StyleSheet, Text, View,Image } from 'react-native'
import {createBottomTabNavigator}  from '@react-navigation/bottom-tabs'
import AllProducts from '../Home/AllProducts'
import CategoriesAll from '../Catgories/CategoriesAll'
import WishList from '../Favourite/WishList'
import AddToCard from '../CardOptions/AddToCard'
import Profile from '../Authentication/Profile'
import Icon  from 'react-native-vector-icons/FontAwesome'
import {createStackNavigator}  from '@react-navigation/stack'
import DetailsPage from '../Details/DetailsPage'
import Clothes from '../Catgories/Clothes'
import Electronics from '../Catgories/Electronics'
import Shoes from '../Catgories/Shoes'
import CheckOut  from '../CardOptions/CheckOut'
import PaymentOption from '../CardOptions/PaymentOption'
import { TouchableOpacity } from 'react-native-gesture-handler'
const MainTab=createBottomTabNavigator()
const AllProductsStack=createStackNavigator()
const CategoriesStack=createStackNavigator()
const AddtoCardAll=createStackNavigator()


const StackAllProducts=()=>{

    return(
        <AllProductsStack.Navigator   screenOptions={{
            headerShown: false
          }}>
              
            <AllProductsStack.Screen  name='AllProducts' component={AllProducts}  />
            <AllProductsStack.Screen  name='DetailPage' component={DetailsPage}  />
        </AllProductsStack.Navigator>
    )
}
const CategoriesStackAll=()=>{

    return(
        <CategoriesStack.Navigator creenOptions={{
            headerShown: false
          }} >
              <CategoriesStack.Screen name='Categories' component={CategoriesAll}   />
              <CategoriesStack.Screen name='Electronics' component={Electronics}   />
              <CategoriesStack.Screen name='Shoes' component={Shoes}   />
              <CategoriesStack.Screen name='Clothes' component={Clothes}   />



        </CategoriesStack.Navigator>
    )
}

const AddToCardAll=()=>{


    return(
<AddtoCardAll.Navigator>

    <AddtoCardAll.Screen name='AddToCard' component={AddToCard}  />
    <AddtoCardAll.Screen name='checkOut' component={CheckOut}  />
</AddtoCardAll.Navigator>
    )
}

const TabBottom = ({navigation}) => {
    return (
        <>

         <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>

          <Image resizeMode='contain' 
 style={{height:40,width:40}}  source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACLklEQVRoge3Zu2sUURjG4Se6Ct4QA4qFRUBRCxsJwUILm9gogmBhlU4rwcY/wC6NjWClXRohEUHRwhuCt8LCZhtBJIKFEBC8IJKgicXu4jJ7Znd2di7rMj/4mtlzvvO+7Jl5z85SUVFRNkea9V8zje/4iZMla0nNDFaw1qzfOF+qohRcwqp/Jlq1iisl6krMGK7qNBCt61hXksaebMQtvU206g42laK0C1vxUHgrXcZF/Al8/gzbS9AbZDfe6hS5jHNt487gV2BcHXsK1BtkL97rFPcDJwLjj+NrYPxHHCxAb5ApLAVEfcbhLvMO4VNg3hcczVFvkFbQRcV8wL4E8yfwLjC/0OCMBl2r3mBXH33G8SrQp5DgjAu6x9iWot8W3A/0yy04uwXdHDYM0Hs9bsT0zjQ4uwXdNQ2TgzKm8Q3kFpy9gi5rcgnOpEGXNZkG5wEsBpqtYTYbvV2ZjVl7samtg9CNNIUXGs/6EMsDy+xN3BoTeC0QnFEj03iKndnqypRxPBIJznYjM3ggXR4UzWbc1Rac7UbmNB61Y5FaKFBgHAs6ddVwszVgaH+l9Ustw17HcK/POafxMovFszRSw46y1h+ZrTUyRrLcWlG+4Wzk2m05vWzI08gKngSu5cLIbK3KyLBRGRk2RsZImsfvJC4Eru9P0etUzLzJFL16Mi/5XwXttRToFXrFmqTme4kcma01MkaS3CN1/R/PaZy1ojyX7qxVTzGnoqKiYoj5C/ix7Jp9hnaDAAAAAElFTkSuQmCC"}} />
 </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>

          <Image resizeMode='contain' 
        
 style={{height:40,width:40}}  source={{uri:"https://img.icons8.com/material-outlined/24/000000/search--v2.png"}} />
 </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>
     
          <Image resizeMode='contain' 
 style={{height:40,width:40}}  source={{uri:"https://img.icons8.com/external-bearicons-glyph-bearicons/64/000000/external-cart-call-to-action-bearicons-glyph-bearicons.png"}} />
 </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>
         {/* <img src="https://img.icons8.com/material-outlined/64/000000/like.png"/> */}
         {/* <img src="https://img.icons8.com/ios-glyphs/30/000000/like.png"/> */}

         {/* <img src="https://img.icons8.com/color/30/000000/user.png"/> */}
         {/* <img src="https://img.icons8.com/material-two-tone/50/000000/user.png"/> */}
          <Image resizeMode='contain' 
 style={{height:40,width:40}}  source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACLklEQVRoge3Zu2sUURjG4Se6Ct4QA4qFRUBRCxsJwUILm9gogmBhlU4rwcY/wC6NjWClXRohEUHRwhuCt8LCZhtBJIKFEBC8IJKgicXu4jJ7Znd2di7rMj/4mtlzvvO+7Jl5z85SUVFRNkea9V8zje/4iZMla0nNDFaw1qzfOF+qohRcwqp/Jlq1iisl6krMGK7qNBCt61hXksaebMQtvU206g42laK0C1vxUHgrXcZF/Al8/gzbS9AbZDfe6hS5jHNt487gV2BcHXsK1BtkL97rFPcDJwLjj+NrYPxHHCxAb5ApLAVEfcbhLvMO4VNg3hcczVFvkFbQRcV8wL4E8yfwLjC/0OCMBl2r3mBXH33G8SrQp5DgjAu6x9iWot8W3A/0yy04uwXdHDYM0Hs9bsT0zjQ4uwXdNQ2TgzKm8Q3kFpy9gi5rcgnOpEGXNZkG5wEsBpqtYTYbvV2ZjVl7samtg9CNNIUXGs/6EMsDy+xN3BoTeC0QnFEj03iKndnqypRxPBIJznYjM3ggXR4UzWbc1Rac7UbmNB61Y5FaKFBgHAs6ddVwszVgaH+l9Ustw17HcK/POafxMovFszRSw46y1h+ZrTUyRrLcWlG+4Wzk2m05vWzI08gKngSu5cLIbK3KyLBRGRk2RsZImsfvJC4Eru9P0etUzLzJFL16Mi/5XwXttRToFXrFmqTme4kcma01MkaS3CN1/R/PaZy1ojyX7qxVTzGnoqKiYoj5C/ix7Jp9hnaDAAAAAElFTkSuQmCC"}} />
 </TouchableOpacity>
         <TouchableOpacity onPress={() => navigation.navigate('AllProducts')}>

          <Image resizeMode='contain' 
 style={{height:40,width:40}}  source={{uri:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAACLklEQVRoge3Zu2sUURjG4Se6Ct4QA4qFRUBRCxsJwUILm9gogmBhlU4rwcY/wC6NjWClXRohEUHRwhuCt8LCZhtBJIKFEBC8IJKgicXu4jJ7Znd2di7rMj/4mtlzvvO+7Jl5z85SUVFRNkea9V8zje/4iZMla0nNDFaw1qzfOF+qohRcwqp/Jlq1iisl6krMGK7qNBCt61hXksaebMQtvU206g42laK0C1vxUHgrXcZF/Al8/gzbS9AbZDfe6hS5jHNt487gV2BcHXsK1BtkL97rFPcDJwLjj+NrYPxHHCxAb5ApLAVEfcbhLvMO4VNg3hcczVFvkFbQRcV8wL4E8yfwLjC/0OCMBl2r3mBXH33G8SrQp5DgjAu6x9iWot8W3A/0yy04uwXdHDYM0Hs9bsT0zjQ4uwXdNQ2TgzKm8Q3kFpy9gi5rcgnOpEGXNZkG5wEsBpqtYTYbvV2ZjVl7samtg9CNNIUXGs/6EMsDy+xN3BoTeC0QnFEj03iKndnqypRxPBIJznYjM3ggXR4UzWbc1Rac7UbmNB61Y5FaKFBgHAs6ddVwszVgaH+l9Ustw17HcK/POafxMovFszRSw46y1h+ZrTUyRrLcWlG+4Wzk2m05vWzI08gKngSu5cLIbK3KyLBRGRk2RsZImsfvJC4Eru9P0etUzLzJFL16Mi/5XwXttRToFXrFmqTme4kcma01MkaS3CN1/R/PaZy1ojyX7qxVTzGnoqKiYoj5C/ix7Jp9hnaDAAAAAElFTkSuQmCC"}} />
 </TouchableOpacity>
      <MainTab.Navigator   >

          
          <MainTab.Screen  name='Home' component={StackAllProducts}  />
          <MainTab.Screen  name='Search' component={CategoriesStackAll}  />
          <MainTab.Screen  name='WishList' component={WishList}  />
          <MainTab.Screen  name='AddtoCard' component={AddToCardAll}  />
          <MainTab.Screen  name='Profile' component={Profile}  />
      </MainTab.Navigator>
      </>
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