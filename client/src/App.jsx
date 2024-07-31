import "./app.css"
import { useState } from 'react'
import GetWeatherBtn from "./Components/GetWeatherBtn/GetWeatherBtn"
import CitySearch from "./Components/CitySearch/CitySearch"
import WeatherToday from "./Pages/WeatherToday/WeatherToday"
import { WeatherProvider } from "./utils/WeatherProvider"

function App() {

  return (
    <div className="background-home">
      <WeatherProvider >
        <div className="button-div">
          <WeatherToday />
          <CitySearch />
          {/* <GetWeatherBtn /> */}
        </div>
      </WeatherProvider>
    </div>

  )
}

export default App
