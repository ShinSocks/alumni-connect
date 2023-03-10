import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AlumniPage from "./pages/AlumniPage";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ForgotPassword from "./pages/ForgotPassword";
import Schools from "./pages/Schools";
import Header from "./components/Header";
import ProfilePage from "./pages/ProfilePage";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element = {<Home/>}/> 
          <Route path="/alumni-page" element = {<AlumniPage/>}/> 
          <Route path="/sign-in" element = {<SignIn/>}/> 
          <Route path="/sign-up" element = {<SignUp/>}/> 
          <Route path="/forgot-password" element = {<ForgotPassword/>}/> 
          <Route path="/schools" element = {<Schools/>}/> 
          <Route path="/profile" element = {<ProfilePage/>}/> 
        </Routes>
      </Router>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        />
    </>
  );
}

export default App;
