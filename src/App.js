import "./App.css";
import List from "./Components/List";
import AddMenu from "./Components/AddMenu";

function App() {
  return (
    <div className="App">
      <div className="App-main">
        <AddMenu />
        <List />
      </div>
    </div>
  );
}

export default App;
