import React from 'react';
import { MDBPagination, MDBPageItem, MDBPageNav, MDBCol, MDBRow, MDBFormInline } from 'mdbreact'

export function Paggination({data, q, fetch}) {
    let items = [];

    const changeActivePage = (index) => {
        fetch(q, index);
    }

    for (let i = 1; i <= data.total_pages; i++) {
        items.push(<MDBPageNav className="text-white" onClick = {() => changeActivePage(i)} key={i}> {i} </MDBPageNav>)
    }
    return items;
}