import React,{useState,useEffect} from 'react'
import Navbar from './components/Navbar'
import Card from './components/Card'
import getData from './others/getData'


const Home = () => {
    
    const [recentMovies, setRecentMovies] = useState([]);
    const key = process.env.REACT_APP_SECRET_KEY;
    const url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`;
    const data = async (url)=>{
        const array = await getData(url);
        setRecentMovies(array);
    }
    useEffect(() => {
        data(url);
    }, [])
    
  return (
    <div id="home">
        
        <Navbar data={data} />
        <div id="line"></div>
        <div id="title">Most recent Movies</div>
        <div id="moviesBox">
            {recentMovies.map((movie)=>(
                <Card movie={movie} />
            ))}
        </div>
        
    </div>
  )
}

export default Home