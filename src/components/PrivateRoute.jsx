import {Navigate } from "react-router-dom";
import{useAuth} from "../context/auth-context";

export function PrivateRoute({children}) {
    let { login } = useAuth();

    return login ? children :<Navigate to ="/login"/>
        
    

    
}