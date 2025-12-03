import axios from "axios";
import { useState } from "react";


export default function Update() {
    const [updateData, setUpdateData] = useState('');

    async function handleUpdate() {
        try {
            const response = await axios.put("https://jsonplaceholder.typicode.com/posts/1", {title: updateData,});
            console.log(response);
            alert("Updated Data ==> " + updateData);
        } catch (error) {
            console.error("Error updating data:", error);
        }
    }
    return (
        <div>
            <h2>Update Data :</h2>
            <input type="text" placeholder="Update Data..." onChange={(e) => setUpdateData(e.target.value)} />
            <button style={{background:"lightgreen"}} onClick={handleUpdate}> Update Data</button>

        </div>
    );
}