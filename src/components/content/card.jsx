import React from 'react';
import '../../style/weatherInfo.css';
import weatherAssets from '../weatherAssets';
import { format } from 'date-fns';

function Card({ weatherData }) {
  const currentDate = new Date(weatherData.dt * 1000);
  const temperatureCelcius = Math.round(weatherData.main.temp - 273.15);
  const minTemperatureCelcius = Math.round(weatherData.main.temp_min - 273.15);
  const maxTemperatureCelcius = Math.round(weatherData.main.temp_max - 273.15);

  let backgroundImage = '';
  let weatherIcon = '';
  weatherAssets.backgrounds.forEach(item => {
    if (weatherData.weather[0].description.includes(item.description)) {
      backgroundImage = `url("${isDay(currentDate) ? item.image.replace('Day', 'Night') : item.image}")`;
      weatherIcon = isDay(currentDate) ? item.icon.replace('Day', 'Night') : item.icon;
    }
  });

  function isDay(date) {
    const hour = date.getHours();
    return hour >= 6 && hour < 18;
  }

  return (
    <div className="container">
      <div className="image-detail blue-light">
        <div className="img" style={{ backgroundImage: backgroundImage }}>
          <div className='info-1'>
            <h1 className="city heading-sm gray-100">{weatherData.name}, {weatherData.sys.country}</h1>
            <p className="day text-xs gray-100">{format(currentDate, 'EEEE, MMM dd, yyyy')}</p>
          </div>
          <div className='info-bottom'>
            <div className='info-2'>
              <h1 className="temperature heading-xl gray-100">{temperatureCelcius}°C</h1>
              <p className="temperature-range heading-sm gray-100">{minTemperatureCelcius}°C / {maxTemperatureCelcius}°C</p>
              <p className="description text-sm gray-100">{weatherData.weather[0].description}</p>
            </div>
            <div className='info-3'>
              <img src={weatherIcon} alt="Weather Icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
