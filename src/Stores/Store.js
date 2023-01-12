import { makeAutoObservable, observable } from "mobx";
import { modelService } from "../Common/ModelService";

class Store {
  searchCar = [];
  currentPage = 1;
  itemsPerPage = 4;

  constructor() {
    makeAutoObservable(this, {
      searchCar: observable,
      currentPage: observable,
    });
  }

  // sets current page number
  setCurrentPage = (currentPage) => {
    this.currentPage = currentPage;
  };

  //sorting list by name
  sortByName = () => {
    modelService.loadedCars.sort((a, b) => {
      if (a.items.vehicleMake.makeName < b.items.vehicleMake.makeName) {
        return -1;
      }
      if (a.items.vehicleMake.makeName > b.items.vehicleMake.makeName) {
        return 1;
      }
    });
  };

  //sorting list by type
  sortByModel = () => {
    modelService.loadedCars.sort((a, b) => {
      if (a.items.vehicleModel.modelName < b.items.vehicleModel.modelName) {
        return -1;
      }
      if (a.items.vehicleModel.modelName > b.items.vehicleModel.modelName) {
        return 1;
      }
      return 0;
    });
  };
  
}

const store = new Store();

export { store };
