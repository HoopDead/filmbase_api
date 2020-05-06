import React, { Component, useState } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import { SearchBar } from "./components/SearchBar";
import { DisplayData } from './components/DisplayData';
import { Paggination } from './components/Paggination';
import useAxios from 'axios-hooks'

function App() {
  const [{ query, queryPage }, setQuery] = useState({query: " ", queryPage: 1});

  const [{ data, loading, error }, refetch] = useAxios(
    `https://api.themoviedb.org/3/search/multi?api_key=98c570ae9330466083212e565d6d3a78&language=pl-PL&query=${query}&page=${queryPage}&include_adult=false`
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
      <div>
        <SearchBar fetch = { fetch }></SearchBar>
        <DisplayData data = { data }></DisplayData>
        <Paggination data = { data } q = { query } fetch = { fetch }></Paggination>
      </div>
    );
  }

  return (
    <div>
      <SearchBar fetch = { fetch }></SearchBar>
    </div>
  );
}

export default App;
