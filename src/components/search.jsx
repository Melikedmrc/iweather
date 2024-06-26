import React, { useState , useEffect } from 'react';
import '../style/search.css';
import Logo from '../assets/Logo.svg';
import WeatherInfo from './weatherInfo';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../api';

const Search = () => {

    const [weatherData, setWeatherData] = useState(null);
    const [location, setLocation] = useState('');
    const [error, setError] = useState('');
    const [currentLocation, setCurrentLocation] = useState('');
    const [countryCode, setCountryCode] = useState('');

    useEffect(() => {
        console.log('Current Location:', currentLocation); 
    }, [currentLocation]);


    
    const handleSearch = async () => {
        try {
            const response = await fetch(`${WEATHER_API_URL}/weather?q=${location}&appid=${WEATHER_API_KEY}`);
            if (!response.ok) {
                throw new Error('Invalid city name. Please enter a valid city name.');
            }
            const data = await response.json();
            console.log('Current Weather Data:', data);
            setWeatherData(data);
            setError('');
            setCountryCode(data.sys.country); // Ülke kodunu ayarla
        } catch (error) {
            console.error('API request failed:', error);
            setError(error.message); // Hata mesajını ayarla
        }
    };

    const handleLogoClick = () => {
        setWeatherData(null);
        setLocation('');
        setError('');
        setCurrentLocation('');
        setCountryCode('');
    };

    const handleInputClick = () => {
        if (!currentLocation && navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                async (position) => {
                    try {
                        const { latitude, longitude } = position.coords;
                        const response = await fetch(`${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`);
                        if (!response.ok) {
                            throw new Error('Weather data not found for current location');
                        }
                        const data = await response.json();
                        setCurrentLocation(data.name + ', ' + data.sys.country); // Şehir ve ülke kodunu ayarla
                        setError('');
                    } catch (error) {
                        console.error('API request failed:', error);
                        setError(error.message);
                    }
                },
                (error) => {
                    console.error('Geolocation error:', error);
                    setError('Geolocation error. Please allow location access.');
                }
            );
        }
    };

    const handleShowWeatherInfo = async () => {
        if (currentLocation) {
            try {
                const response = await fetch(`${WEATHER_API_URL}/weather?q=${currentLocation}&appid=${WEATHER_API_KEY}`);
                if (!response.ok) {
                    throw new Error('Weather data not found for current location');
                }
                const data = await response.json();
                setWeatherData(data);
                setError('');
            } catch (error) {
                console.error('API request failed:', error);
                setError(error.message);
            }
        }
    };
    
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
                                onClick={handleInputClick}
                            />
                            {error && <p className="error-message text-sm">{error}</p>} {/* Hata mesajını göster */}
                            {currentLocation && !location && 
                            <p className="current-location text-md" onClick={handleShowWeatherInfo}>{currentLocation} {countryCode}</p>}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
