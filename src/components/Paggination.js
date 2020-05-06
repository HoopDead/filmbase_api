import React from 'react';

export function Paggination({data, q, fetch}) {
    let items = [];

    const changeActivePage = (index) => {
        fetch(q, index);
    }

    for (let i = 1; i <= data.total_pages; i++) {
        items.push(<span onClick = {() => changeActivePage(i)} key = {i}>{i} </span>)
    }
    return items;
}