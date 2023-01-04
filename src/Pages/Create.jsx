import React from "react";
import "./Create.css";

function Create() {
  return (
    <div className="Create-container">
      <h3>Create Item</h3>
      <div className="Create-content">
        <div className="Create-Make">
          <h4>Create Vehicle Make</h4>
          <div className="Create-field">
            <input placeholder="Vehicle Make Name" type="text"></input>
            <input placeholder="Vehicle Make Abrv" type="text"></input>
          </div>
        </div>
        <div className="Create-Model">
          <h4>Create Vehicle Model</h4>
          <div className="Create-field">
            <input placeholder="Vehicle Model Name" type="text"></input>
            <input placeholder="Vehicle Model Abrv" type="text"></input>
          </div>
        </div>
      </div>
      <button>Confirm</button>
    </div>
  );
}

export default Create;
