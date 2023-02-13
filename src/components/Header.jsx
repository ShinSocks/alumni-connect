import {useNavigate} from "react-router-dom"
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className = "bg-slate-800 border-b shadow-2xl sticky top-0">
        <header className="flex justify-between items-center px-5 py-2 max-w-6x1 mx-auto">
            <div>
                <ul className="flex space-x-3">
                    <li><img src={require('../images/UCC.png')} alt = "UCC Logo" className = "h-11 cursor-pointer" onClick = {()=>navigate("/")}/></li>
                    <li><h1 className = "text-3xl text-slate-50">Connect</h1></li>
                </ul>
                
            </div>
            <div>
                <form>
                    <input type = "text" className = "bg-slate-500 rounded-sm placeholder-white px-3 w-96 h-9" placeholder = "Search"></input>
                    <input type = "submit"></input>
                </form>
            </div>
            <div className = "text-slate-50">
                login
            </div>
        </header>
    </div>
  )
}
