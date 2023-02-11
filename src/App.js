import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AlumniPage from "./pages/AlumniPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Schools from "./pages/Schools";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}/> 
        <Route path="/alumni-page" element = {<AlumniPage/>}/> 
        <Route path="/sign-in" element = {<SignIn/>}/> 
        <Route path="/sign-up" element = {<SignUp/>}/> 
        <Route path="/forgot-password" element = {<ForgotPassword/>}/> 
        <Route path="/schools" element = {<Schools/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
