import React,{useEffect,useState} from 'react';
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
import Icon from 'react-native-vector-icons/FontAwesome'
import { getDatabase, ref, onValue} from "firebase/database";
import Detail from '../Details/Detail';



const AllProducts = ({navigation}) => {
const [products,setAllProducts]=useState([])
console.log(products)
  useEffect(()=>{
    

    const db = getDatabase();
    const starCountRef = ref(db, 'seller/allProducts' );
    onValue(starCountRef, (snapshot) => {
      let data = snapshot.val();
      let keys=Object.keys(data)
      if(keys){
        let arr=[]
        for(let i=0; i<keys.length; i++){
          const key=keys[i]
          const dataFinal=data[key]
          const object={data:dataFinal,key:key}
          arr.push(object)
          
        }
        setAllProducts(arr)
      }
        // updateStarCount(postElement, data);
    });
  },[])
// const addWishList=()=>{



//   const db = getDatabase();
//   set(ref(db, `users/${id}/addWishList`), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   })
//   .then(() => {
//     // Data saved successfully!
//   })
//   .catch((error) => {
//     // The write failed...
//   });


// }

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
    
      <FlatList  data={products ? products : ''} numColumns={2} renderItem={({item})=>(
<View style={styles.allProducts}>
      <View style={styles.product1}>
<TouchableOpacity onPress={()=>navigation.navigation('Final')}>

        {/* <View style={styles.image}> */}
            <Image source={{uri:item.data.images.img1}}  style={styles.image} resizeMode='contain' />
        {/* </View> */}
</TouchableOpacity>
        <View style={styles.text}>
        <Text style={styles.price}>{item.data.price}</Text> 
         {/* <TouchableOpacity onPress={()=>addWishList}> 
            <Text style={styles.wish}>WishList</Text>
          </TouchableOpacity> */}
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
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    backgroundColor:'#ffffff'
  },
  price:{
      fontWeight:'800',
      fontSize:16,
      lineHeight:20
  },
  wish:{
    color:'black'
  }
});
