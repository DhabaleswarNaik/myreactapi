import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Api() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
    }, [])

    return (
        <div>
            <h1>API Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    )
}