import React from 'react';
import { StyleSheet, Text, View, Button, Image, TextInput, TouchableOpacity} from 'react-native';
import '../assets/images/logo.png'

 const SignIn =({navigation})=>{
     const navigate =()=>{
         navigation.navigate('signUp')
     }
     return(
        <View style={styles.mainView}>
         {/* <Text>SignIn</Text>
         <Button title= "Go to sign up" onPress={navigate}/> */}
         <View style={styles.TopView}>
         <Image style={styles.ImageStyle}source={require('../assets/images/logo.png')}/>
         </View>


        <View style={styles.ButtonView}>

        <Text style={styles.Heading}>
        Welcome {'\n'} Back
        </Text>

<View style={styles.FormView}> 

<TextInput placeholder={'Enter Email/Mobile Number*'} placeholderTextColor ={'#fff'} dataDetectorTypes={'phoneNumber'
} style={styles.TextInput}/>
<TextInput placeholder={'Enter Password*'} secureTextEntry={true} placeholderTextColor ={'#fff'} style={styles.TextInput}/>
 
 <TouchableOpacity style={styles.Button}>
 <Text style={styles.ButtonText}> Sign in</Text>
 </TouchableOpacity>


<TouchableOpacity style={styles.SignUpTextButton} onPress={navigate}>
 <Text style={styles.SignUpText}> Sign up</Text>
 </TouchableOpacity>

</View>


        </View>


        </View>
     )
 }


const styles = StyleSheet.create({
  mainView:{
    marginTop:40,
    height:'100%',
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor:'gray'
  },
  TopView:{
      width:'100%',
      height:'30%',
      backgroundColor:'#fff',
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  ButtonView:{
      width:'100%',
      height:'70%',
      backgroundColor:'#000',
      borderTopLeftRadius:30,
      borderTopRightRadius:30
  },
  ImageStyle:{
      width:'60%',
      resizeMode:'contain'
  },
  Heading:{
      color:'#fff',
      fontSize:36,
      fontWeight:'bold',
      marginTop:60,
      marginLeft:30
  },
  FormView:{
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center'

  },
  TextInput:{
      width:'90%',
      borderWidth:1,
      borderColor:'#fff',
      height:52,
      borderRadius:10,
      paddingLeft:8 ,
      marginTop:35,
      color:'#fff'


  },
  Button:{
      width:'90%',
      color:'#000',
      height:52,
      backgroundColor:'#fff',
      marginTop:25,
      display:'flex',
      justifyContent:'center',
      alignItems:'center'
  },
  ButtonText:{
      fontWeight:'bold',
      
      fontSize:18
  },
  SignUpText:{
      color:'gray'
  },
  SignUpTextButton:{
      display:'flex',
      width:'100%',
      alignItems:'center',
      marginTop:25
  }


});


 export default SignIn; 