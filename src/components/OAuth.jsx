import React from 'react'
import  {FcGoogle} from "react-icons/fc"
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {doc, getDoc, serverTimestamp, setDoc} from "firebase/firestore"
import {toast} from "react-toastify"
import {db} from "../firebase.js"

export default function OAuth() {
  async function onGoogleClick(){
    try{
      const auth = getAuth();
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      const user = result.user 

      //Check for User

      const docRef = doc(db, "users", user.uid)
      const docSnap = await getDoc(docRef)

      if(!docSnap.exists()){
        await setDoc(docRef, {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp()
        })
      }

      console.log(user) 
    } catch(error){
      toast.error("Could not authorize with Google")
      console.log(error)
    }
  }
  return (
    <button type = "button" onClick = {onGoogleClick}>
        <FcGoogle className = "text-3xl"/>
    </button>
  )
}
