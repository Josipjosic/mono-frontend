import React from "react";
import "./Create.css";
import {createStore } from "../Common/ModelService";
import { observer } from "mobx-react";

function Create() {
  const makeName = createStore.makeName;
  const modelName = createStore.modelName;
  const makeAbrv = createStore.makeAbrv;
  const modelAbrv = createStore.modelAbrv;

  // stored name input and type input values to data const
  const data = { makeName, modelName, makeAbrv, modelAbrv };

  createStore.data = data



  return (
    <div className="Create-container">
      <h3>Create Item</h3>
      <div className="Create-content">
        <div className="Create-Make">
          <h4>Create Vehicle Make</h4>
          <div className="Create-field">
            <input
              placeholder="Vehicle Make Name"
              type="text"
              onChange={(event) => createStore.setMakeName(event.target.value)}
            ></input>
            <input
              placeholder="Vehicle Make Abrv"
              type="text"
              onChange={(event) => createStore.setMakeAbrv(event.target.value)}
            ></input>
          </div>
        </div>
        <div className="Create-Model">
          <h4>Create Vehicle Model</h4>
          <div className="Create-field">
            <input
              placeholder="Vehicle Model Name"
              type="text"
              onChange={(event) => createStore.setModelName(event.target.value)}
            ></input>
            <input
              placeholder="Vehicle Model Abrv"
              type="text"
              onChange={(event) => createStore.setModelAbrv(event.target.value)}
            ></input>
          </div>
        </div>
      </div>
      <button
        onClick={(event) => {
          createStore.setId(Math.random());
          createStore.confirmHandler.call(this, event);
          console.log(createStore.id)
        }}
      >
        Confirm
      </button>
    </div>
  );
}

export default observer(Create);
