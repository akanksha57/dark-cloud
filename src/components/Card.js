import React from 'react'
import { Card, Feed } from 'semantic-ui-react'
import moment from 'moment'

const WeatherCard = ({temperature, humidity, sunrise, sunset, city, icon}) => (
  <Card>
    <Card.Content>
      <Card.Header>{city}</Card.Header>
    </Card.Content>
    <Card.Content>
      <Feed>
        <Feed.Event>
          <Feed.Content>
            <h4 className="weather-card-child">{moment().format('lll')}</h4>
            <div className="weather-card">
                <div className="weather-card-child">{Math.floor(temperature)}°C</div>
                <div className="weather-card-child">{humidity}%</div>
            </div>
            <div className="weather-card">
                <div className="weather-card-child">{new Date(sunrise * 1000).toLocaleTimeString('en-IN')}</div>
                <div className="weather-card-child">{new Date(sunset * 1000).toLocaleTimeString('en-IN')}</div>
            </div>             
          </Feed.Content>
        </Feed.Event>

        
      </Feed>
    </Card.Content>
  </Card>
)

export default WeatherCard