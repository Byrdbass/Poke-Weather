import './get-weather-btn.css';
import getCityWeather from '../../Helpers/fetchWeather';

export default function GetWeatherBtn() {
    return (
        <div className="weather-btn-outer-div">
            <div className="weather-btn-inner-div">
                {/* AFTER WEATHER IS PLACED IN SEARCH FIELD, CHANGE THIS FUNCTION */}
                <button className="weather-btn" onClick={getCityWeather}>
                    Fetch Weather
                </button>
            </div>
        </div>
    )
}