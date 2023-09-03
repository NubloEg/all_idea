import React from 'react';
import cardImage from "./assets/dog/card.jpg"
import cardUpImage from "./assets/dog/card_up.png"
import './App.css';
import Card from './components/Card';

function App() {
  return (
    <div className="App">
     <Card image_card={cardImage} img_up={cardUpImage}/>
    </div>
  );
}

export default App;
