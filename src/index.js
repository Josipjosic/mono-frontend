import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Menu from "./Components/Menu";
import Create from "./Pages/Create";
import Update from "./Pages/Update";
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <React.StrictMode>
    <header className="App-header">
      <h1>Mono Frontend</h1>
    </header>
    <div className="App-menu">
      <BrowserRouter>
        <Menu />
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/create" element={<Create />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  </React.StrictMode>
);
