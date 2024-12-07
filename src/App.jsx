import React,{useState} from "react"
import axios from "axios";
import "./App.css";

function App() {
  const[data, setData] = useState({})
  const[location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=e7bc1994426c649b2bbbb5465d1023f8`;

  const searchLocation =(event) => {
    if(event.key === 'Enter'){
      axios.get(url).then((response) =>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  const kelvinToCelsius = (kelvin) => {
    return (kelvin - 273.15).toFixed(2);
  };

  return (
    <div className="app">
      <div className="search">
      <input 
      value={location}
      onChange={event=>setLocation(event.target.value)}
      onKeyPress={searchLocation}
      type="text" 
      placeholder="Enter Location" ></input>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p className="bold">{data.name}</p>
            </div>
          <div className="temp">
          {data.main ? <h1>{kelvinToCelsius(data.main.temp)}°C</h1> : null}
          </div>
          <div className="description">
          {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
          {data.main ? <p className="bold">{kelvinToCelsius(data.main.feels_like)}°C</p> : null}
            <p>Feels Like</p>
          </div>
          <div className="humidity">
          {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
            <p>Humidity</p>
          </div>
          <div className="wind">
          {data.wind ? <p className="bold">{data.wind.speed} m/s</p> : null}
            <p>Wind Speed</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default App
