import "./app.css"
import { useState } from 'react'
import GetWeatherBtn from "./Components/GetWeatherBtn/GetWeatherBtn"

function App() {

  return (
    <div className="background-home">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, amet autem harum debitis cum illum, esse ab fugiat asperiores voluptatibus dolores excepturi natus culpa architecto praesentium maiores itaque quod corrupti?
      <div className="button-div">
        <GetWeatherBtn />
      </div>
    </div>

  )
}

export default App
