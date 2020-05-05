import React, { useState } from 'react'

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
            <input type = "text" onChange = {e => setValue(e.target.value)}></input>
        </form>
    )
}