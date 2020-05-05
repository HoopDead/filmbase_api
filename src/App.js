import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow, MDBIcon } from "mdbreact";
import "./index.css";
import logo from "./logo.png";
import { SearchBar } from "./components/SearchBar";
import useAxios from 'axios-hooks'

function App() {
  const [{ data, loading, error }, refetch] = useAxios(
    'https://api.themoviedb.org/3/search/multi?api_key=98c570ae9330466083212e565d6d3a78&language=en-US&query=Stranger&page=1&include_adult=false'
  )
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error!</p>
  return (
    <div>
      <button onClick = {refetch}>refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;
