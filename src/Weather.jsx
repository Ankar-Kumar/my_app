import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
// import Clock from './Clock'

const WeatherStyle=styled.div`
.box {
    width: auto;
    position: absolute;
    top: 50%;
    padding:5px 3px;
    left: 50%;
    transform: translate(-50%, -50%);
    border:2px solid red;
    text-align:center;
    background:green;
    border-radius: 10px;
  }
  .box input[type="submit"] {
    background: transparent;
    
    color: #fff;
    background: #03a9f4;
    padding: 9px 18px;
    border-radius: 5px;
    font-size: 14px;
  }
  .box input[type="submit"] {
    background: transparent;
    border: none;
    outline: none;
    color: #fff;
    background: #03a9f4;
    padding: 9px 18px;
    border-radius: 5px;
    font-size: 14px;
  }


`

export default function Weather() {
    const [city, setcity] = useState(null)
    const [search, setsearch] = useState("Dhaka")
    useEffect(()=>{
        const fetchApi= async()=>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=56c6ebf76fffc33698398004b9dbf5cb`
            const response=await fetch(url)
            const resjson=await response.json()
           // console.log(resjson);
            setcity(resjson.main);

        }
        fetchApi();
    },[search])
  return (
    <WeatherStyle>
      {/* <Clock/> */}
       <div className='box'>
           <br/><br/>
           <div className='inputData'>
           <input type='search'
           className='inputField'
           placeholder='location name'
           onChange={(event)=>{setsearch(event.target.value)}}/>
           </div><br/>
           {
               !city ?(<p>no data</p>):
               (
                   <div className='info'>
                     <h2 className='location'>{search}</h2>
                     <h1 className='temp'>{city.temp}°C</h1>
                     <h3>min:{city.temp_min}°C max:{city.temp_max}°C </h3>  
                   </div>
               )
           }        
        </div>

    </WeatherStyle>
  )
}
