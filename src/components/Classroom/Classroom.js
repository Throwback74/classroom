import React from "react";
import "./Classroom.css";
import {Student} from "../Student";
import students from "../students.json";

const Classroom = props => (
  <div className="container-fluid">
    <h1>Welcome to the Class</h1>
    <h2> Student List</h2>
    {students.map(student => (
      <Student 
        id = {student.id}
        name = {student.name}
        subject = {student.subject}
      />
      
    ))}
  </div>
);

export default Classroom;

// eslint-disable-next-line
{/* <p><span>ID: {students[0].id} </span>  Name: {students[0].name}</p>
<p> Name: {students[0].subject}</p> */}