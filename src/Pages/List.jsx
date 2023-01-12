import React from "react";
import ItemData from "../Components/ItemData";
import { observer } from "mobx-react";
import { store } from "../Stores/Store";
import { modelService } from "../Common/ModelService";
import "./List.css";

function List() {

  
  //search by name input logic
  const filteredCars =
    modelService.loadedCars &&
    modelService.loadedCars.filter((data) => {
      return data.items.vehicleMake.makeName
        ?.toLowerCase()
        .includes(store.searchCar.toString().toLowerCase());
    });

  const handleInput = (event) => {
    store.searchCar = event.target.value;
  };

  return (
    <div className="List-grid">
      <div className="Item-controler">
        <input
          className="Item-search"
          value={store.searchCar}
          onChange={handleInput}
          placeholder="Search by car name"
        ></input>
      </div>
      <div className="List-column">
        <h4 className="List-data">Vehicle Abrv</h4>
        <h4 className="List-data" onClick={store.sortByName}>Vehicle Name ↓</h4>
        <h4 className="List-data">Vehicle Model Abrv</h4>
        <h4 className="List-data" onClick={store.sortByModel}>Vehicle Model Name ↓</h4>
      </div>
      <section>
        {modelService.loadedCars && <ItemData carDetail={filteredCars} />}
      </section>
    </div>
  );
}

export default observer(List);
