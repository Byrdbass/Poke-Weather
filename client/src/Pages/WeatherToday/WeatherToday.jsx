import './weather-today.css'

import { useState, useEffect } from 'react'
import { useWeather } from '../../utils/WeatherProvider'
import getCityWeather from '../../Helpers/fetchWeather'


export default function WeatherToday() {
    const { weatherToday } = useWeather()

    const [cityNameCap, setCityNameCap] = useState(weatherToday.cityName)
    // const [weatherData, setWeatherData] = useState()
    // const [weatherIcon, setWeatherIcon] = useState('')

    //TODO: move to helper function and folder
    useEffect(() => {
        const capFirstLetter = (city) => {
            if (city && city.length > 0) {
                return city.charAt(0).toUpperCase() + city.slice(1);
            }
            return city;
        }

        if (weatherToday.cityName) {
            setCityNameCap(capFirstLetter(weatherToday.cityName));
        }
    }, [weatherToday.cityName])


    return (
        <div className="weather-today-outer-div">
            <div className="city-name">Today's Weather in {cityNameCap}</div>
            <div>{weatherToday.temp}</div>
            <img src={weatherToday.iconSrc} alt="" />
        </div>
    )
}