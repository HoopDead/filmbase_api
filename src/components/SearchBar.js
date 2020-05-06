import React, { useState } from 'react'
import { MDBInput } from "mdbreact";

export function SearchBar({fetch}) {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        fetch(value, 1);
        setValue("");
    }

    return (
        <form onSubmit = { handleSubmit }>
            <MDBInput className = "w-75 mx-auto" type = "text" onChange = {e => setValue(e.target.value)}></MDBInput>
        </form>
    )
}