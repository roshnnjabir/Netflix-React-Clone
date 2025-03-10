import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import TitleCards from '../../components/TitleCards/TitleCards'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import { useMemo } from 'react'

const Home = () => {
    const val = useMemo(() => {
        return {
            "key": 10,
            "activeState": true,
        };
    }, []);
    return (
        <div className='home'>
            <Navbar/>
            <div className="hero">
                <img className="banner-img" src={hero_banner} alt={hero_title}/> 
                <div className="hero-caption">
                    <img src={hero_title} alt={hero_title} className="caption-img"/>
                    <p>Discovering his ties to as secret ancient order, 
                        a young man living in modern Istanbul embarks on a quest 
                        to save the city from an immortal enemy.
                    </p>
                    <div className="hero-btns">
                        <Link to={'/player/8982'}><button className="btn" ><img src={play_icon} alt={play_icon} />Play</button></Link>
                        <button className="btn dark-btn"><img src={info_icon} alt={info_icon} />More Info</button>
                    </div>
                    <TitleCards />
                </div>
            </div>
            <div className="more-cards">
                <TitleCards title={"Blockbuster Movies"} category={"top_rated"}/>
                <TitleCards title={"Only on Netflix"} category={"popular"}/>
                <TitleCards title={"Upcoming Movies"} category={"upcoming"}/>
                <TitleCards title={"Top Picks For You"} category={"now_playing"}/>
                <Footer  testValue={val}/>
            </div>
        </div>
    );
}

export default Home;
