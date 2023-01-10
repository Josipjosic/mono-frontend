import {
  action,
  configure,
  makeAutoObservable,
  observable,
  runInAction,
} from "mobx";

configure({ enforceActions: true });

class ModelService {
  loadedCars = [];

  constructor() {
    makeAutoObservable(this, {
      loadedCars: observable,
      setLoadedCars: action,
      fetchCars: action,
    });
  }
  //set received data from fetch cars function
  setLoadedCars = (loadedCar) => {
    this.loadedCars = loadedCar;
  };



  createModel = async (vehicleMake, vehicleModel) => {
    return await fetch(
      "https://mono-frontend-45a65-default-rtdb.europe-west1.firebasedatabase.app/.json",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ vehicleMake, vehicleModel }),
      }
    );
  };

  deleteHandler = async () => {
    await fetch(
      `https://mono-frontend-45a65-default-rtdb.europe-west1.firebasedatabase.app/.json`,
      {
        method: "DELETE",
      }
    );
  };

   fetchCars = async () => {
    const response = await fetch(
      "https://mono-frontend-45a65-default-rtdb.europe-west1.firebasedatabase.app/.json"
    );
     response.json().then((data) => {
      const loadedCar = [];
      for (const key in data) {
        loadedCar.push({
          object: data[key]
        });
        console.log(this.loadedCars)
      }
      runInAction(() => {
        this.setLoadedCars(loadedCar);
      });
    });
  }
}

const modelService = new ModelService();

export { modelService };

class CreateStore {
  id;
  vehicleMake = {
    id: (this.id),
    makeName: (this.makeName = ""),
    makeAbrv: (this.makeAbrv = ""),
  };
  vehicleModel = {
    id: (this.id),
    modelId: (this.id),
    modelName: (this.modelName = ""),
    modelAbrv: (this.modelAbrv = ""),
  };

  constructor() {
    makeAutoObservable(this, {
      loadedCars: observable,
      confirmHandler: action,
    });
  }

  setId = (id) => {
    this.vehicleMake.id = id;
    this.vehicleModel.id = id;
    this.vehicleModel.modelId= id;
  }

  // sets name of input name
  setMakeName = (makeName) => {
    this.vehicleMake.makeName = makeName;
  };

  // sets name of input name
  setModelName = (modelName) => {
    this.vehicleModel.modelName = modelName;
  };

  // sets name of input name
  setMakeAbrv = (makeAbrv) => {
    this.vehicleMake.makeAbrv = makeAbrv;
  };

  // sets name of input name
  setModelAbrv = (modelAbrv) => {
    this.vehicleModel.modelAbrv = modelAbrv;
  };

  //fetch POST method function
  confirmHandler = async (event) => {
    event.preventDefault();
    await modelService.createModel(this.vehicleMake, this.vehicleModel);
  };
}

const createStore = new CreateStore();

export { createStore };

class ListStore {


  }


const listStore = new ListStore();

export { listStore };
