import React from "react";
import { modelService } from "../Common/ModelService";
import "./ItemData.css";
import {observer} from "mobx-react"

function List() {

  return (
    <div className="Item-grid">
      {modelService.loadedCars.map((data) => (
        <div className="Item-column" key={data.items.vehicleMake.id}>
          <ul className="Item-content">
            <li className="Item-data">{data.items.vehicleMake.makeAbrv}</li>
          </ul>
          <ul className="Item-content">
            <li className="Item-data">{data.items.vehicleMake.makeName}</li>
          </ul>
          <ul className="Item-content">
            <li className="Item-data">{data.items.vehicleModel.modelAbrv}</li>
          </ul>
          <ul className="Item-content">
            <li className="Item-data">{data.items.vehicleModel.modelName}</li>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default observer(List);
