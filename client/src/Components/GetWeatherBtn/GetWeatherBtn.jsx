import './get-weather-btn.css';

export default function GetWeatherBtn() {
    return (
        <div className="weather-btn-outer-div">
            <div className="weather-btn-inner-div">
                <button className="weather-btn">
                    Fetch Weather
                </button>
            </div>
        </div>
    )
}