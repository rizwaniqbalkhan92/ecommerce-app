/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import SignUp from './Components/Authentication/SignUp';
import Login from  './Components/Authentication/LoginUi'
import Slider from './Components/Home/Slider'
import AllProducts from './Components/Home/AllProducts';
import CategoriesAll from './Components/Catgories/CategoriesAll';
import Clothes from './Components/Catgories/Clothes';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import DifferentCategories from './Components/Home/DifferentCategories';

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


const Section = ({children, title}): Node => {
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

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
{/* <SignUp/> */}
{/* <Login/> */}
  {/* <Slider/> */}
{/* <DifferentCategories/> */}
{/* <AllProducts/> */}
{/* <CategoriesAll/> */}
{/* <Shoes/> */}
{/* <Clothes/> */}
<Electronics/>

    </SafeAreaView>
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
