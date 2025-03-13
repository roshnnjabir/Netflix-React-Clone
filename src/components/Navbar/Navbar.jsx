import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { useEffect, useRef, useState } from 'react'
import { logout } from '../../firebase'
import { Link } from 'react-router-dom'


const Navbar = () => {
    console.log("Navbar Rendered")
    const [showToolTip, setShowToolTip] = useState(false);
    const navRef = useRef();
    const refObj = useRef();

    useEffect(() => {
        window.addEventListener('scroll', ()=> {
            if(window.scrollY >= 80){
                navRef.current.classList.add('nav-dark')
            }else{
                navRef.current.classList.remove('nav-dark')
            }
        })
    })

    return (
        <div ref={navRef} className="navbar">
            <div className="navbar-left">
                <img src={logo} alt={logo} />
                <ul>
                    <li>Home</li>
                    <li onMouseEnter={(evnt) => {
                            const width1 = evnt.target.getBoundingClientRect().width;
                            const width2 = refObj.current.getBoundingClientRect().width;

                            refObj.current.style.left = `${(width2 + width1 * 1.8)}px`
                            setShowToolTip(true)
                        }} 
                        onMouseLeave={(evnt) =>{
                            setShowToolTip(false)
                        }} >Tv Shows 
                        <label ref={refObj} className={`tooltip ${showToolTip ? 'show-tool-tip' : 'hide-tool-tip'}`}>Tv Shows Bookings</label>
                    </li>
                    <li>Movies</li>
                    <li>New & Popular</li>
                    <li>My List</li>
                    <li>Browse by Languages</li>
                </ul>
            </div>
            <div className="navbar-right">
                <img src={search_icon} alt={search_icon} />
                <p>Children</p>
                <img src={bell_icon} alt={bell_icon} />
                <div className="navbar-profile">
                    <Link to={'/profile'}><img src={profile_img} alt={profile_img} /></Link>
                    <img src={caret_icon} alt={caret_icon} />
                    <div className="dropdown" >
                        <p onClick={()=>logout()}>Sign Out of Netflix</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
