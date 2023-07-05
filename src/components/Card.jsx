import React, { useEffect, useState } from 'react'
import { useWeather } from '../context/WeatherContext'
function Card() {
    const {weather}=useWeather();
    const [day,setDay]=useState()
    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    useEffect(()=>{
        setDay(daysOfWeek)
        
    },[weather])

    const icon_src = `http://openweathermap.org/img/w/`

  return (
    <div className="row">
            {
                weather.map((items,index)=>
                    items.weather.map((weatherItem)=>(
                        <div key={index} className="card" style={{background:"secondary"}}>
                            <div  className="card-body">
                                <h5 className='text-center'>{day[index]}</h5>
                                <img style={{width:"100px"}} src={icon_src + weatherItem.icon + ".png"} alt={icon_src} />
                                
                            </div>
                            <div className="card-footer">
                                <h6 >{items.main.temp_max}C - {items.main.temp_min}C</h6>
                            </div>
                        </div>
                    ))
                    
                )
            }
        </div>
  )
}

export default React.memo(Card)