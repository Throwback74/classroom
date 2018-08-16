import React from "react";
import "./Student.css";

export const Student = (props) => (
  <div className="student">
  
    <div>
    <p><span>ID: {props.id} </span>  Name: {props.name}</p>
      <p> Favorite Subject: {props.subject}</p>
      </div>

  </div>
)