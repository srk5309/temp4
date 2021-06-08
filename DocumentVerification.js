import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet,TouchableOpacity,TextInput,Image } from 'react-native'
import back1 from '../assets/back1.png'
import * as Progress from 'react-native-progress';
import acld from '../assets/acld.png'
import pcld from '../assets/pcld.png'
import dlld from '../assets/dlld.png'
import { spring } from 'react-native-reanimated';


const DocumentVerification = ({navigation})=> {

    const [aadharcard,setAadharCard] = useState(0);
    const [pancard,setPanCard] = useState(0);
    const [drivinglicense,setDrivingLicense] = useState(0)

    const [changerogress,setChangeProgress] =  useState(0.01);

    useEffect(()=>{
        
        setTimeout(function(){
            
            setChangeProgress(0.25)
        }, 1000); 
    },[])



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
                <View style={styles.progresscontainer}>
                    <Progress.Bar progress={changerogress} width={300} color={'#23287D'} 
                    ></Progress.Bar>                
                </View>
                <View style={styles.headingcontainer}>
                    <Text style={styles.headingtxt1}>DOCUMENT VERIFICATION</Text>
                    <Text style={styles.headingtxt2}>please fill details whatever applicable</Text>
                </View>

                <View style={styles.bottomtxtcontainer}>
                    
                    <Text style={styles.bottomtxt1}>Aadhar Card Number</Text>
                    <Image source={acld}></Image>
                </View>
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={aadharcard}
                    onChangeText={(i)=>setAadharCard(i)}>
                    </TextInput>
                </View>





                <View style={styles.bottomtxtcontainer}>
                    
                    <Text style={styles.bottomtxt1}>Pan Card Number</Text>
                    <Image source={pcld}></Image>
                </View> 
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={pancard}
                    onChangeText={(i)=>setPanCard(i)}>
                    </TextInput>
                </View>




                <View style={styles.bottomtxtcontainer}> 
                    <Text style={styles.bottomtxt1}>Driving License ID</Text>
                    <Image source={dlld}></Image>
                </View> 
                <View style={styles.valuecontainer}>
                    <TextInput style={styles.inuputval}
                    keyboardType="numeric"
                    // secureTextEntry
                    // placeholder="Name"
                    placeholderTextColor="#B1BABB"
                    value={drivinglicense}
                    onChangeText={(i)=>setDrivingLicense(i)}>
                    </TextInput>
                </View>


                <View style={styles.nxtbtncontainer}>
                    <TouchableOpacity onPress={()=>navigation.navigate('OtherDetails')}>
                        <Text style={styles.nxttxt}>NEXT</Text>
                    </TouchableOpacity>
                </View>



            </View>
        </View>
    )
}

export default DocumentVerification



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
        width:'80%',
        
    },
    bottomcontainer:{
        width:'100%',
        backgroundColor:'#FFFFFF',
        // height:'100%',
        // alignItems:'center',
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        flex:0.90,
        justifyContent:'flex-start'
    },

    progresscontainer:{
        justifyContent:'center',
        width:'100%',
        alignItems:'center',
        height:'10%',
    },

    headingcontainer:{
        // justifyContent:'center',
        width:'100%',
        alignItems:'center',
        height:'16%',
        marginBottom:20,
    },
    headingtxt1:{
        fontSize:22,
        color:'#2C3A99',
        fontWeight:'bold'
    },
    headingtxt2:{
        fontSize:12,
        color:'#2C3A99'
    },









    bottomtxtcontainer:{
        flexDirection:'row',
        marginLeft:38,
        justifyContent:'space-between',
        width:'80%'
    },
    bottomtxt1:{
        marginLeft:15,
        color:'#2C3A99'
    
    },
    valuecontainer:{
        // justifyContent:'center',
        alignItems:'center',
        // marginLeft:15,
        marginBottom:15,
        
    },
    inuputval:{
        fontFamily:'Roboto-Regular',
        fontSize:16,
        borderBottomColor:"#2C3A99",
        borderBottomWidth:2,
        width:'80%',
        color:'#B1BABB',
        width:'80%'
    },




    nxtbtncontainer:{
        justifyContent:'flex-end',
        width:'90%',
        flexDirection:'row',
        alignItems:'flex-end',
        // backgroundColor:'yellow',
        height:"15%",


    },
    nxttxt:{
        fontFamily:'Roboto-Regular',
        color:'#FFFFFF',
        backgroundColor:'#F19922',
        fontSize:18,
        borderColor:'#F19922',
        // marginRight:10,
        padding:8,
        paddingHorizontal:28,
        borderRadius:20,
        // margin:10,
        // marginTop:20
    }
})





















