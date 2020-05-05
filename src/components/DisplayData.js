import React from 'react';

export function DisplayData({data}) {
    console.log(data);
    return (
      <div>
        {data.results.map(function(result, index) {
            return ( <div key = {index}>
              <h3>{result.title || result.name || result.original_name }</h3>
              <p>{result.overview || "Nie znaleziono opisu w bazie danych."}</p>
              <img src = {`https://image.tmdb.org/t/p/w500/${result.poster_path}`}></img>
            </div> )
        })}
      </div>
    )
  }