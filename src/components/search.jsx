import React, { useState } from 'react';
import '../style/search.css';
import Logo from '../assets/Logo.svg';
import WeatherInfo from './weatherInfo';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';

const Search = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');

    const handleSearch = async () => {
        try {
            const response = await fetch(`${WEATHER_API_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}`);
            const data = await response.json();
            console.log('Current Weather Data:', data);
            setWeatherData(data);
        } catch (error) {
            console.error('API request failed:', error);
        }
    };

    const handleLogoClick = () => {
        setWeatherData(null);
        setLocation('');
    }

    return (
        <div className="container-div">
            <div className="header">
                <img className="logo" src={Logo} alt="Weather Logo" onClick={handleLogoClick} />
            </div>
            <div className="container">
                {weatherData ? (
                    <WeatherInfo weatherData={weatherData} />
                ) : (
                    <div className="content-container">
                        <div className="welcome-message">
                            <h1>Welcome to <span style={{ color: "#8FB2F5" }}>TypeWeather</span></h1>
                            <p>Choose a location to see the weather forecast</p>
                        </div>
                        <div className="search-box">
                            <input
                                type="text"
                                placeholder="Search location"
                                value={location}
                                onChange={(event) => setLocation(event.target.value)}
                                onKeyDown={(event) => {
                                    if (event.key === 'Enter') {
                                        handleSearch(); // Enter tuşuna basıldığında arama yap
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;