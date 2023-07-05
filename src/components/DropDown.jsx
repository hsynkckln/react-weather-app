import React from 'react'
import { useWeather } from '../context/WeatherContext'
import cities from "../components/city.json"
function DropDown() {

    const {setCity}=useWeather();
   
    const DropDownChange=(e)=>{
        setCity(e.target.value)

    }
  return (
    <div className="row drop mt-5">
            <select className="dropdown" onChange={DropDownChange}>
                {cities.map((item,index)=>(
                    <option key={index}>{item.name}</option>
                ))}
            </select>
    </div>
  )
}

export default React.memo(DropDown)