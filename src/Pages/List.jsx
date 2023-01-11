import React from "react";
import ItemData from "../Components/ItemData";
import './List.css';

function List() {

  return (
    <div className="List-grid">
      <div className="Item-controler">
        <input className="Item-search"></input>
        <button className="Item-delete">Delete</button>
      </div>
      <div className="List-column">
          <h4 className="List-data">Vehicle Abrv</h4>
          <h4 className="List-data">Vehicle Name</h4>
          <h4 className="List-data">Vehicle Model Abrv</h4>
          <h4 className="List-data">Vehicle Model Name</h4>
      </div>
      <section>
        <ItemData />
      </section>
    </div>
  );
}

export default List;
