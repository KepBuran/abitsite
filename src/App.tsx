import React from 'react';
import './styles/App.css';
import NavbarComponent from "./components/NavbarComponent";
import MainPageComponent from "./components/main/MainPageComponent";

function App() {
  return (
      <div className="App">
        <NavbarComponent></NavbarComponent>
        <MainPageComponent></MainPageComponent>
      </div>
  );
}

export default App;
