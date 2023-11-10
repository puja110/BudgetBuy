import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
 
const EditProfileView = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phnNum, setphnNum] = useState('');
  const [Address, setAddress] = useState('');
  const [avatar, setAvatar] = useState('https://reactjs.org/logo-og.png');

  useEffect(() => {
    setName('Aprilia Honda')
    setEmail('AH@gmail.com')
    setphnNum('00000000')
    setAddress('Barrie')
    setAvatar('https://reactjs.org/logo-og.png')
  }, []);

  const handleSubmit = () => {
    // Handle form submission
  }
 
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={{ uri: avatar }}
        />
        <TouchableOpacity style={styles.changeAvatarButton} onPress={() => {/* open image picker */}}>
          <Text style={styles.changeAvatarButtonText}>Change Avatar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.form}>
        <Text style={styles.label}>Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <Text style={styles.label}>Phone Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Phone number"
          value={phnNum}
          onChangeText={setphnNum}
        />
        <Text style={styles.label}>Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Address"
          value={Address}
          onChangeText={setAddress}
        />
       
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Update</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start', // Align to the left
    justifyContent: 'flex-start', // Align to the top
    padding: 20, // Adding padding to the container
  },
  avatarContainer: {
    width: '100%',
    flexDirection: 'column', // Display the avatar and button side by side
    alignItems: 'center', // Align elements in the center vertically
  },
  avatar: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginTop: 40
  },
  changeAvatarButton: {
    padding: 20,
  },
  changeAvatarButtonText: {
    color: 'orange', // Changed the button text color to orange
    fontSize: 20,
  },
  form: {
    width: '100%', // Made the form width 100% of the screen
  },
  label: {
    paddingVertical: 10
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
    marginBottom: 10, // Added some margin at the bottom of each input
  },
  button: {
    backgroundColor: 'orange', // Changed the button background color to orange
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 12
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center'
  },
});
 
export default EditProfileView;
 