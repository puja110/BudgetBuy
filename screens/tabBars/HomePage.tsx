import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomePage= () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>My Account</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>My Orders</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signOutButton}>
        <Text style={styles.signOutButtonText}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'grey',
    padding: 20,  
    margin: 10,
    borderRadius: 10,
    width:300,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  signOutButton: {
    backgroundColor: 'orange',
    padding: 15,  
    marginTop: 20,  
    borderRadius: 30,
    width:150,
  },
  signOutButtonText: {
    color: 'white',
    fontSize: 16,
   textAlign:'center'
  },
});

export default HomePage;
