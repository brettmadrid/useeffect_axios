import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Initialize state to hold the image URL
  const [nasaPic, setnasaPic] = useState("");
  useEffect(() => {
    // This axios GET request will return a single image
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15")
      // Which we then set to state
      .then(res => {
        console.log('res data', res.data)
        setnasaPic(res.data.hdurl)
      })
      // Always include error handling
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="App">
      <h1>Nasa Pic</h1>
      <img src={nasaPic} alt="a Nasa pic" />
    </div>
  );
}

export default App;
