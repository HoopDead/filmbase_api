import React from 'react';
import { MDBCol, MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import "../index.css";


export function DisplayData({data}) {
    console.log(data);
    return (
      <div>
        {data.results.map(function(result, index) {
            if (result.poster_path) {
              return (
                    <MDBCol key = {index} xs = "12" md = "8" className = "ml-auto">
                      <MDBCard className = "flex-md-row mb-4 box-shadow h-md-250">
                        <MDBCardImage className = "card-img-right flex-auto d-none d-lg-block" src = {`https://image.tmdb.org/t/p/w92/${result.poster_path}`} alt = "Plakat filmu"></MDBCardImage>
                        <MDBCardBody className = "w-25 w-100 d-flex flex-column align-items-start">
                          <MDBCardTitle className = "blue-text">{result.title || result.name || result.original_name }</MDBCardTitle>
                          <MDBCardText className = "text-justify">{result.overview.split(".")[0] || "Nie znaleziono opisu w bazie danych."}</MDBCardText>
                        </MDBCardBody>
                      </MDBCard>
                    </MDBCol> )
          } else {
            return ( 
              <MDBCol key = {index} md="8" xs = "12" className="ml-auto">
                <MDBCard className = "flex-md-row mb-4 box-shadow h-md-250">
                  <MDBCardImage src = {require('../img/small_poster.jpg')} className = "card-img-right flex-auto d-none d-lg-block"></MDBCardImage>
                  <MDBCardBody className = "w-25 w-100 d-flex flex-column align-items-start">
                    <MDBCardTitle className = "blue-text">{result.title || result.name || result.original_name }</MDBCardTitle>
                    <MDBCardText className = "text-justify">{result.overview || "Nie znaleziono opisu w bazie danych."}</MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol> )
          }})}
        </div>
    )
  }