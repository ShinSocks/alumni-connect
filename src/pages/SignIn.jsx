export default function SignIn() {
  return (
    <div className = "bg-slate-500 w-[27%] m-auto mt-48">
      <div>
        <img src = {require('../images/UCC.png')} alt="UCC Logo" className = "h-16 m-auto py-2"/>
      </div>
      <div className = "bg-slate-400 h-48 pl-2 pt-3">
        Email Address
        <form>
          <ul>
            <li><input type = "text" placeholder="Email"></input></li>
            <li><input type = "text" placeholder="Password"></input></li>
            <li><input type = "submit"></input></li>
          </ul>
          
          
          
        </form>
      </div>
    </div>
  )
}
