import React, {useState,useEffect} from 'react';
import { getDatabase, ref, onValue} from "firebase/database";
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  TextInput,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Icon,
  SearchIcon,
  NativeBaseProvider,
  Center,
  ArrowBackIcon,
  CloseIcon
} from 'native-base';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';
import img5 from '../images/img5.jpg';
import img6 from '../images/img6.jpg';
import {width} from 'styled-system';

const CategoriesAll = ({navigation}) => {
  const [openInput, setOpenInp] = useState(false);
  const data = [
    {image: img1, price: 'Rs 5000'},
    {image: img2, price: 'Rs 5000'},
    {image: img3, price: 'Rs 5000'},
    {image: img4, price: 'Rs 5000'},
    {image: img5, price: 'Rs 5000'},
    {image: img6, price: 'Rs 5000'},
    {image: img1, price: 'Rs 5000'},
  ];




 



  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <View style={styles.headIcon}>
          <NativeBaseProvider>
            {/* <Center flex={1} px="3"> */}
            <TouchableOpacity>
              <ArrowBackIcon size="6"  onPress={navigation.navigate('CategoriesAll')}  />
            </TouchableOpacity>
          </NativeBaseProvider>
          {/* </Center> */}
        </View>
        <Text style={styles.headText}>Categories</Text>
        <View style={styles.headIcon}>
          <NativeBaseProvider>
            {!openInput ? 
        
            <TouchableOpacity onPress={() => setOpenInp(true)}>
                
              <SearchIcon size="5" /> 
            </TouchableOpacity>:
            <TouchableOpacity onPress={()=>setOpenInp(false)}>
      <CloseIcon size="4" />
      </TouchableOpacity>
            }
          </NativeBaseProvider>
        </View>
      </View>
      <TextInput
        placeholder="Search Please..." 
        style={openInput ? styles.inputShow : styles.notShow}
      />
      {/* <NativeBaseProvider>
      <TouchableOpacity>
      <CloseIcon style={openInput ? styles.closeShow : styles.closeNotshow} size="4" />
      </TouchableOpacity>
      </NativeBaseProvider> */}
 
          <TouchableOpacity onPress={()=>navigation.navigate('Shoes')} >
            <View style={styles.mainCategory}>
              <View style={styles.catrgory}>
                <View style={styles.categorytext}>
                  <Text style={styles.categorytext2}>Shoes</Text>
                </View>
                {/* <Image source={item.image} style={styles.categoryImage} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate('Clothes')}  >
            <View style={styles.mainCategory}>
              <View style={styles.catrgory}>
                <View style={styles.categorytext}>
                  <Text style={styles.categorytext2}>Clothes</Text>
                </View>
                {/* <Image source={item.image} style={styles.categoryImage} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate('Electronics')}  >
            <View style={styles.mainCategory}>
              <View style={styles.catrgory}>
                <View style={styles.categorytext}>
                  <Text style={styles.categorytext2}>Electronics</Text>
                </View>
                {/* <Image source={item.image} style={styles.categoryImage} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate('Kids')}  >
            <View style={styles.mainCategory}>
              <View style={styles.catrgory}>
                <View style={styles.categorytext}>
                  <Text style={styles.categorytext2}>Kids</Text>
                </View>
                {/* <Image source={item.image} style={styles.categoryImage} /> */}
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity  onPress={()=>navigation.navigate('Accessories')}  >
            <View style={styles.mainCategory}>
              <View style={styles.catrgory}>
                <View style={styles.categorytext}>
                  <Text style={styles.categorytext2}>Accessories</Text>
                </View>
                {/* <Image source={item.image} style={styles.categoryImage} /> */}
              </View>
            </View>
          </TouchableOpacity>
         
     
    </View>
  );
};

export default CategoriesAll;

const styles = StyleSheet.create({
  mainCategory: {
    width: 343,
    height: 100,
    // borderWidth: 1,
    // borderColor: 'red',
    left: 22,
    top: 20,
    marginBottom: 16,
    backgroundColor: '#F2F2F2',
  },
  catrgory: {
    display: 'flex',
    flexDirection: 'row',
  },
  categoryImage: {
    height: 98,
    width: 170,
  },
  categorytext: {
    width: 172,
  },
  categorytext2: {
    color: 'black',
    fontSize: 16,
    lineHeight: 22,
    top: 35,
    left: 30,
  },
  main: {
    backgroundColor: '#ffffff',
  },
  header: {
    width: 375,
    height: 60,
    display: 'flex',
    justifyContent: 'space-between',
    // borderWidth:1,
    flexDirection: 'row',
    alignItems: 'center',
    left: 17,
  },
  headIcon: {
    width: 16.5,
    height: 17,
    color: 'black',
    // borderColor:'red',
    // borderWidth:1
  },
  headText: {
    color: 'black',
    fontSize: 18,
    lineHeight: 22,
    // left: 145,
    top: 8,
    fontWeight: '600',
  },
  inputShow: {
    display: 'flex',
    width: 343,
    height: 70,
    borderWidth:1,
    borderColor:'black',
    left:33
  },
  notShow: {
    display: 'none',
    width: 343,
    height: 70,
    
  },
  closeShow:{
      position:'absolute',
      right:30,
      top:-50
  }
});
