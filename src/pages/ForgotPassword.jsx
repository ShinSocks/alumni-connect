import React from "react";

import {useNavigate} from "react-router-dom"


import {AiOutlineMail} from 'react-icons/ai'
import { sendPasswordResetEmail, getAuth } from "firebase/auth";
import { toast } from "react-toastify";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: ""
  });

  const {email} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }

  async function onSubmit(e){
    e.preventDefault()
    try {
      const auth = getAuth()
      await sendPasswordResetEmail(auth, email)
      toast.success("Email was sent");

    }catch(error){
      toast.error("Email does not exist")
      console.log(error)
    }
  }
  return (
    <div className = "bg-slate-200 relative h-[93.7vh] flex items-center justify-center">
      <div className = "bg-slate-500 w-[14cm] top-[15%] absolute h-[5cm] active: shadow-lg ">
        <div>
          <img src = {require('../images/UCC.png')} alt="UCC Logo" className = "h-16 m-auto py-2"/>
        </div>
        <div className = "bg-slate-400 h-[100%] pt-[4%]">
          <div class="flex flex-col items-center justify-center">
              <form className = "mt-5 w-[100%]" onSubmit = {onSubmit}>
                <ul className = "w-[100%]">
                  <li>
                    <AiOutlineMail className="absolute mt-[2.5%] ml-12 opacity-40"/>
                    <input  type="email" placeholder="Email address" id="email" value={email} onChange={onChange} class="text-sm text-gray-base w-[84%] ml-[7.8%] py-5 px-7 h-2 border border-gray-200  mb-4 active: shadow-sm" />
                  </li>
                </ul>
                  <button type="submit"class="bg-slate-800 w-[84%] h-10 rounded text-slate-50 hover:bg-slate-900 hover:shadow-lg active: shadow-lg transition duration-150 ease-in-out mt-[2%] ml-[7.8%]">
                      Send reset email
                  </button>
              </form> 
          </div>
        </div>
        <div className = "absolute ml-[2%] mt-[3%] flex">
          Don't have an account? 
          <div className = "ml-2 cursor-pointer text-sky-500 hover:text-slate-800 transition duration-150 ease-in-out" onClick={()=>navigate("/sign-up")}>Register</div>
        </div>
        <div className = "absolute ml-[75%] mt-[3%] flex">
          <div className = "ml-2 cursor-pointer text-sky-500 hover:text-slate-800 transition duration-150 ease-in-out mr-2" onClick={()=>navigate("/sign-in")}>Sign in</div>
          instead
        </div>
      </div>
    </div>
    
  )
}
