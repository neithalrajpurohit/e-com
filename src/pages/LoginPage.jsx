import {Link,useNavigate} from "react-router-dom";
import { useAuth } from "../context/auth-context";

export const Login = () => {
    let navigate=useNavigate();
const {setEmail,setPassword,setLogin}=useAuth();
    function clickHandler(){
        setLogin(true);
        navigate("/");
    }
    return(
        <div>
        <div className="style-login">
            <h1>Doodle-com</h1>
            <p style={{color:"grey",opacity:"100%"}}>Login to Doodle-com </p>
            <input className="input-login" type="text" placeholder="Enter your email" onChange={(e)=>setEmail(e.target.value)}/>
            <div>
            <input  className="input-login" type="text" placeholder="Enter your password" onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
            <button className="login-btn" onClick={clickHandler} >Login</button>
            </div>
            <p> New user ? <Link style={{textDecoration:"none"}} to= "/signup">Signup</Link> </p>
  
        </div>

        </div>
    )
}