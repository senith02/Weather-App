import React,{useState} from "react"
import axios from "axios";
import "./App.css";

function App() {
  const url = 'https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=e7bc1994426c649b2bbbb5465d1023f8';

  return (
    <div className="app">
      <div className="container">
        <div className="top">
          <div className="location">
            Nugegoda
            </div>
          <div className="temp">
            <h2>65F</h2>
          </div>
          <div className="description">
            <p>clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>65F</p>
          </div>
          <div className="humidity">
            <p>80%</p>
          </div>
          <div className="wind">
            <p>120mph</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
