/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Config  from './Components/Database/Config'
// import Drawer  from './Components/Navigation/Drawer'
import Home from './Components/Home/Home'
import Stack2  from  './Components/Navigation/Stack'
// import type {Node} from 'react';
import SignUp from './Components/Authentication/SignUp';
import Login from  './Components/Authentication/LoginUi'
import Slider from './Components/Home/Slider'
import AllProducts from './Components/Home/AllProducts';
import CategoriesAll from './Components/Catgories/CategoriesAll';
import Clothes from './Components/Catgories/Clothes';
import DetailsPage  from './Components/Details/DetailsPage'
import AddToCard from './Components/CardOptions/AddToCard';
import {NavigationContainer}  from '@react-navigation/native'
import {createStackNavigator}  from '@react-navigation/stack'
import {createDrawerNavigator}  from '@react-navigation/drawer'
import Drawer  from './Components/Navigation/Drawer'
import Navigation from './Components/Navigation/Navigation';
// import Home  from './Components/Home/Home'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Profile from './Components/Authentication/Profile';
import CheckOut  from './Components/CardOptions/CheckOut'
import DifferentCategories from './Components/Home/DifferentCategories';
import WishList from './Components/Favourite/WishList';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { style } from 'styled-system';
import Shoes from './Components/Catgories/Shoes'
import Electronics from './Components/Catgories/Electronics'


const Section = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },

        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const MainStack=createStackNavigator()
// const Drawer=createDrawerNavigator()

// const DarwerCom=()=>{
//   return(
//     <Drawer.Navigator>
//   {/* <Drawer.Screen name="SignUp" component={SignUp} />
//   <Drawer.Screen name="Login" component={Login} /> */}
//   {/* <Drawer.Screen name="Profile" component={Profile} />
//   <Drawer.Screen name="Home" component={Home} /> */}
// </Drawer.Navigator>
//   )
// }
const App = () => {

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
//     <SafeAreaView style={backgroundStyle}>
//       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
// {/* <SignUp/> */}
// {/* <Login/> */}
//   {/* <Slider/> */}
// {/* <DifferentCategories/> */}
// {/* <AllProducts/> */}
// {/* <CategoriesAll/> */}
// {/* <Shoes/> */}
// {/* <Clothes/> */}
// {/* <Electronics/> */}
// {/* <DetailsPage/> */}
// {/* <WishList/> */}
// {/* <AddToCard/> */}
// {/* <CheckOut/> */}
//  <Profile/> 

// <Navigation/>
//     </SafeAreaView>
<NavigationContainer>

{/* <Stack.Navigator>
    <Stack.Screen  name="SignUp"  component={SignUp}    />
    <Stack.Screen  name="Home" component={DarwerCom}    />
    <Stack.Screen  name="Login" component={Login}    />
</Stack.Navigator>
 */}
{/* <MainStack.Navigator>
         <MainStack.Screen  name='SignUp' component={SignUp}  />
         <MainStack.Screen  name='Login' component={Login}  />
         <MainStack.Screen  name='Drawer' component={Drawer}  />

     </MainStack.Navigator> */}
 <Stack2 />
</NavigationContainer>  
);
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
 

});

export default App;
