import React from "react";
import "./List.css";

function List() {
  return (
    <div className="List-grid">
      <h3>List</h3>
      <div className="List-column">
      <ul className="List-content">
          <li>Vehicle Name Abrv</li>
          <li>Vehicle Name Abrv</li>
          <li>Vehicle Name Abrv</li>
          <li>Vehicle Name Abrv</li>
          <li>Vehicle Name Abrv</li>
          <li>Vehicle Name Abrv</li>
          <li>Vehicle Name Abrv</li>
        </ul>
        <ul className="List-content">
          <li>Vehicle Name</li>
          <li>Vehicle Name</li>
          <li>Vehicle Name</li>
          <li>Vehicle Name</li>
          <li>Vehicle Name</li>
          <li>Vehicle Name</li>
          <li>Vehicle Name</li>
        </ul>
        <ul className="List-content">
          <li>Vehicle Model Abrv</li>
          <li>Vehicle Model Abrv</li>
          <li>Vehicle Model Abrv</li>
          <li>Vehicle Model Abrv</li>
          <li>Vehicle Model Abrv</li>
          <li>Vehicle Model Abrv</li>
          <li>Vehicle Model Abrv</li>
        </ul>
        <ul className="List-content">
          <li>Vehicle Model</li>
          <li>Vehicle Model</li>
          <li>Vehicle Model</li>
          <li>Vehicle Model</li>
          <li>Vehicle Model</li>
          <li>Vehicle Model</li>
          <li>Vehicle Model</li>
        </ul>
      </div>
    </div>
  );
}

export default List;
