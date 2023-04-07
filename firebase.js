// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth,signInWithPopup } from "firebase/auth";
 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3B9IY13slXmHPevFNKeECO5mdmAUonC4",
  authDomain: "projecttest-2eb97.firebaseapp.com",
  projectId: "projecttest-2eb97",
  storageBucket: "projecttest-2eb97.appspot.com",
  messagingSenderId: "303465273517",
  appId: "1:303465273517:web:e2ce7422518590a7484e24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
export default auth ;

const provider=new GoogleAuthProvider();

export const signInWithGoogle=({navigation})=>{
  signInWithPopup (auth,provider)
  .then((result)=>{
    const name=result.user.displayName;
    const email=result.user.email;
    const profilePic=result.user.photoURL;

    localStorage.setItem("name",name);
    localStorage.setItem("email",email);
    localStorage.setItem("profilePic",profilePic);
    navigation.navigate("HomeScreen")
  })  
  .cath((error)=>{
      console.log(error);
  });
}