import './weather-today.css'

import { useState, useEffect } from 'react'

import getCityWeather from '../../Helpers/fetchWeather'


export default function WeatherToday() {
    const [weatherData, setWeatherData] = useState()
    const [weatherIcon, setWeatherIcon] = useState('')

    useEffect(() => {
        setWeatherData(getCityWeather)
        // setWeatherIcon(weatherData.weather[0])
        console.log(weatherData)
    }, [])


    return (
        <div className="weather-today-outer-div">
            <div>{weatherData}</div>
            <img src={weatherIcon} alt="" />
        </div>
    )
}