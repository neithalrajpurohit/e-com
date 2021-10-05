
import {Link,useNavigate} from "react-router-dom";
export const Header =() => {
    const navigate=useNavigate();
    return(
        <div>
            <ul>
                <nav>
                    <h1>Cart page</h1>
<li>
    <Link to ="/">Home</Link>
</li>
<li>
<Link to ="/cart">Cart</Link>
</li>
<li>
<Link to ="/wishlist">Wishlist</Link>
</li>
<li>
<button onClick={()=>navigate("/Login")}>Login</button>
</li>
<li>
<button onClick={()=>navigate("/Signin")}>Sign in</button>
</li>
                </nav>{" "}
            </ul>
        </div>
    )
}