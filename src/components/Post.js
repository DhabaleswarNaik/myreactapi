//import React from "react";
import axios from "axios";
import { useState } from "react";

export default function Post() {
    const [newData, setNewData] = useState('');

    async function handleCreate() {
        try {
            await axios.post('https://jsonplaceholder.typicode.com/posts', { newData });

            alert('Created Data ==> ' + newData);
            setNewData('');
        } catch (error) {
            console.error('Error creating data', error);
        }
    };

    return (
        <div>
            <h2> Create new data </h2>
            <input
                type="text"
                placeholder="Enter data....."
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
            />
            <button type="submit" onClick={handleCreate} style={{background:"lightblue"}}> Send Data</button>
        </div>
    );
}