import React,{useState} from 'react'
import { View, Text,TouchableOpacity,StyleSheet,Image,TextInput} from 'react-native'
import back1 from '../assets/back1.png'
import call from '../assets/call.png'
import lock from '../assets/lock.png'
import btngo from '../assets/btngo.png'
const Login = ({navigation})=> {

    const [phno,setPhno] = useState(0);
    const [pass,setPass] = useState('');

    const handleForgot = ()=>{

    }


    return (
        <View style={styles.container}>
            <View style={styles.headercontainer}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image style={styles.backimage} source={back1}></Image>
                </TouchableOpacity>
                <View style={styles.headertxtcontainer}>
                    <Text style={styles.headertxt}>ANANT SEWA GROUP</Text>
                </View>
            </View>
            <View style={styles.bottomcontainer}>
                <View>
                    <Text style={styles.txt1}>LOGIN</Text>
                    <Text style={styles.txt2}>to continue with us</Text>
                </View>
                <View style={styles.inputcontainer}>
                    <Image source={call}></Image>
                    <Text style={styles.txt3}>Mobile Number</Text>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={phno}
                    onChangeText={(i)=>setPhno(i)}>
                    </TextInput>
                </View>

                <View style={styles.inputcontainer}>
                    <Image source={lock}></Image>
                    <Text style={styles.txt3}>Password</Text>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    // keyboardType="numeric"
                    secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={pass}
                    onChangeText={(i)=>setPass(i)}>
                    </TextInput>
                </View>

                <View style={styles.forgottxtxontainer}>
                    <TouchableOpacity onPress={()=>{handleForgot}}>
                        <Text style={styles.forgottxt}>Forgot ?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.btngocontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('Welcome')}>
                        <Image style={styles.btnimage} source={btngo}></Image>
                    </TouchableOpacity>
                </View>

            </View>
        </View>
    )
}



export default Login


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#23287D'
    },
    headercontainer:{
        flexDirection:'row',
        // paddingVertical:40,
        flex:.10
    },
    backimage:{
        margin:15
    },
    headertxt:{
        color:'#FFFFFF',
        fontSize:18,
        fontFamily:'Roboto-Regular'
    },
    headertxtcontainer:{
        justifyContent:'center',
        alignItems:'center',
        width:'80%'
    },
    bottomcontainer:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        height:'100%',
        // alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:1
    },
    txt1:{
        fontWeight:'bold',
        fontSize:22,
        fontFamily:'Roboto-Regular',
        marginTop:15,
        color:"#23287D",
        alignSelf:'center'
    },
    txt2:{
        fontWeight:'bold',
        fontSize:12,
        fontFamily:'Roboto-Regular',
        marginTop:10,
        color:"#2C3A99",
        alignSelf:'center'
    },
    inputcontainer:{
        marginTop:30,
        flexDirection:'row',
        marginLeft:38  
    },
    txt3:{
        fontSize:16,
        fontWeight:'bold',
        color:"#2C3A99",
        marginLeft:15,
        fontFamily:'Roboto-Regular',

    },
    valuecontainer:{
        justifyContent:'center',
        // alignItems:'center',
        marginLeft:38
    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:16,
        borderBottomColor:"#2C3A99",
        borderBottomWidth:2,
        width:'80%',
        color:'#B1BABB'
    },    
    forgottxtxontainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    forgottxt:{
        fontSize:16,
        fontWeight:'bold',
        color:"#2C3A99",
        marginRight:15,
        marginTop:15,
        fontFamily:'Roboto-Regular',
    },
    btngocontainer:{
        width:'100%',
        flexDirection:'row',
        justifyContent:'flex-end',
        marginTop:10
    },
    btnimage:{
        margin:20
    }  
})




















