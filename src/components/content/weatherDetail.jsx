import React from 'react';
import '../../style/weatherInfo.css';
import { ThermometerSimple, CloudRain, Wind, Drop, SunDim } from "@phosphor-icons/react";

function WeatherDetail({ weatherData }) {

    const thermalSensationCelsius = Math.round(weatherData.main.feels_like - 273.15);
    const windSpeed = Math.round(weatherData.wind.speed);

    return (
        <div className="container">
            <div className="weather-detail gray-800">
                <div className="weather-info gray-200">
                    <ThermometerSimple size={24} color="#3B3B54" />
                    <span className="align-left heading-xs">Thermal sensation</span>
                    <span className="align-right">{thermalSensationCelsius}°C</span>
                </div>
                <div className="weather-info gray-200">
                    <CloudRain size={24} color="#3B3B54" />
                    <span className="align-left heading-xs">Probability of rain</span>
                    <span className="align-right">{weatherData.clouds.all}%</span>
                </div>
                <div className="weather-info gray-200">
                    <Wind size={24} color="#3B3B54" />
                    <span className="align-left heading-xs">Wind speed</span>
                    <span className="align-right">{windSpeed}km/h</span>
                </div>
                <div className="weather-info gray-200">
                    <Drop size={24} color="#3B3B54" />
                    <span className="align-left heading-xs">Air humidity</span>
                    <span className="align-right">{weatherData.main.humidity}%</span>
                </div>
                <div className="weather-info gray-200 no-border">
                    <SunDim size={24} color="#3B3B54" />
                    <span className="align-left heading-xs">UV Index</span>
                    <span className="align-right">{weatherData.uvi}</span>
                </div>
            </div>
        </div>

    );
}

export default WeatherDetail;
