import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Get() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function fetchData() {
            try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/albums");
            setData(response.data);
            console.log(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData();
       
    }, [])
    return (
        <div>
            <h2>Fetched Albums :</h2>
            {data.map(item => (
                <p style={{border: "1px solid red", padding: "40px", borderWidth: "1px" }} key={item.id}>
                    <strong>{item.id}:</strong> {item.title }</p>
            ))}     
        </div>
    )
}