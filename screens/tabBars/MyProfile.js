import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons'

const MyProfile= ({ navigation }) => {
  return (
    <View style={styles.container}>
        <View style={styles.profileInfo}>
            <Image source={require("../../assets/goldIphone.png")} style={styles.avatarImage}/>
            <View>
                <Text style={styles.userName}>Harry Potter</Text>
                <Text>harry@gmail.com</Text>
            </View>
        </View>
        <TouchableOpacity style={styles.subContainer}>
            <Ionicons name="person" size={28} color="white"/>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>My Account</Text>
                <Text style={styles.subText}>Edit your details</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer}>
            <Ionicons name="star" size={28} color="white"/>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>My Orders</Text>
                <Text style={styles.subText}>View all your orders</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.subContainer}>
        <Ionicons name="settings" size={28} color="white"/>
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>Settings</Text>
                <Text style={styles.subText}>View settings</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signOutButton} onPress={()=> navigation.push('Login')}>
            <Text style={styles.signOutButtonText}>Sign Out</Text>
        </TouchableOpacity>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  subContainer: {
    flexDirection: 'row',
    backgroundColor: 'grey',
    padding: 20,  
    margin: 10,
    borderRadius: 10,
    width:300,
  },
  textContainer: {
    marginStart: 26
  },
  titleText: {
    color: 'white',
    fontSize: 18,
  },
  subText: {
    fontSize: 12,
    color: 'white'
  },
  signOutButton: {
    backgroundColor: 'orange',
    padding: 12,  
    marginTop: 20,  
    borderRadius: 30,
    paddingHorizontal: 26
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
   textAlign:'center'
  },
  profileInfo: {
    flexDirection: 'row', 
    width: '100%', 
    paddingHorizontal: 60, 
    paddingBottom: 40 
  },
  userName: {
    fontSize: 18, 
    fontWeight: 'bold',
    paddingBottom: 4
  },
  avatarImage:{
    backgroundColor:'#c4c4c4',
    borderRadius:10,
    height:60,
    width:60,
    borderRadius: 50,
    marginRight: 20
  }
});
 
export default MyProfile;