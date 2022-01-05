import React, {useState} from 'react';
import './App.css';
//`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`

function App() {

  const apiKey = '8b180de800cdfafad683d0c0a039241b'
  const [weatherData, setWeatherData] = useState([{}])
  const [city, setCity] = useState('')

  const getWeather = (event) => {
    console.log(weatherData)
      if(event.key === "Enter") {
        fetch(`https://api.openweathermap.org/data/2.5/weather?id=6167865&appid=${apiKey}`).then(
              data=> {
                setWeatherData(data)
                setCity('')
              }
        )
      }
  } 
  return (
    <div className="App">
      <input 
        className="input" 
        type="text" 
        placeholder="Enter Your City"
        onChange={e =>setCity(e.target.value)}
        value={city} 
        onKeyPress={getWeather}
        />
        <br></br> 
        
        {typeof weatherData.main === 'undefined'? (
          <div>
            <p>Welcome to the Weather App! Enter your city to get the weather and plan your day accordingly.</p>
          </div>
        ): (
          <div  className="weather-data">
            <p className="city">{weatherData.name}</p>
            <p className="temp">{Math.round(weatherData.main.temp)}°C</p>
            <p className="weather">{weatherData[0].main}</p>
          </div>
        )}

        {weatherData.cod === "404"? (
          <p>City not found!</p>
        ) : (
          <div></div>
        )
      }
    </div>
  );
}

export default App;
