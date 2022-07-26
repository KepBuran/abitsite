import React from 'react';
import './styles/App.css';
import './assets/fonts/BebasNeuePro/stylesheet.css'
import NavbarComponent from "./components/NavbarComponent";
import MainPageComponent from "./components/main/MainPageComponent";
import FooterComponent from "./components/FooterComponent";
import SliderComponent from "./components/slider/SliderComponent";

function App() {
  return (
      <div className="App">
          <NavbarComponent></NavbarComponent>
          <MainPageComponent></MainPageComponent>
          <FooterComponent></FooterComponent>
      </div>
  );
}

export default App;
