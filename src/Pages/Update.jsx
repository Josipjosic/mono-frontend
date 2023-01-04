import React from 'react';
import "./Update.css";

function Update() {
  return (
    <div className="Update-container">
      <h3>Update Item</h3>
      <div className="Update-content">
        <div className="Update-Make">
          <h4>Update Vehicle Make</h4>
          <div className="Update-field">
            <input placeholder="Vehicle Make Name" type="text"></input>
            <input placeholder="Vehicle Make Abrv" type="text"></input>
          </div>
        </div>
        <div className="Update-Model">
          <h4>Update Vehicle Model</h4>
          <div className="Update-field">
            <input placeholder="Vehicle Model Name" type="text"></input>
            <input placeholder="Vehicle Model Abrv" type="text"></input>
          </div>
        </div>
      </div>
      <button>Save changes</button>
    </div>
  )
}

export default Update