import React, { useState } from 'react';
import '../style/home.css';
import Logo from '../assets/Logo.svg'; 

const Home = () => {

    const [weatherData, setWeatherData] = useState('')
    const [location, setLocation] = useState(null)

    const handleSearch = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=7b8db7a1c1fc9df36357e555ea08f604`);
            const data = await response.json();
            console.log(data); 
            setWeatherData(data);
        } catch (error) {
            console.error('API request failed:', error);
        }
    };


    const handleInputChange= (event)=>{
        setLocation(event.target.value);
    };

    const handleKeyDown =(event)=>{
        if(event.key==='Enter'){
            handleSearch();
        }
    }

    return (
        <div className="container-div">
            <div className="header">
                <img className="logo" src={Logo} alt="Weather Logo" />
            </div>
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
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown} />
                </div>
            </div>
        </div>
    );
}

export default Home;
