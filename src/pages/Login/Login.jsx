import './Login.css'
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { login, singUp } from '../../firebase';
import netflix_spinner from '../../assets/netflix_spinner.gif'
import { useUser } from '../../context/UseContext';


const Login = () => {
    const { setUser } = useUser();
    const [signState, setSignState] = useState("Sign In");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const user_auth = async (event)=>{
        event.preventDefault()
        if(email != "" && password != ""){
            console.log("email", email, password)
            if(signState==="Sign In"){
                await login(email, password);
                console.log("Success")
            }
            else{
                await singUp(name, email, password)
            }
            setUser({name, email});
        }
        else{
            console.log("Pasword Or Email Missing")
        }
    }

    return (
        loading?<div className='login-spinner'>
            <img src={netflix_spinner} alt={netflix_spinner} />
        </div>:
        <div className='login'>
            <img src={logo} className='login-logo' alt={logo} />
            <div className='login-form'>
                <h1>{signState}</h1>
                <form>
                    {signState==="Sign Up"?<input value={name} onChange={(event)=>{setName(event.target.value)}}
                     type="text" placeholder='Your name' />:<></>}
                    
                    <input type="email" value={email} onChange={(event)=>{setEmail(event.target.value)}} placeholder='Email' />
                    <input type="password" value={password} onChange={(event)=>{setPassword(event.target.value)}} placeholder='Password' />
                    <button onClick={user_auth} type='submit'>{signState}</button>
                    <div className='form-help'>
                        <div className="remember">
                            <input type="checkbox" />
                            <label htmlFor="">Remember Me</label>
                        </div>
                        <p>Need Help?</p>
                    </div>
                </form>
                <div className="form-switch">
                    {signState==="Sign In"?<p>New to Netflix? <span onClick={()=> setSignState("Sign Up")}>Sign Up Now</span></p>:<p>Already have Account? <span onClick={()=>setSignState("Sign In")}>Sign In Now</span></p>}
                </div>
            </div>
        </div>
    );
}

export default Login;
