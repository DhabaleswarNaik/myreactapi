import React from "react";
import axios from "axios";


export default function Delete() {
    async function deleteData() {
        try {
            const response = await axios.delete("https://jsonplaceholder.typicode.com/posts/1");
            console.log(response);
            alert("Data deleted successfully!");
        } catch (error) {
            console.error("Error deleting data:", error);
            
        }
    }

    return (
        <div>
            <h2>Delete Data</h2>
            <button onClick={deleteData}>Delete Post</button>
        </div>
    );
}