import React,{useState} from "react";
import Data from "./react-test-data.json";
const Todo = () => {

    const [searchTerm, setsearchTerm] = useState("");
    return (

        <>
 <div className="container">
<input type="text" placeholder="Search..." className="form-control" 

    onChange={(e)=>{
        setsearchTerm(e.target.value);
    }}
/>

<table className="table table-bordered">
<thead className="thead-dark">
<tr>

<th>Name</th>
<th>City</th>
<th>Cuisine Style</th>
<th>Ranking</th>
<th>Rating</th>
<th>Number of Reviews</th>


</tr>
</thead>
<tbody>
 {Data.filter((val)=>{
if (searchTerm === ""){
    return val;
}else if(
    val.Name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    val.City.toLowerCase().includes(searchTerm.toLowerCase()) ||
    val["Cuisine Style"].toLowerCase().includes(searchTerm.toLowerCase()) 
){
    return val;
}

 }).map((m)=>(
     <tr key={m.id}>
     <td>{m.Name}</td>
     <td>{m.City}</td>
     <td>{m["Cuisine Style"]}</td>
     <td>{m.Ranking}</td>
     <td>{m.Rating}</td>
     <td>{m["Number of Reviews"]}</td>




     </tr>
 ))}

</tbody>

</table>
  </div>


        </>
    )
}
export default Todo;