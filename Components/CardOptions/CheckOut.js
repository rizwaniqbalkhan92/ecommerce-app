import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';
import {ArrowBackIcon, NativeBaseProvider} from 'native-base';

const CheckOut = ({navigation}) => {
  return (
    <View style={styles.mainShoes}>
      <View style={styles.headerDiv}>
        <NativeBaseProvider>
          <TouchableOpacity style={styles.icons} onPress={()=>navigation.navigate('AddToCard')} > 
            <ArrowBackIcon size="6" />
          </TouchableOpacity>
        </NativeBaseProvider>
        <Text style={styles.cat}>Check Out</Text>
        <View style={styles.icons}>
          <Text></Text>
        </View>
      </View>

      <View style={styles.shipping}>
        <Text style={styles.addressText}>Shipping Address</Text>
        <View style={styles.address}></View>
        <Text style={styles.paymentText}>Payment</Text>
        <View style={styles.payment}></View>
        <Text style={styles.deliveryText}>Delivery Method</Text>
        <View style={styles.delivery}>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
          <View style={styles.box1}></View>
        </View>
        <View style={styles.checkOut}>
          <View style={styles.ch1}></View>
          <View style={styles.ch1}></View>
          <View style={styles.ch1}></View>
          <TouchableOpacity style={styles.checkOutBtn}>
              <Text style={styles.btnText}>SUBMIT ORDER</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  mainShoes: {
    width: 395,
    backgroundColor: 'white',
    // left:10
  },
  headerDiv: {
    width: 375,
    left: 20,
    backgroundColor: ' #FFFFFF',
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
  allProducts: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    marginLeft: 30,
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
  image: {
    height: 192,
    width: 162,
    borderWidth: 1,
    borderColor: 'white',
  },
  text: {
    width: 162,
    height: 20,
    //   borderColor:'organge',
    //   borderWidth:1,
    backgroundColor: '#ffffff',
  },
  price: {
    fontWeight: '800',
    fontSize: 16,
    lineHeight: 20,
  },
  shipping: {
    width: 375,
    height: 600,
    // borderWidth: 1,
    // borderColor: 'red',
    left: 10,
  },
  addressText: {
    fontSize: 15,
    fontFamily: '600',
    color: 'black',
    left: 10,
    top: 10,
  },
  paymentText: {
    fontSize: 15,
    fontFamily: '600',
    color: 'black',
    left: 13,
    top: 30,
  },
  deliveryText: {
    fontSize: 15,
    fontFamily: '600',
    color: 'black',
    left: 13,
    top: 50,
  },
  address: {
    width: 343,
    height: 108,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    top: 20,
    left: 13,
  },
  payment: {
    width: 343,
    height: 75,
    borderRadius: 5,
    backgroundColor: '#F2F2F2',
    top: 40,
    left: 13,
  },
  delivery: {
    width: 343,
    height: 75,
    borderRadius: 5,
    // backgroundColor: '#F2F2F2',
    top: 60,
    left: 13,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection:'row'
  },
  checkOut: {
    width: 343,
    height: 180,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    top: 90,
    left: 13,
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection:'column'
  },
  box1: {
      width:100,
      height:75,
      backgroundColor:'#F2F2F2',
      borderRadius:5
  },
  ch1: {
      width:340,
      height:30,
    //   backgroundColor:'#F2F2F2',
      borderRadius:5
  },
  checkOutBtn:{
      width:343,
      height:40,
      backgroundColor:'orange'

  },
  btnText:{
      color:'white',
      fontSize:16,
      left:113,
      top:10,
      bottom:10
  }


});
