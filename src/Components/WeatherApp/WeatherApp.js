import React, { useState } from 'react'
import "./WeatherApp.css"
import search_icon from "../Assets/search.png"
import clear_icon from "../Assets/clear.png"
import cloud_icon from "../Assets/cloud.png"
import drizzle_icon from "../Assets/drizzle.png"
import rain_icon from "../Assets/rain.png"
import snow_icon from "../Assets/snow.png"
import wind_icon from "../Assets/wind.png"
import humidity_icon from "../Assets/humidity.png"

const WeatherApp = () => {
    const api_key="c93c9e7bd36a9cb67e913e46e803da58"
    const [wicon,setWicon]=useState(cloud_icon)
    const search=async()=>{ 
        console.log("Hello")
        const element=document.getElementsByClassName("cityInput")
        if(element[0].value===""){
            return ;
        }
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`
         let response=await fetch(url);
         let data=await response.json();
         const humidity=document.getElementsByClassName("humidity-percent");
         const wind=document.getElementsByClassName("wind-rate")
         const temp=document.getElementsByClassName("weather-temp")
         const location=document.getElementsByClassName("weather-location")

         humidity[0].innerHTML=data.main.humidity+" %";
         wind[0].innerHTML=data.wind.speed+" km/h";
         temp[0].innerHTML=data.main.temp+" °c";
         location[0].innerHTML=data.name;

         if(data.weather[0].icon==="o1d" || data.weather[0].icon==="01n"){
            setWicon(clear_icon)
         }
        else if(data.weather[0].icon==="o2d" || data.weather[0].icon==="02n"){
            setWicon(cloud_icon)
         }
        else if(data.weather[0].icon==="o3d" || data.weather[0].icon==="03n"){
            setWicon(drizzle_icon)
         }
        else if(data.weather[0].icon==="o4d" || data.weather[0].icon==="04n"){
            setWicon(drizzle_icon)
         }
        else if(data.weather[0].icon==="o9d" || data.weather[0].icon==="09n"){
            setWicon(rain_icon)
         }
        else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n"){
            setWicon(rain_icon)
         }
        else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"){
            setWicon(snow_icon)
         }
         else{
            setWicon(clear_icon)
         }
    }
  return (
    <div className='container'>
      <div className='top-bar'>
        <input type="text" className='cityInput' placeholder='search' />
        <div className='search-icon'>
            <img src={search_icon} alt="" onClick={()=>{search()}}/>
        </div>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt="" />
      </div>
      <div className='weather-temp'>24°c</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
          <img src={humidity_icon} alt=""  className='icon'/>
          <div className='data'>
          <div className='humidity-percent'>64%</div>
          <div className='text'>Humidity</div>
          </div>
        </div>
        <div className='element'>
            <img src={wind_icon} alt="" className='icon'/>
            <div className='data'>
            <div className='wind-rate'>18km/h</div>
          <div className='text'>Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherApp
