import auth from '@react-native-firebase/auth';

export async function signUpUser(email: string, password: any): Promise<any> {
  return await auth().createUserWithEmailAndPassword(email, password);
}

export async function signInUser(email: string, password: any) {
  return await auth().signInWithEmailAndPassword(email, password);
}

export async function logOutUser() {
  return await auth().signOut();
}