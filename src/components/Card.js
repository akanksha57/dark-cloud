import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloud} from '@fortawesome/free-solid-svg-icons' 

const WeatherCard = ({temperature, humidity, sunrise, sunset, city}) => (
  
  <Card>
    <Card.Content className="weather-card">
      <Card.Header className="city-header">{city}</Card.Header>
      <div className="icon-container">
        <FontAwesomeIcon icon={faCloud} size="xl"/>

      </div>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <h4 className="weather-card-child">{moment().format('lll')}</h4>
            <div className="weather-card">
                <div className="weather-card-child">Temperature: {Math.floor(temperature)}°C</div>
                <div className="weather-card-child">Humidity: {humidity}%</div>
            </div>
            <div className="weather-card">
                <div className="weather-card-child">Sunrise: {new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</div>
                <div className="weather-card-child">Sunset: {new Date(sunset * 1000).toLocaleTimeString('en-IN')}</div>
            </div>             
          </Feed.Content>
        </Feed.Event>        
      </Feed>
    </Card.Content>
  </Card>
)

export default WeatherCard