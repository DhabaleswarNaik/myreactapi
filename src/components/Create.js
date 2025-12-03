import React,{useState} from 'react';
import axios from 'axios';
const CreateData=()=>{
	const[newData,setNewData]=useState('');
	const handleCreate=async()=>{
		try {
		await axios.post('https://jsonplaceholder.typicode.com/posts',{newData});
	alert('Data created successfully');
 	}
		catch(error){
	console.error('Error creating data',error);
	}
};
return(
	<div>
      <h2> Create new data </h2>
      <input type="text"
             value={newData}
             onChange={(e)=>setNewData(e.target.value)} />
        <button type="submit" 
                onClick={handleCreate}> Submit</button> 
	</div>	
	);
};
export default CreateData;
