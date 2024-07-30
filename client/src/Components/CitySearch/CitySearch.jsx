import './city-search.css'
import { useState } from 'react';
import { useWeather } from '../../utils/WeatherProvider'

export default function CitySearch() {

    const [ newCity, setNewCity] = useState()
    const { weatherToday, updateCityName } = useWeather();

    const handleNewCity = (e) => {
        setNewCity(e.target.value);
    }
    const handleCityNameChange = () => {
        updateCityName(newCity);
    }

    return(
        <div className="city-search-outer-div">
            <input 
            type="text" 
            className="city-search-input" 
            placeholder='Enter city name'
            value={newCity}
            onChange={handleNewCity}
            />
            <button className="city-search-btn"
            onClick={handleCityNameChange}
            >
                Search Weather
            </button>
        </div>
    )
}