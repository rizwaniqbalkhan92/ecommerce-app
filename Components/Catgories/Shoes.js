import React from 'react'
import { StyleSheet, Text,FlatList,Image, TouchableOpacity, View } from 'react-native'
import {ArrowBackIcon,NativeBaseProvider}  from 'native-base'
import { display, width } from 'styled-system'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'





const Shoes = () => {
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
        <View style={styles.mainShoes}>
        <View style={styles.headerDiv}>
            <NativeBaseProvider>
            <TouchableOpacity style={styles.icons}>
            <ArrowBackIcon size='6' />
            </TouchableOpacity>
            </NativeBaseProvider>
            <Text style={styles.cat}>Women bags</Text>
            <View style={styles.icons}>
                <Text></Text>
            </View>
        </View>

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
    )
}

export default Shoes

const styles = StyleSheet.create({
    mainShoes:{width:375,
    // backgroundColor:'white'
    },
    headerDiv:{width:375,left:20,backgroundColor:' #FFFFFF',height:60,
    flexDirection:'row',
display:'flex',alignItems:'center' },
    cat:{
        fontSize:17,
      right:110,
      color:'black'

    }
    ,
    icons:{
        width:17,
        height:17
    },
    allProducts: {
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-around',
        marginTop:20,
        marginLeft:22
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

})
