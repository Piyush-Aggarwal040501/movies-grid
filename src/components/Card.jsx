import React,{useState} from 'react'
import Modal from './Modal'

const Card = ({movie}) => {
    const [info, setInfo] = useState(false);
    const showDetails = ()=>{
        setInfo(true)
    }
    const hideDetails = ()=>{
        setInfo(false);
    }
    
    return (
        <section id='cardOuter'>
            {info && 
                <Modal movie={movie} hideDetails={hideDetails} />
            }
            <div id="card" onClick={showDetails}>
                <div id="ratingCard">{movie.vote_average}</div>
                <img id='cardImage' src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="No Poster" />
                <div id="cardName">{movie.title}</div>
            </div>
        </section>
    )
}

export default Card