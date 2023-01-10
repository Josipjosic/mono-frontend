import React from "react";
import "./AddMenu.css";

function AddMenu() {
  return (
    <div className="Add-grid">
      <h3>Add Menu</h3>
      <div className="Add-content">
        <select defaultValue="Vehicle Make">
          <option>Vehicle Name</option>
        </select>
        <select defaultValue="Vehicle Model">
          <option>Vehicle Model</option>
        </select>
      </div>
      <div className="Add-button">
        <button>Save</button>
      </div>
    </div>
  );
}

export default AddMenu;
