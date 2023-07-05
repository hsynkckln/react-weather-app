import { createContext,useContext,useEffect,useState} from "react";
import axios from "axios";


const WeatherContext=createContext();

export const WeatherProvider=({children})=>{

    const [city,setCity]=useState("Ankara");
    const [weather,setWeather]=useState([])

    useEffect(()=>{
        const key = "e08f0a0055a119fc166b58d4b59aa049"
        axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${key}&units=metric&lang=tr&cnt=7`)
        .then(res=>{
            setWeather(res.data.list)
            console.log(res.data);
        })
        
    },[city])

    const values={
        city,setCity,weather,setWeather
    }


    return <WeatherContext.Provider value={values}>{children}</WeatherContext.Provider>
}


export const useWeather=()=>useContext(WeatherContext);