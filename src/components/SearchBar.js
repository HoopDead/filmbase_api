import React, { useState } from 'react'
import { MDBInput } from "mdbreact";

export function SearchBar({fetch, query}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        fetch(value, 1);
        setValue("");
    }

    return (
        <form onSubmit = { handleSubmit }>
            <MDBInput hint="Szukaj" className = "w-50 mx-auto text-black" type = "text" onChange = {e => setValue(e.target.value)}></MDBInput>
        </form>
    )
}