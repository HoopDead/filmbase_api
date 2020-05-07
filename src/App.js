import React, { Component, useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import './index.css'
import { SearchBar } from "./components/SearchBar";
import { DisplayData } from './components/DisplayData';
import { Paggination } from './components/Paggination';
import useAxios from 'axios-hooks'

function App() {
  const apiKey = process.env.REACT_APP_MOVIE_API_KEY;
  const [{ query, queryPage }, setQuery] = useState({query: " ", queryPage: 1});
  const [{ data, loading, error }, refetch] = useAxios(
    `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=pl-PL&query=${query}&page=${queryPage}&include_adult=false`
  )

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>

  const fetch = (query, queryPage) => {
    setQuery({query, queryPage});
    refetch();
    return 0;
  }
  if (data.results.length) {
    return (
      <MDBContainer fluid className = "h-100 min-vh-100">
      <p className="h2 text-center m-5">
        <img className="mr-2" src={require('./img/logo.png')} alt=""/>
          Film<span className="blue-text">base</span>
        </p>
        <SearchBar fetch = { fetch }></SearchBar>
        <DisplayData data = { data }></DisplayData>
        <Paggination data = { data } q = { query } fetch = { fetch }></Paggination>
        </MDBContainer>
    );
  }

  return (
    <MDBContainer fluid className = "h-100 min-vh-100">
      <p className="h2 text-center m-5">
            <img className="mr-2" src={require('./img/logo.png')} alt=""/>
            Film<span className="blue-text">base</span>
      </p>
        <SearchBar fetch = { fetch }></SearchBar>
    </MDBContainer>
  );
}

export default App;
