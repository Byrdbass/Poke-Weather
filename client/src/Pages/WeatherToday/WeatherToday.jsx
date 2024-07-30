import './weather-today.css'

import { useState, useEffect } from 'react'
import { useWeather } from '../../utils/WeatherProvider'
import getCityWeather from '../../Helpers/fetchWeather'


export default function WeatherToday() {
    const { weatherToday } =  useWeather()

    const [weatherData, setWeatherData] = useState()
    const [weatherIcon, setWeatherIcon] = useState('')

    useEffect(() => {
        setWeatherData(getCityWeather)
        // setWeatherIcon(weatherData.weather[0])
        // console.log(weatherData)
    }, [])


    return (
        <div className="weather-today-outer-div">
            <div>{weatherToday.temp}</div>
            <img src={weatherToday.iconSrc} alt="" />
        </div>
    )
}