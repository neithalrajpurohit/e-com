import {Link, useNavigate} from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const Signup=()=>{
const {setEmail,setPassword,setLogin}=useAuth();
let navigate=useNavigate();
function click(){
    setLogin(true);
    navigate("/")
}
    return(
        <div className="auth-container">
            <form className="signup-cmp">
            <h1>Doodle-com</h1>
            <p className="para-style">Sign up to shop</p>
                <div>
                <input className="input-style" type="text" placeholder="Enter your name" onChange={(e)=>setEmail(e.target.value)}/>
               </div>
               <div>
                <input className="input-style" type="text" placeholder="Enter your Username" onChange={(e)=>setPassword(e.target.value)}/>
               </div>
               <div>
                <input className="input-style" type="text" placeholder="Enter your email"/>
               </div>
               <div>
                <input className="input-style" type="text" placeholder="Enter your password"/>
               </div>
               <div>
                <button className="signup-btn" onClick={click}>Sign Up </button>
               </div>
                <p> Already have an account?<Link style={{textDecoration:"none"}} to="/login">Sign in</Link></p>
            </form>
        </div>
    )
}