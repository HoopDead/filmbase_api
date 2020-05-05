import React from 'react';

export function DisplayData({data}) {
    return (
      <div>
        {data.results.map(function(result, index) {
          if(result.overview)
          {
            return ( <div key = {index}>
              <h3>{result.title || result.name}</h3>
              <p>{result.overview}</p>
            </div> )
          }
        })}
      </div>
    )
  }