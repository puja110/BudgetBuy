import React, { useState }  from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,

  ImageBackground,
  Image,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons'

export default function MyFavourites({ navigation }){

    return(
        <ScrollView style={styles.container}>
            <View style={{marginTop:60,paddingLeft:300,}}>
            <TouchableOpacity>
            <Ionicons name="mail" size={32} color="orange" />
            </TouchableOpacity>
            </View>
            <View style={styles.headContainer}>
            <Text style={styles.heading}>Favourites</Text>
            </View>
                <View>
                    <View style={styles.box}>
                        <View style={styles.productImage} >
                        </View>
                        <View style={styles.list}>
                        <Text style={{fontSize:15,fontWeight:'bold',}}>Jabra Wireless Earbuds</Text>
                        <Text style={{fontSize:12,color:'#c68ca3'}}>03 May 2021</Text>
                        <Text style={{fontSize:12,color:'#17858f'}}>CAD $19.00</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                        <Ionicons name="heart" size={32} color="red"/>
                        </View>
                </View>
                <View style={styles.box}>
                        <View style={styles.productImage} >
                        </View>
                        <View style={styles.list}>
                        <Text style={{fontSize:15,fontWeight:'bold',}}>Macbook Air</Text>
                        <Text style={{fontSize:12,color:'#c68ca3'}}>20 Apr 2021</Text>
                        <Text style={{fontSize:12,color:'#17858f'}}>CAD $350.00</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                        <Ionicons name="heart" size={32} color="red"/>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.productImage} >
                        </View>
                        <View style={styles.list}>
                        <Text style={{fontSize:15,fontWeight:'bold',}}>Amazon Alexa</Text>
                        <Text style={{fontSize:12,color:'#c68ca3'}}>14 Apr 2021</Text>
                        <Text style={{fontSize:12,color:'#17858f'}}>CAD $9.00</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                        <Ionicons name="heart" size={32} color="red"/>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.productImage} >
                        </View>
                        <View style={styles.list}>
                        <Text style={{fontSize:15,fontWeight:'bold',}}>LG Monitor</Text>
                        <Text style={{fontSize:12,color:'#c68ca3'}}>13 Apr 2021</Text>
                        <Text style={{fontSize:12,color:'#17858f'}}>CAD $90.00</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                        <Ionicons name="heart" size={32} color="red"/>
                        </View>
                    </View>
                    <View style={styles.box}>
                        <View style={styles.productImage} >
                        </View>
                        <View style={styles.list}>
                        <Text style={{fontSize:15,fontWeight:'bold',}}>Google Home Mini</Text>
                        <Text style={{fontSize:12,color:'#c68ca3'}}>12 Apr 2021</Text>
                        <Text style={{fontSize:12,color:'#17858f'}}>CAD $12.00</Text>
                        </View>
                        <View style={{flexDirection:'column-reverse'}}>
                        <Ionicons name="heart" size={32} color="red"/>
                        </View>
                    </View>
            </View>
        </ScrollView>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:25
    },
    headContainer:{
        marginTop: 15,
        marginLeft:20,
    },
    imageBackground: {
        width: "100%", 
        height: "100%", 
      },
      productImage:{
        backgroundColor:'#c4c4c4',
        borderRadius:10,
        height:100,
        width:125,
        padding:10,
      },
    heading:{
        fontSize:25,
        fontWeight:"bold",
        marginBottom:10,
        height:"auto"
    },
    box:{
        backgroundColor:'#ffeed5',
        borderRadius:15,
        flexDirection:"row",
        padding:15,
        paddingBottom:10,
        paddingTop:10,
        margin:20,
        position:'relative'
    },
    list:{
        marginLeft:5,
        padding:5,
        justifyContent:'space-evenly',
        width:175
    }
})
