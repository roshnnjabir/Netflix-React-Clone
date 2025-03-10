import './Footer.css'
import React from 'react'
import youtube_icon from '../../assets/youtube_icon.png'
import twitter_icon from '../../assets/twitter_icon.png'
import facebook_icon from '../../assets/facebook_icon.png'
import instagram_icon from '../../assets/instagram_icon.png'

const Footer = () => {
    console.log("Footer Rendered")
    return (
        <div className='footer'>
            <div className='footer-icons'>
                    <img src={facebook_icon} alt={facebook_icon} />
                    <img src={twitter_icon} alt={twitter_icon} />
                    <img src={youtube_icon} alt={youtube_icon} />
                    <img src={instagram_icon} alt={instagram_icon} />
            </div>
            <ul>
                <li>Audio Description</li>
                <li>Help Center</li>
                <li>Gift cards</li>
                <li>Media Center</li>
                <li>Investor Relations</li>
                <li>Jobs</li>
                <li>Terms of Use</li>
                <li>Privacy</li>
                <li>Legal Notices</li>
                <li>Cookie Perferences</li>
                <li>Coporate Information</li>
                <li>Contact Us</li>
            </ul>
        </div>
    );
}

export default React.memo(Footer);

// export default React.memo(Footer, (preProps, nextProps) => {

// });
