import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card'
import axios from 'axios';

//`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${process.env.REACT_APP_API_KEY}`

function App() {

  const URL = `https://api.openweathermap.org/data/2.5/onecall`;
  const apiKey = '8b180de800cdfafad683d0c0a039241b'
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [icon, setIcon] = useState('');
  const [forecast, setForecast] = useState([]);
  const [loading, setloading] = useState(true); 

  useEffect(()=> {

    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude); 
      // console.log("Latitude: ", position.coords.latitude)
      // console.log("Longtitude: ", position.coords.longitude)
    });
    
    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=${apiKey}&units=metric`).then((weatherData) => {
      console.log(weatherData.data);
      //setloading(false)
      setTemperature(weatherData.data.current.temp);
      setSunset(weatherData.data.current.sunset)
      setSunrise(weatherData.data.current.sunrise)
      setHumidity(weatherData.data.current.humidity)
      //setCity(weatherData.data.timezone)
      //setIcon(weatherData.data.current.weather[0].main)
      //setForecast(weatherData.data.daily)
    })

  }, [latitude, longitude])
  return (
    <div className="App">
      <Header />
      Welcome to the Weather App! Enter your city to get the weather and plan your day accordingly.

      
      <div class="shadow-lg p-3 mb-5 bg-white rounded container">
      
        <Card 
          temperature={temperature}
          humidity={humidity}
          sunrise={sunrise}
          sunset={sunset}
          city={city}
          icon={icon}

        
        />
      </div>        
    </div>
  );
}

export default App;
