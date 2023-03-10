import React from "react";
import {db} from "../firebase.js"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import {BsPerson} from "react-icons/bs"
import {SiOpenaccess} from "react-icons/si"
import {AiOutlineMail, AiOutlineLock, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import {toast} from "react-toastify";


export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    accessCode: ""
  });

  const {name, email, password, accessCode} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  async function onSubmit(e){
    e.preventDefault()

    try{
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      
      const user = userCredential.user
      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp();

      await setDoc(doc(db, "users", user.uid), formDataCopy)
      toast.success("Sign up was successful")
      navigate("/")
      console.log(user);
    }catch(error){
      toast.error("Something went wrong")
      console.log(error)
    }
  }

  return (
    <div className = "bg-slate-200 h-[93.7vh] relative flex items-center justify-center">
      <div className = "bg-slate-500 w-[14cm] top-[15%] absolute h-[10cm] active: shadow-lg ">
        <div>
          <img src = {require('../images/UCC.png')} alt="UCC Logo" className = "h-16 m-auto py-2"/>
        </div>
        <div className = "bg-slate-400 h-[100%] pt-[6%]">
          <div class="flex flex-col items-center justify-center">
              <form className = "mt-5 w-[100%]" onSubmit={onSubmit}>
                <ul className = "w-[100%]">
                  <li className = "w-[100%]"> 
                    <BsPerson className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="name" placeholder="name" id="name" value={name} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-7 h-2 border border-gray-200  mb-4 active: shadow-sm"/>
                  </li>
                  <li>
                    <AiOutlineMail className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="email" placeholder="Email address" id="email" value={email} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-7 h-2 border border-gray-200  mb-4 active: shadow-sm" />
                  </li>
                  <li>
                  {showPassword ? (<AiFillEyeInvisible className = "absolute text-xl cursor-pointer ml-[84%] mt-3" onClick={()=>setShowPassword((prevState)=>!prevState)}/>): (<AiFillEye className = "absolute text-xl cursor-pointer ml-[84%] mt-3" onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
                    <AiOutlineLock className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type={showPassword ? "text" : "password"} placeholder="Password" id="password" value={password} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-7 h-2 border border-gray-200  mb-4 active: shadow-sm" />
                  </li>
                  <li>
                    <SiOpenaccess className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="accessCode" placeholder="Access Code" id="accessCode" value={accessCode} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-7 h-2 border border-gray-200  mb-4 active: shadow-sm" />
                  </li>
                </ul>
                  <button type="submit"class="bg-slate-800 w-[84%] h-10 rounded text-slate-50 hover:bg-slate-900 hover:shadow-lg active: shadow-lg transition duration-150 ease-in-out mt-[2%] ml-[7.8%]">
                      Sign Up
                  </button>
              </form> 
          </div>
        </div>
        <div className = "absolute ml-[27%] mt-[5%] flex">
          Already have an account? 
          <div className = "ml-2 cursor-pointer text-sky-500 hover:text-slate-800 transition duration-150 ease-in-out" onClick={()=>navigate("/sign-in")}>Sign In</div>
        </div>
      </div>
    </div>
    
  )
}
