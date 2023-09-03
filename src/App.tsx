import React from "react";
import cardImage from "./assets/dog/card.jpg";
import cardUpImage from "./assets/dog/card_up.png";
import "./App.css";
import Card from "./components/Card";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="App">
      <div className="main">
        <Card image_card={cardImage} img_up={cardUpImage} />
      </div>
      <Menu/>
    </div>
  );
}

export default App;
