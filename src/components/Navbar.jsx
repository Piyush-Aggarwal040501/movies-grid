import React,{useState} from 'react'


function Navbar({data}) {
    const key = process.env.REACT_APP_SECRET_KEY;
    const [value, setValue] = useState("");
    const handleChange = async (e)=>{
        setValue(e.target.value);
        let url;
        if(e.target.value){
            url = `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${e.target.value}`;
            data(url); 
        }else{
            url = `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`
            data(url);
        }
    }

    return (
        <nav>
            <div id="logo"><img src="/logo.png" alt="INSYNK STUDIOS" /></div>
            <div id="searchBar">
                <img src="/search.png" alt="" />
                <input type="text" placeholder='search for a movie' onChange={handleChange} value={value} />
            </div>
        </nav>
    )
}

export default Navbar