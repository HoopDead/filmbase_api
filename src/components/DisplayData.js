import React from 'react';
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";


export function DisplayData({data}) {
    console.log(data);
    return (
      <div>
        {data.results.map(function(result, index) {
            return ( 
            <div key = {index}>
                  <MDBCol md="3" className="mx-auto pt-3">
                    <h3>{result.title || result.name || result.original_name }</h3>
                    <p>{result.overview || "Nie znaleziono opisu w bazie danych."}</p>
                    <img className="w-75"src = {`https://image.tmdb.org/t/p/w500/${result.poster_path}`}></img>
                  </MDBCol>
            </div> )
        })}
      </div>
    )
  }