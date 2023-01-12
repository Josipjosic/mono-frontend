import React from "react";
import { modelService } from "../Common/ModelService";
import { store } from "../Stores/Store";
import "./ItemData.css";
import Pagination from "./Pagination";
import { observer } from "mobx-react";

function ItemData({carDetail}) {
  const indexOfLastItem = store.currentPage * store.itemsPerPage;
  const indexOfFirstPost = indexOfLastItem - store.itemsPerPage;
  const currentPost = carDetail.slice(indexOfFirstPost, indexOfLastItem);

   //updates selected number of page
   const paginate = (pageNumber) => {
    store.setCurrentPage(pageNumber);
  };
  
  const listedCars = carDetail.length;

  return (
    <div className="Item-grid">
      {currentPost.map((data) => (
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
          <button
            className="Item-delete"
            onClick={() => {
              modelService.setSelectedId(data.key[0]);
              modelService.deleteHandler();
            }}
          >
            Delete
          </button>
        </div>
      ))}
      <div>
      <Pagination
          itemsPerPage={store.itemsPerPage}
          totalItems={listedCars}
          paginate={paginate}
        />
      </div>
    </div>
  );
}

export default observer(ItemData);
