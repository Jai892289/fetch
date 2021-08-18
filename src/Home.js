import React from "react";


const Home=()=>{
    

const students = [
    ["Name", "Subject", "Marks"],
    ["ABC", "Arts", 80],
    ["XYZ", "Science", "70"],
  ];
  return (
    <div>
      <table>
        <thead>
          <tr>
            {students[0].map((item, index) => {
              return <th>{item}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {students.slice(1, students.length).map((item, index) => {
            return (
              <tr>
                <td>{item[0]}, {item[1]}, {item[1]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>        
    )
}

export default Home;