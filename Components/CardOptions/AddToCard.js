import React from 'react'
// import {CloseIcon}  from 'native-base'
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
const AddToCard = ({navigation}) => {

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
               <View>
        <View style={styles.wishList}>
            <Text style={styles.wishListText}>My Card</Text>

        </View>
        <View style={styles.wishListProducts}>
<View style={styles.imgWishList}>

</View>
<View  style={styles.contextWishList}>
            <Text></Text>

</View>
        </View>
        <View style={styles.AddToCardMain}>

        <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity>
            <View style={styles.mainCategory}>
              <View style={styles.catrgory}>
                <Image source={item.image} resizeMode='cover' style={styles.categoryImage} />
                
                <View style={styles.categorytext}>
                <NativeBaseProvider>
            <TouchableOpacity style={styles.icons2}>
            <CloseIcon size='3' />
            </TouchableOpacity>
            </NativeBaseProvider>
                  <Text style={styles.categorytext2}>Kitchen Item</Text>
                  <Text style={styles.categorytext2}>Kitchen Item</Text>
                  <Text style={styles.categorytext2}>Kitchen Item</Text>
                  <Text style={styles.categorytext2}>Kitchen Item</Text>
                  <Text style={styles.categorytext2}>Kitchen Item</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
      <View style={styles.checkOut}>
      <View style={styles.totalAmount}>
          <Text style={styles.btnText}>Total: Rs.3230</Text>
      </View>
      <View style={styles.btnCheckout}>
          <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate('checkOut')}>
              <Text style={styles.btnText2}>Check Out</Text>
          </TouchableOpacity>
      </View>

      </View>
        </View>
        </View>
    )
}

export default AddToCard

const styles = StyleSheet.create({
    AddToCardMain:{
        backgroundColor:'white'
    },
    wishList:{
        width:395,
        height:100,
        backgroundColor:'#FFFFFF',
        // borderWidth:1,
        // borderColor:'red',
        // left:5
    },
    wishListText:{
        fontSize:40,
        color:'black',
        left:110,
        fontFamily:'SF UI Display',
        top:30
    },
    mainCategory: {
        width: 375,
        height: 144,
        borderWidth: 1,
        borderColor: 'orange',
        left: 10,
        top: 20,
        marginBottom: 16,
        backgroundColor: '#F2F2F2',
      },
      catrgory: {
        display: 'flex',
        flexDirection: 'row',
      },
      categoryImage: {
        height: 142,
        width: 104,
      },
      categorytext: {
        width: 172,
      },
      categorytext2: {
        color: 'black',
        fontSize: 16,
        lineHeight: 25,
        top: -10,
        left: 30,
      },
      icons2:{
        //   borderWidth:1,
        //   borderColor:'red',
          left:250,
          width:20,


      },
      checkOut:{
          width:395,
          height:110,
          backgroundColor:'white',
          position:'absolute',
          top:480
      },
      totalAmount:{
        width:340,
        height:40,
        left:20,
        // borderWidth:1,
        // borderColor:'red',
    display:'flex',
justifyContent:'space-around',
alignItems:'center',
},
btnText:{
          color:'black',
fontSize:22,
lineHeight:22
      },
      btnCheckout:{
          width:375,
          height:40,
          left:10,
        //   borderColor:'orange',
        //   borderWidth:2,
      },
      btn:{
          width:375,
          height:40,
          backgroundColor:'orange',
            textAlign:'center',
            display:'flex',
            alignItems:'center'
      },
      btnText2:{
          color:'white',
        //   left:120,
          top:3,
          fontSize:22
      }
})
