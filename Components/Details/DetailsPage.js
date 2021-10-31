import React,{useState} from 'react';
import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import {NativeBaseProvider, ArrowBackIcon, Card} from 'native-base';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';
import img4 from '../images/img4.jpg';

import {
  Select,
  VStack,
  CheckIcon,
  Center
  
} from "native-base"

const DetailsPage = ({navigation}) => {
const [color,setColor]=useState('')
const [size,setSize]=useState('')
const [img,setImg]=useState(img1)
// const [img1,setImg1]=useState(img1)
// const [img2,setIm2]=useState(img1)
// const [img3,setIm3]=useState(img1)

  return (
    <View style={styles.main}>
      {/* <View style={styles.headerDiv}>
        <NativeBaseProvider>
          <TouchableOpacity onPress={navigation.navigate('AllProducts')}  style={styles.icons}>
            <ArrowBackIcon size="6" />
          </TouchableOpacity>
        </NativeBaseProvider>
        <Text style={styles.cat}>Electronics</Text>
        <View style={styles.icons}>
          <Text></Text>
        </View>
      </View> */}
      {/* <View>
        <View style={styles.image}>
          <Image source={img} resizeMode="contain" style={styles.image1} />
        </View>
        <View style={styles.images}>
          <View style={styles.img1}>
          <TouchableOpacity  onPress={()=>setImg(img2)}
>
            <Image source={img2}  resizeMode="contain" style={styles.imgs1} />
          </TouchableOpacity>
          
          </View>
          <View style={styles.img1}>
          <TouchableOpacity  onPress={()=>setImg(img3)}
>
            <Image source={img3}  resizeMode="contain" style={styles.imgs1} />
          </TouchableOpacity>

          </View>
          <View style={styles.img1}>

          <TouchableOpacity  onPress={()=>setImg(img4)}
>
            <Image source={img4}  resizeMode="contain" style={styles.imgs1} />
          </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sizeColor}>
            <View style={styles.size}>
            <NativeBaseProvider>
            <VStack alignItems="center" space={4}>
      <Select
        selectedValue={size}
        minWidth="180"
        accessibilityLabel="Size"
        placeholder="Size"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setSize(itemValue)}
      >
        <Select.Item label="Small" value="Small" />
        <Select.Item label="Medium" value="Medium" />
        <Select.Item label="Large" value="Large" />
       
      </Select>
    </VStack>
    </NativeBaseProvider>
            </View>
            <View style={styles.size}>
            <NativeBaseProvider>
            <VStack alignItems="center" space={4}>
      <Select
        selectedValue={color}
        minWidth="180"
        accessibilityLabel="Color"
        placeholder="Color"
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        mt={1}
        onValueChange={(itemValue) => setColor(itemValue)}
      >
        <Select.Item label="Black" value="Black" />
        <Select.Item label="Any Color" value="Any color" />
      
      </Select>
    </VStack>
    </NativeBaseProvider>
            </View>
        </View>
        <View style={styles.description}>
        <Text style={styles.desText}>This is the shoe for every one thos ewho want to buyy</Text>
        </View>
      </View> */}
      {/* <View style={styles.addToCard}>
<View style={styles.innerAddToCard}>
  <Text style={styles.text}>Shoe For Every</Text>
<Text style={styles.price}>$200</Text>
</View>
<View style={styles.btnAdd}>
<TouchableOpacity style={styles.btn1}>
  <Text style={styles.text1}>Add to Card</Text>
</TouchableOpacity>
<TouchableOpacity style={styles.btn2}>
  <Text  style={styles.text2}>+</Text>
</TouchableOpacity>

</View>
      </View> */}
      <Text>Details</Text>
    </View>
  );
};

export default DetailsPage;

const styles = StyleSheet.create({
  headerDiv: {
    width: 395,
    // left: 10,
    backgroundColor:  '#F2F2F2',
    color: '#FFFFFF',
    height: 60,
    flexDirection: 'row',
    display: 'flex',
    alignItems: 'center',
  },
  cat: {
    fontSize: 17,
    right: 130,
    color: 'black',
  },
  icons: {
    width: 17,
    height: 17,
  },
  image: {
    width: 375,
    height: 200,
    marginTop: 10,
    // borderWidth: 2,
    // borderColor: 'orange',
    marginLeft: 10,
  },
  image1: {
    width: '100%',
    height: '100%',
  },
  images: {
    height: 90,
    width: 375,
    // borderWidth: 1,
    marginLeft: 10,
    marginTop: 10,
    borderColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img1: {
    width: 117,
    height: 80,
    borderColor: 'orange',
    borderWidth: 1,
    marginTop: 3,
  },
  imgs1:{
      width:114,
      height:76,
  },
  sizeColor:{
      width:375,
      height:50,
    //   borderColor:'orange',
    //   borderWidth:1,
      marginLeft:10,
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between'
  },
  size:{
      width:180,
      height:40,
      // borderColor:'black',
      // borderWidth:1,
      marginTop:4
  }
,
description:{
    width:374,
    borderWidth:1,
    borderColor:'orange',
    height:100,
    marginLeft:10,
    marginTop:10,
    borderRadius:10,
    overFlow:'auto'
},
desText:{
    color:'#333333',
    fontSize:20
},
main:{
  backgroundColor:'white'
},
addToCard:{
  width:375,
  height:146,
  borderColor:'#F2F2F2',
  borderWidth:2,
  marginTop:10,
  marginLeft:10,
  backgroundColor:'#F2F2F2'

},
innerAddToCard:{
  width:360,
  height:20,
// borderWidth:1,
// borderColor:'red',
top:20,
flexDirection:'row',
justifyContent:'space-between',
display:'flex'
},
text:{
  width:238,
  fontSize:16,
  color:'black'
},
price:{
fontSize:15,
right:0,
color:'black'
},
btnAdd:{
  width:346,
  height:38,
  left:10,
  top:60,
  // borderWidth:1,
  // borderColor:'red',
display:'flex',
justifyContent:'space-between',
flexDirection:'row'

},
btn1:{
  width:267,
  height:38,
  backgroundColor:'orange'
},
btn2:{
  width:76,
  height:38,
  backgroundColor:'#FFFFFF'
},
text1:{
  top:5,
  left:70,
  color:'white',
  fontSize:20
},
text2:{
  top:5,
  left:30,
  color:'orange',
  fontSize:20
}


});
