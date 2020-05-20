import React from 'react';
import { MDBCol, MDBFormInline } from "mdbreact";
import "../index.css";


export function DisplayData({data}) {
    console.log(data);
    return (
      <div>
        {data.results.map(function(result, index) {
            if (result.poster_path) {
              return (
                    <MDBFormInline key = {index} className = "my-5 data-card w-75 h-50 mx-auto">
                      <MDBCol xs = "12" md = "4" className = "ml-md-auto mx-sm-auto text-center data-card">
                        <img src = {`https://image.tmdb.org/t/p/w200/${result.poster_path}`} alt="Plakat filmu"></img>
                      </MDBCol>
                      <MDBCol xs = "12" md = "6" className = "mr-md-auto mx-sm-auto text-sm-center text-md-left text-center data-card">
                      <h3 className = "blue-text data-card">{result.title || result.name || result.original_name }</h3>
                      <p className = "data-card">{result.overview || "Nie znaleziono opisu w bazie danych."}</p>
                      </MDBCol>
                    </MDBFormInline> )
          } else {
            return ( 
              <MDBCol key = {index} md="3" xs = "12" className="my-md-3 my-xs-1 text-center pt-3">
                <h3>{result.title || result.name || result.original_name }</h3>
                <p>{result.overview || "Nie znaleziono opisu w bazie danych."}</p>

                <img src = {require('../img/empty_poster.jpg')} alt="Film bez plakatu"></img>
              </MDBCol> )
          }})}
        </div>
    )
  }