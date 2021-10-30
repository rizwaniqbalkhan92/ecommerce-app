import React from 'react';
import {FlatList, StyleSheet, Text, Image,View, TouchableHighlight, TouchableOpacity} from 'react-native';
import { style } from 'styled-system';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import  Slider  from './Slider'
import img6 from '../images/img6.jpg'
import DifferentCategories  from  '../Home/DifferentCategories'

const AllProducts = () => {

const data=[
    {image:img1,price:'Rs 5000'},
    {image:img2,price:'Rs 5000'},
    {image:img3,price:'Rs 5000'},
    {image:img4,price:'Rs 5000'},
    {image:img5,price:'Rs 5000'},
    {image:img6,price:'Rs 5000'},
    {image:img1,price:'Rs 5000'},
    {image:img2,price:'Rs 5000'},
    {image:img3,price:'Rs 5000'},
    {image:img4,price:'Rs 5000'},
    {image:img5,price:'Rs 5000'},
    {image:img6,price:'Rs 5000'},
    {image:img3,price:'Rs 5000'},
    {image:img4,price:'Rs 5000'},
    {image:img5,price:'Rs 5000'},
    {image:img6,price:'Rs 5000'},
    {image:img1,price:'Rs 5000'},
    {image:img2,price:'Rs 5000'},
    {image:img3,price:'Rs 5000'},
    {image:img4,price:'Rs 5000'},
    {image:img5,price:'Rs 5000'},
    {image:img6,price:'Rs 5000'},
]

  return (
    <View>

    <DifferentCategories/>
      
      <FlatList  data={data} numColumns={2} renderItem={({item})=>(
<View style={styles.allProducts}>
      <View style={styles.product1}>
<TouchableOpacity>

        {/* <View style={styles.image}> */}
            <Image source={item.image} style={styles.image} resizeMode='contain' />
        {/* </View> */}
</TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.price}>{item.price}</Text> 
          <View></View>
        </View>
      </View>

     
    </View>
      )}  />
    
    </View>
  );
};

export default AllProducts;

const styles = StyleSheet.create({
  allProducts: {
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      marginTop:20,
      marginLeft:23
  },
  product1: {
    width: 162,
    borderWidth: 1,
    borderColor: 'white',
    height: 214,
  },
  product2: {
    width: 162,
    // borderWidth: 1,
    // borderColor: 'red',
    height: 214,
  },
  image:{
      height:192,
      width:162,
      borderWidth:1,
      borderColor:'white'
  },
  text:{
      width:162,
      height:20,
    //   borderColor:'organge',
    //   borderWidth:1,
    backgroundColor:'#ffffff'
  },
  price:{
      fontWeight:'800',
      fontSize:16,
      lineHeight:20
  }
});
