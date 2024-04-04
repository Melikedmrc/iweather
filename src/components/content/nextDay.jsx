import React, { useState, useEffect } from 'react';
import '../../style/weatherInfo.css';
import { WEATHER_API_URL, WEATHER_API_KEY } from '../../api';
import weatherAssets from '../weatherAssets';

function NextDay({ weatherData }) {
    const [forecast, setForecast] = useState(null);

    useEffect(() => {
        if (weatherData) {
            const [lat, lon] = [weatherData.coord.lat, weatherData.coord.lon];

            const forecastFetch = fetch(
                `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
            );

            forecastFetch
                .then(async (response) => {
                    const forecastResponse = await response.json();
                    // Sadece bir sonraki 5 günü al
                    const nextFiveDays = groupForecastsByDay(forecastResponse.list).slice(0, 5);
                    setForecast(nextFiveDays);
                })
                .catch(console.log);
        }
    }, [weatherData]);

    const getDayOfWeek = (dt) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const date = new Date(dt * 1000);
        return days[date.getDay()];
    };

    const groupForecastsByDay = (forecasts) => {
        const groupedForecasts = {};
        forecasts.forEach(forecast => {
            const day = new Date(forecast.dt_txt).toLocaleDateString();
            if (!groupedForecasts[day]) {
                groupedForecasts[day] = forecast;
            }
        });
        return Object.values(groupedForecasts);
    };

    const getWeatherIcon = (description) => {
        const weather = weatherAssets.backgrounds.find(item => description.includes(item.description));
        return weather ? weather.icon : '';
    };

    return (
        <div className='next-day'>
            {forecast ? (
                <div className='forecast-col'>
                    {forecast.map((item, index) => (
                        <div key={index} className="day-forecast">
                            <p className='heading-xs gray-200'>{getDayOfWeek(item.dt)}</p>
                            <img src={getWeatherIcon(item.weather[0].description)} alt="Weather Icon" />
                            <div>
                                <p className='heading-xs gray-100'>{Math.round(item.main.temp_min)} °C</p>
                                <p className='heading-xs gray-400'>{Math.round(item.main.temp_max)} °C</p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>

    );
}

export default NextDay;
