import React,{useState} from 'react'
import { View, Text,StyleSheet,TouchableOpacity , TextInput} from 'react-native'
import { Button, ButtonGroup } from 'native-base';
import { AsyncStorage } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const SellerLogin = ({navigation}) => {
  const [email,setEmail]=useState('')
  const [password,setpassword]=useState('')
  
  
  const signIn=(e)=>{
    e.preventDefault()


    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigation.navigate('DrawerSeller')
        alert('Successfully Login')
        userdata={
            email:user.email,
            uid:user.uid
          }
        // localStorage.setItem({"seller":sellerdata})
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert('Error',errorMessage)
      });

  }
    return (
        <View>
           <View style={styles.signUp1}>

<View style={styles.signUp1inner}>
  <Text style={styles.textSignUp}>Seller Login</Text>
  <TextInput placeholder='Email' onChangeText={e=>setEmail(e)} style={styles.input1} />
  <TextInput placeholder='Password' onChangeText={e=>setpassword(e)} style={styles.input1} />
  {/* <TextInput placeholder='Email'  style={styles.input1} /> */}
  <TouchableOpacity  onPress={()=>navigation.navigate('sellerSignUp')} >
  <Text  style={styles.alreadyAccount}>Are you new Seller?</Text>

  </TouchableOpacity>
<TouchableOpacity style={styles.btn}onPress={signIn}>
    <Text style={styles.btnText}>Login In</Text>
</TouchableOpacity>

</View>
</View>
        </View>
    )
}
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
    signUp1:{
      width:375,
      height:140,
      color:'#FFFFFF',
  
    },
    signUp1inner:{
  width:127,
  height:41,
  top:99,
  left:7
    },
    textSignUp:{
      fontSize:34,
      fontWeight:'800',
      lineHeight:40.3,
      color:'#333333'
    },
    input1:{
      height: 64,
  width: 343,
  left:20,
  top: 73,
  borderRadius: 0,
marginBottom:8,



backgroundColor:'#F2F2F2'
  
    },
    alreadyAccount:{
// position:'relative',
// left:190,
// top:75

position: 'absolute',
width: 161,
height: 20,
left: 170,
top: 260,

/* Body / Medium 14 */

fontFamily: 'SF UI Display',
fontStyle: 'normal',
fontWeight: '500',
fontSize: 14,
lineHeight: 20,
/* identical to box height, or 143% */

textAlign: 'right',

/* Black */

color: '#333333'
    },
    btn:{
        width:343,
        height:40,
        backgroundColor:'#FF8C00',
        position: 'relative',
left: 20,
right: 0,
top: 133,
// bottom: 10,

    },
    btnText:{
        position: 'relative',
left: 10,

top: 10,
bottom: 25,

fontFamily: 'SF UI Display',
fontStyle: 'normal',
fontWeight: 'bold',
fontSize: 16,
lineHeight: 20,
/* identical to box height, or 125% */

display: 'flex',
alignItems: 'center',
textAlign: 'center',

color: '#FFFFFF'
    }
  });
  
export default SellerLogin
