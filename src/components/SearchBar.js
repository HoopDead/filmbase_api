import React, { useState } from 'react'

export function SearchBar() {
    const [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();
        if (!value) return;
        console.log(value);
        setValue("");
    }

    return (
        <form onSubmit = { handleSubmit }>
            <input type = "text" onChange = {e => setValue(e.target.value)}></input>
        </form>
    )
}