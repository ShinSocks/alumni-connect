import React from "react";
import OAuth from "../components/OAuth";
import {AiFillEyeInvisible, AiFillEye, AiOutlineMail, AiOutlineLock} from "react-icons/ai"
import {useNavigate} from "react-router-dom"
import {signInWithEmailAndPassword, auth, getAuth} from "firebase/auth";
import {toast} from "react-toastify";

export default function SignIn() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = React.useState(false);
  const [formData, setFormData] = React.useState({
    email: "",
    password: ""
  });

  const {email, password} = formData;
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
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      if(userCredential.user){
        navigate("/")
        toast.success("Sign in successful")
      }

    } catch(error){
      toast.error("Email or Password incorrect")
    }
  }

  return (
    <div className = "bg-slate-200 h-[93.7vh] relative flex items-center justify-center">
      <div className = "bg-slate-500 w-[14cm] absolute top-[15%] ">
        <div>
          <img src = {require('../images/UCC.png')} alt="UCC Logo" className = "h-16 m-auto py-2"/>
        </div>
        <div className = "bg-slate-400 h-48 active: shadow-lg">
          <div class="flex flex-col items-center justify-center">
              <form className = "mt-5" onSubmit={onSubmit}>
                  <AiOutlineMail className="absolute mt-[2.5%] ml-2 opacity-40"/>
                  <input  type="email" placeholder="Email" id="email" value={email} onChange={onChange} class="text-sm text-gray-base w-full mr-3 py-5 px-7 h-2 border border-gray-200  mb-2 active: shadow-sm" />
                  {showPassword ? (<AiFillEyeInvisible className = "absolute text-xl cursor-pointer ml-[85%] mt-3" onClick={()=>setShowPassword((prevState)=>!prevState)}/>): (<AiFillEye className = "absolute text-xl cursor-pointer ml-[85%] mt-3" onClick={()=>setShowPassword((prevState)=>!prevState)}/>)}
                  <AiOutlineLock className="absolute mt-[2.5%] ml-2 opacity-40"/>
                  <input  type={showPassword ? "text" : "password"} placeholder="Password" id="password" value={password} onChange={onChange} class="text-sm text-gray-base w-full mr-3 py-5 px-7 h-2 border border-gray-200  mb-2 active: shadow-sm" />
                  <button type="submit"class="bg-slate-800 w-[20%] h-10 rounded text-slate-50 hover:bg-slate-900 hover:shadow-lg active: shadow-lg transition duration-150 ease-in-out mt-[2%]">
                      Login
                  </button>
              </form> 
              <div class="bg-slate-200 w-[18%] h-10 rounded text-slate-50 pl-[5.9%] pt-1.5 absolute mt-[24%] mr-[27%] hover:bg-slate-300 cursor-pointer hover:shadow-lg active: shadow-lg transition duration-150 ease-in-out"><OAuth/></div>
              <div className = "absolute ml-[55%] mt-[19%] text-slate-black hover:text-slate-50 cursor-pointer transition duration-150 ease-in-out" onClick = {()=>navigate("/forgot-password")}>
                Forgot Password?
              </div>
          </div>
        </div>
        <div className = "bg-slate-200 pt-6 w-[100%]">
          <div className = "flex items-center justify-center">
            Don't have and account? 
          <div className = "ml-2 cursor-pointer text-sky-500 hover:text-slate-800 transition duration-150 ease-in-out" onClick={()=>navigate("/sign-up")}>Register</div>
      </div>
        </div>
      </div>
      
    </div>
    
  )
}
