import "./styles.css";
import React, { useState } from "react";

const objectDictionary = {
  "💌": "Love Letter",
  "💣": "Bomb",
  "🧭": "Compass",
  "🌡️": "Thermometer",
  "🎉": "Party Popper",
  "🎎": "Japanese Dolls",
  "🎐": "Wind Chime",
  "🪁": "Kite",
  "📻": "Radio",
  "🧹": "Broom",
  "🧷": "Safety Pin",
  "🛒": "Shopping Cart",
  "🛁": "Bathtub"
};

var objectsData = Object.keys(objectDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function inputHandler(e) {
    var input = e.target.value;
    var meaning = objectDictionary[input];
    if (meaning == undefined) {
      meaning = "Not found in database!!";
    }
    setMeaning(meaning);
  }
  function clickHandler(item) {
    var meaning = objectDictionary[item];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Know your Emoji</h1>
      <input
        placeholder="Enter emoji to know meaning"
        onChange={inputHandler}
      />
      <p id="meaning">Meaning - {meaning}</p>
      <h3>Select object to know meaning</h3>
      <div id="emojiContainer">
        {objectsData.map((item) => {
          return (
            <span onClick={() => clickHandler(item)} key={item}>
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
