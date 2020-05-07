import React from 'react';
import { MDBFormInline } from 'mdbreact'

export function Paggination({data, q, fetch}) {
    let items = [];

    const changeActivePage = (index) => {
        fetch(q, index);
    }

    for (let i = 1; i <= data.total_pages; i++) {
        items.push(
        <MDBFormInline key = {i} className="text-center">
            <p onClick = {() => changeActivePage(i)} key = {i}>{i} </p>
        </MDBFormInline>)
    }
    return items;
}