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

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, amet autem harum debitis cum illum, esse ab fugiat asperiores voluptatibus dolores excepturi natus culpa architecto praesentium maiores itaque quod corrupti?
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
