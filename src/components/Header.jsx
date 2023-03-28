import {useNavigate} from "react-router-dom"
import React from "react";

export default function Header() {
  const navigate = useNavigate();

  const [formData, setFormData] = React.useState({
    searchType: "",
    searchTerm: ""
  });

  const {searchType, searchTerm} = formData;
  function onChange(e){
    setFormData((prevState)=>({
      ...prevState,
      [e.target.id]: e.target.value
    }));
  }
   function onSubmit(e){
    e.preventDefault()
    try{
      if(searchType === "university"){
        navigate("/Schools")
      }

      else if(searchType === "student"){
        navigate("/search-student")
      }

    } catch(error){
    }
  }
  return (
    <div className = "bg-slate-800  shadow-2xl sticky top-0 z-50">
        <header className="flex justify-between items-center px-5 py-2 max-w-6x1 mx-auto">
            <div>
                <ul className="flex space-x-3">
                    <li><img src={require('../images/UCC.png')} alt = "UCC Logo" className = "h-11 cursor-pointer" onClick = {()=>navigate("/")}/></li>
                    <li><h1 className = "text-3xl text-slate-50">Connect</h1></li>
                </ul>
            </div>
            <div>
                <form className = "px-10" onSubmit = {onSubmit}>
                    <select  className = "bg-slate-500 rounded-l-sm px-3 w-25 h-9 text-slate-50 cursor-pointer" type="searchType" placeholder="searchType" id="searchType" value={searchType} onChange={onChange}>
                        <option value="region">Region</option>
                        <option value="university">Universities</option>
                        <option value="student">Students</option>
                    </select>
                    <input type="searchTerm" placeholder="Search" id="searchTerm" value={searchTerm} onChange={onChange} className = "bg-slate-500 rounded-r-sm placeholder-white px-3 w-96 h-9"></input>
                    <input type = "submit" className = "text-slate-50 ml-3 cursor-pointer hover:text-slate-500" ></input>
                </form>
            </div>
            <div className = "text-slate-50 hover:text-slate-500 cursor-pointer" onClick = {()=>navigate("/sign-in")}>
                <ul className="flex space-x-1">
                    <li><img src={require('../images/lockIcon.png')} alt = "lock icon" className = "h-7"/></li>
                    <li>Login</li>
                </ul>
            </div>
        </header>
    </div>
  )
}