import React, { createContext, useState, useContext, useEffect } from 'react';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY || process.env.VITE_WEATHER_API_KEY;

const WeatherContext = createContext();
export function useWeather() {
    return useContext(WeatherContext)
}

export const WeatherProvider = ({ children }) => {

    const [weatherToday, setWeatherToday] = useState({
        url: 'https://api.openweathermap.org/data/2.5/weather?q=', //+ cityName + '&units=imperial&appid=' + apiKey,
        //TODO - default city name to grabbing someone's location
        cityName: "austin",
        iconSrc: "",
        temp: undefined,
        windSpeed: '',
        lat: '',
        lon: '',
        
    })

    useEffect(() => {
        fetch(`${weatherToday.url}${weatherToday.cityName}&units=imperial&appid=${apiKey}`)
        .then(function (response) {
            // console.log(response);
            return response.json();
        })
        .then( (data) => {
            console.log(data)
            setWeatherToday(prev => ({
                ...prev,
                iconSrc: `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`,
                temp: data.main.temp
            }))
        })
    }, [weatherToday.cityName])

    return <WeatherContext.Provider value = {{
        weatherToday, setWeatherToday
    }}>
        {children}
    </WeatherContext.Provider> 
}
