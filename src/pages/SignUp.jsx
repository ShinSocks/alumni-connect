import React from "react";
import {db} from "../firebase.js"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth"
import {useNavigate} from "react-router-dom"
import {BsPerson} from "react-icons/bs"
import {SiOpenaccess} from "react-icons/si"
import {AiOutlineMail, AiOutlineLock, AiFillEye, AiFillEyeInvisible} from 'react-icons/ai'

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    accessCode: ""
  });

  const {firstName, email, password, accessCode} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  function onSubmit(e){
    e.preventDefault()

    try{
      const auth = getAuth
      const userCredential = createUserWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      console.log(user)
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className = "bg-slate-200 min-h-screen relative">
      <div className = "bg-slate-500 w-[28%] ml-[36.5%] mt-48 absolute h-[40%] active: shadow-lg ">
        <div>
          <img src = {require('../images/UCC.png')} alt="UCC Logo" className = "h-16 m-auto py-2"/>
        </div>
        <div className = "bg-slate-400 h-[100%] pt-[6%]">
          <div class="flex flex-col items-center justify-center">
              <form className = "mt-5 w-[100%]" onSubmit={onSubmit}>
                <ul className = "w-[100%]">
                  <li className = "w-[100%]"> 
                    <BsPerson className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="firstName" placeholder="Name" id="firstName" value={firstName} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-7 h-2 border border-gray-200  mb-4 active: shadow-sm"/>
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
