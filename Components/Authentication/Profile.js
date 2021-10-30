import React from 'react'
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import img2  from '../images/img2.jpg'

const Profile = () => {
    return (
        <View style={styles.profile}>
        <View style={styles.profile2}>

            <Text style={styles.profileText} > My Profile</Text>
        </View>
        <View style={styles.profileImgBox}>
        <View style={styles.textPro}>

        <Image source={img2}  resizeMode='cover' style={styles.img} />
        </View>
        <View style={styles.textPro2}>

        <Text style={styles.name}>Rizwan</Text>
        <Text style={styles.email}>rizwan@gmail.com</Text>
        </View>

        </View>
        <View style={styles.box1}>
        <TouchableOpacity>
        <Text style={styles.boxText1}>Shipping Address</Text>
        <Text style={styles.boxText2}></Text>
        </TouchableOpacity>
        </View>
        <View style={styles.box2}>
        <TouchableOpacity>
        <Text style={styles.boxText1}>Shipping Address</Text>
        <Text style={styles.boxText2}></Text>
        </TouchableOpacity>
        </View>
        <View style={styles.box2}>
        <TouchableOpacity>
        <Text style={styles.boxText1}>Shipping Address</Text>
        <Text style={styles.boxText2}></Text>
        </TouchableOpacity>
        </View>
        <View style={styles.box2}>
        <TouchableOpacity>
        <Text style={styles.boxText1}>Shipping Address</Text>
        <Text style={styles.boxText2}></Text>
       </TouchableOpacity>
        </View>
        
        
        
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profile:{
        backgroundColor:'white'
    },
    name:{
        color:'black',
        fontSize:18,
        lineHeight:22,
        
    },
    email:{
        fontSize:16,
        lineHeight:18,
        color:'black',
        top:3
    },
    textPro2:{
        padding:5,
        right:140,
        top:10
    },
    profileText:{
        fontSize:34,
        fontWeight:'800',
        color:'black',
        top:40,
        bottom:50

    },
    profile2:{
        height:66,
        backgroundColor:'white',
        
    },
    textPro:{
// borderColor:'red',
// borderWidth:1,
height:70,
left:20
    },
    profileImgBox:{
        display:'flex',
        justifyContent:'space-between',
        flexDirection:'row',
        height:70,
        // borderWidth:1,
        // borderColor:'red',
        top:40,
    },
  
    img:{
        width:64,
        height:64,
        borderRadius:100,
        top:2,
        bottom:10
        // borderWidth:1,
        // borderColor:'orange'
    
    },
    box1:{
        borderColor:'#F2F2F2',
        borderWidth:1,
    height:75 ,
marginTop:41 },
    box2:{
        borderColor:'#F2F2F2',
        borderWidth:1,
    height:75 ,
marginTop:2   },
boxText1:{
    color:'black',
    lineHeight:22,
    left:16,
    top:17,
    fontSize:15
}
    
})
