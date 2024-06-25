import React, { useState } from "react";
import "./App.css"

const App = () => {
    const [action,setAction] = useState("signup")

    return(
        
        <div className="mainbody">
            
        <form className="contantdiv" >
            <h1 className="myacctitle">My account</h1>
            
            <div className="spandiv">
            <span className={action==="signin"?"signinbox gray": "signinbox"} onClick={() => {setAction("signin")}}>Sign in</span>
            
            <span className={action === "signup"?"creatacc gray":"creatacc"} onClick={() => {setAction("signup")}}>Create An Account</span></div>

            
            {action === "signin"?<div></div>:<div>
            <input type="text" 
                
                name="username"
                className="inputField"
                placeholder="Username"
                
            />
            </div>}
                
            <input type="email" 
                name = "email"
                
            className="inputField" placeholder="Username or email address " />
                            
            <br />
            <input type="password"
                name="password"
               
            className="inputFieldpassword" placeholder="password" />
            <br />
            
            <input type="checkbox" name="checkbox1" id="checkbox1" className="checkbox"/>
            {action === "signin"?<label htmlFor="checkbox1" className="checkbox">Remember me</label>:<label htmlFor="checkbox1" className="checkbox">Subscribe to our newsletter</label>}
            
            <br />
            <br />
            {action === "signin"?<p></p>:<p className="textBody">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>}
            
            {action === "signin"?<div>
            <input type="submit" className="passBut"  value="SIGN IN" />
            </div>:<div>
            <input type="submit" className="passBut"  value="SIGN UP" />
            </div>}
            
            <br />
                {action === "signup"?<span></span>:<span className="lostpass"><u>LOST YOUR PASSWORD?</u></span>}
                    
        </form>
        

        
        
    </div>
    )
}

export default App 