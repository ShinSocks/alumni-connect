import React from 'react'
import  {FcGoogle} from "react-icons/fc"
import {getAuth, signInWithPopup, GoogleAuthProvider} from "firebase/auth"
import {doc, getDoc} from "firebase/firestore"
import {toast} from "react-toastify"
import {db} from "../firebase.js"
import {useNavigate} from "react-router-dom"

export default function OAuth() {
  const navigate = useNavigate()
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
        toast.error("Account does not exist")
      }

      else if(docSnap.exists()){
        toast.success("Log in successful")
        navigate("/")
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
