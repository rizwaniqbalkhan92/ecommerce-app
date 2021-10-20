import React from 'react'
import { FlatList, StyleSheet,Image, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import { style } from 'styled-system'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
const differentCategories = () => {

    const data=[
        {   img:img1, productName:'T-Shirts Shirts Shirts  '},
        {   img:img2, productName:'T-Shirts Shirts Shirts '},
        {   img:img3, productName:'T-Shirts Shirts Shirts '},
        {   img:img4, productName:'T-Shirts Shirts Shirts '},
        {   img:img5, productName:'T-Shirts Shirts Shirts '},
        {   img:img6, productName:'T-Shirts Shirts Shirts '},
    ]


// const {width}=Dimensions.get("window")
// const height=width*100/90
    return (
        <View>
{/* <Image source={img1} style={{width:92,height:92}}  resizeMode='contain' /> */}
            {
   
   
                <FlatList horizontal data={data} renderItem={({item})=>(
<TouchableOpacity onPress={()=>alert('HEllo')}>

<View style={styles.imgCon}>
<Text style={styles.productName}>{item.productName}</Text>
<Image source={item.img} style={{width:88,height:88}}  resizeMode='contain' ></Image>
</View>
</TouchableOpacity>
                )} />
            }
        </View>
    )
}

export default differentCategories

const styles = StyleSheet.create({
    productName:{
        position:'absolute',
        bottom:10,
        color:'#ffffff',
        zIndex:1
    },
    imgCon :{width:92,height:92,marginTop:4,
        borderWidth:2,
        borderColor:'orange',
        marginBottom:4,marginRight:4,marginLeft:4,display:'flex',flexDirection:'column'}
})
