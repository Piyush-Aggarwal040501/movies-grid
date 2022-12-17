import React,{useState} from 'react'

const Modal = ({movie,hideDetails}) => {

    return (
        <div id="fade">
            <div id="modal">
                <section>
                    <div id="name">{movie.title}</div>
                    <div id="cross" onClick={()=>{hideDetails()}} >
                        <img src="/cross.png" alt="" />
                    </div>
                </section>
                <div id="partition">
                    <div id="left">
                        <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="None" />
                    </div>
                    <div id="right">
                        <div id="date"><b>Release Date: </b>{movie.release_date}</div><br />
                        <div id="para">{movie.overview}</div>
                        <br />
                        <div id="rating"><b>{movie.vote_average}</b> / 10 ({movie.vote_count} total votes)</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal