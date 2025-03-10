import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Player = () => {
    const {id} = useParams();
    console.log(useParams());
    const navigate = useNavigate();

    const [apiData, setApiData] = useState({
        key:"",
        name:"",
        published_at:"",
        typeof:""
    })
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNjgyNDZiNzRjNGFlZmIxN2U3ZTM1ODc2NzRhY2VhZCIsIm5iZiI6MTc0MDY0ODEyOS4xMzkwMDAyLCJzdWIiOiI2N2MwMmVjMTA3MmE3MDdhZTkzNWE0MTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.UVOD8Zy1U0lUwG8A7YMckauhHpbJOAiWpByvIAmYbbs'
        }
    };
      
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}/videos?`, options)
        .then(res => res.json())
        .then(res => setApiData(res.results[0]))
        .catch(err => console.error(err));
    }, [])

    return (
        <div className='player'>
            <img onClick={()=>navigate('/')} src={back_arrow_icon} alt={back_arrow_icon} />
            <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" title='Trailer' allowFullScreen></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
            </div>
        </div>
    );
}

export default Player;
