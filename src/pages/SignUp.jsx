import React from "react";
import OAuth from "../components/OAuth";
import {useNavigate} from "react-router-dom"
import {BsPerson} from 'react-icons/bs'
import {AiOutlineMail, AiOutlineLock} from 'react-icons/ai'

export default function SignUp() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    password: "",
    accessCode: ""
  });

  const {firstName, lastName, email, password, accessCode} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  return (
    <div className = "bg-slate-200 min-h-screen relative">
      <div className = "bg-slate-500 w-[28%] ml-[36.5%] mt-48 absolute h-[50%] active: shadow-lg ">
        <div>
          <img src = {require('../images/UCC.png')} alt="UCC Logo" className = "h-16 m-auto py-2"/>
        </div>
        <div className = "bg-slate-400 h-[100%] pt-[6%]">
          <div class="flex flex-col items-center justify-center">
              <form className = "mt-5 w-[100%]">
                <ul className = "w-[100%]">
                  <li className = "w-[100%]"> 
                    <BsPerson className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="firstName" placeholder="   Name" id="firstName" value={firstName} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-4 h-2 border border-gray-200  mb-4 active: shadow-sm"/>
                  </li>
                  <li>
                    <AiOutlineMail className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="email" placeholder="   Email address" id="email" value={email} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-4 h-2 border border-gray-200  mb-4 active: shadow-sm" />
                  </li>
                  <li>
                    <AiOutlineLock className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type={showPassword ? "text" : "password"} placeholder="   Password" id="password" value={password} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-4 h-2 border border-gray-200  mb-4 active: shadow-sm" />
                  </li>
                </ul>
                  <button type="submit"class="bg-slate-800 w-[20%] h-10 rounded text-slate-50 hover:bg-slate-900 hover:shadow-lg active: shadow-lg transition duration-150 ease-in-out mt-[2%]">
                      Sign Up
                  </button>
              </form> 
          </div>
        </div>
      </div>
    </div>
    
  )
}
