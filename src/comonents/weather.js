import React, { useEffect, useState } from 'react'
import "./weather.css"
import Temp from './temp'

const Weather = () => {
    const [loc,setLoc]=useState("jaipur");
    const [obj,setObj]=useState("");

    const getWeather = async () => {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&units=metric&appid=0b8ad2fe23a75e129639b88871a75453`
            const res = await fetch(url)
            const data = await res.json()
           
            const { temp, humidity, pressure } = data.main;
            const { description: weathermood } = data.weather[0];
            const { name } = data;
            const { speed } = data.wind;
            const { country, sunset } = data.sys;
      
            const myNewWeatherInfo = {
              temp,
              humidity,
              pressure,
              weathermood,
              name,
              speed,
              country,
              sunset,
            };
      
            setObj(myNewWeatherInfo);
            
        } catch (error) {
            console.log("invalid api")
        }
    }
useEffect(()=>{getWeather()},[])
console.log();
    return (
        <div className='container'>
            <div className='search-bar' >
                <input className='search' type="Search" onChange={(e)=>{setLoc(e.target.value)}} placeholder='city name' /><input type="button" className='btn' value="Search" onClick={() => getWeather()} />
            </div>
            <Temp {...obj}  />
        </div>
    )
}
export default Weather