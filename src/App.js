import "./App.css";
import List from "./Pages/List"; 
import { useEffect } from "react";
import { modelService } from "./Common/ModelService";

function App() {

  useEffect(() => {
    modelService.fetchCars();
  }, []);

  return (
    <div className="App">
      <div className="App-main">
        <List />
      </div>
    </div>
  );
}

export default App;
