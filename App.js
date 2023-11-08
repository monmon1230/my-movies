import { Container } from "react-bootstrap";
import React, { useEffect, useState } from 'react'
import NavBar from "./component/NavBar";
import MoviesList from "./component/MoviesList";
import axios from "axios";

function App() {
  const [movies,setMovies]=useState([])

  //get all movies by axios
  const getAllMovies= async ()=>{
   const res=await axios.get('https://api.themoviedb.org/3/discover/movie?api_key=63f0deff8982f597ed984fc7a7c983f1&include_adult=false&include_video=false&language=ar&sort_by=popularity.desc')
    setMovies(res.data.results)
  }
  useEffect(()=>{
    getAllMovies();
  },[])

  const Search=async(word)=>{
    if(word===""){
      getAllMovies();
    }else{ const res=await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=63f0deff8982f597ed984fc7a7c983f1%20&query=${word}&language=ar`)
    setMovies(res.data.results)}
  }

  return(
    <div className="font color-body ">
      <NavBar Search={Search}/>
      <Container>
              <MoviesList movies={movies} />
      </Container>
    </div>
  );
  }

export default App;