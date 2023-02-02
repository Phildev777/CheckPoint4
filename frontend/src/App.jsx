import React from 'react';
import {Routes,Route, useLocation} from "react-router-dom";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Consoles from "./pages/Consoles";
import Home from "./pages/Home";
import ListeDeTesJeux from "./pages/ListeDeTesJeux";
import AjoutConsole from "./components/AjoutConsole";
import"./App.css";


function App() {

const location = useLocation();


  return (
    <div className="App">
    
      {location.pathname !== "/" && <NavBar/>}
      {location.pathname !== "/" && <Header/>}
      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/consoles" element={<Consoles/>}/>
        <Route path="/listeDeTesJeux" element={<ListeDeTesJeux/>}/>
        <Route path="/ajoutConsole" element={<AjoutConsole/>}/>
      </Routes>


    </div>
  );
}

export default App;
