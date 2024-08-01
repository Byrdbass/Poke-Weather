import React, { createContext, useState, useContext, useEffect } from 'react';

const apiKey = import.meta.env.VITE_WEATHER_API_KEY || process.env.VITE_WEATHER_API_KEY;

const WeatherContext = createContext();
export function useWeather() {
    return useContext(WeatherContext)
}

export const WeatherProvider = ({ children }) => {

    const [location, setLocation] = useState(null);
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
        if (navigator.geolocation){
            navigator.geolocation.getCurrentPosition(success, error)
        }
        else{
            setLocation(weatherToday.cityName)
        }
        function success(location){
            console.log(location)
        }
        function error() {
            console.log("Unable to retrieve your location");
          }
    }, [])


    //TODO : try to fit in other api call here 
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

    //FUNCTIONS TO UPDATE PROVIDER VALUES
    const updateCityName = (newCity) => {
        setWeatherToday(prev => ({
            ...prev, 
            cityName: newCity
        }))

    }


    return <WeatherContext.Provider value = {{
        weatherToday, setWeatherToday,
        updateCityName
    }}>
        {children}
    </WeatherContext.Provider> 
}
