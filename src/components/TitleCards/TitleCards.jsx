import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';


const TitleCards = ({title, category}) => {
    const [apiData, setApiData] = useState([])
    const cardsRef = useRef();

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjgyNDZiNzRjNGFlZmIxN2U3ZTM1ODc2NzRhY2VhZCIsIm5iZiI6MTc0MDY0ODEyOS4xMzkwMDAyLCJzdWIiOiI2N2MwMmVjMTA3MmE3MDdhZTkzNWE0MTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UVOD8Zy1U0lUwG8A7YMckauhHpbJOAiWpByvIAmYbbs'
        }
    };
    
    const handleWheel = (event) => {
        event.preventDefault();
        cardsRef.current.scrollLeft += event.deltaY;
        console.log('handlewhel')
    }

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results))
        .catch(err => console.error(err));
        
        cardsRef.current.addEventListener('wheel', handleWheel);
    }, [])

    return (
        <div className='titlecards'>
            <h2>{title?title:"Popular on Netflix"}</h2>
            <div className="card-list" ref={cardsRef}>
                {apiData.map((card, index) => {
                    return <Link to={`/player/${card.id}`} className="card" key={index}>
                        <img src={'https://image.tmdb.org/t/p/original/'+card.backdrop_path} alt={card.name} />
                        <p>{card.original_title}</p></Link>
                })}
            </div>
        </div>
    );
}

export default TitleCards;
