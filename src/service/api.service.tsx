import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';

export async function signUpUser(email: string, password: any, fullName: string, phoneNumber: string): Promise<any> {
  try {
    // Create user with email and password
    const userCredential = await auth().createUserWithEmailAndPassword(email, password);

    // Save additional user data to Firebase Realtime Database
    await database().ref('users/' + userCredential.user.uid).set({
      fullName: fullName,
      phoneNumber: phoneNumber,
      email: email,
    });

    return userCredential;
  } catch (error) {
    throw error;
  }
}

export async function signInUser(email: string, password: any) {
  return await auth().signInWithEmailAndPassword(email, password);
}

export async function logOutUser() {
  return await auth().signOut();
}