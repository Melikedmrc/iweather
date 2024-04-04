import React from 'react';
import '../style/weatherInfo.css';
import Card from './content/card';
import WeatherDetail from './content/weatherDetail';
import NextDay from './content/nextDay';

function weatherInfo({ weatherData }) {
    return (
        <div className='container'>
            <Card weatherData={weatherData} />
            <WeatherDetail weatherData={weatherData} />
            <NextDay weatherData={weatherData} />
        </div>
    );
}

export default weatherInfo;
