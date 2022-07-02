import React from 'react'
import { useState } from 'react';

const Card = ({
  temperature,
  humidity,
  pressure,
  localtime,
  name,
  wind_speed,
  wind_dir,
  country }) => {
  let [time, setTime] = useState()

  let Time = () => {
    setTime(new Date().toLocaleTimeString())
  }

  setTimeout(Time, 1000)

  return (

    <>
      <div className='MainCard'>
        <div className='card1'>
          <div className="date"> {new Date().toLocaleString()} </div>
          <div className="temperature">

            <span className='temp'>{temperature}&deg;</span>
            <span className='sp'> Pressure - {pressure}</span>
            <span className='sp'> Humidity - {humidity}</span>
            <div className='wind'>
              <div>Wind-dir - {wind_dir}</div>
              <div>Wind-Speed - {wind_speed}</div>
            </div>
          </div>
          <div className="weatherIcon">
          </div>
        </div>

        <div className='card2'>
          <div className='city'>
            <div className='name'>{name}</div>
            <div className='name'>{country}</div>
            <div>
              Localtime  <br />{localtime}
            </div>
          </div>
        </div>

      </div>

    </>
  )
}

export default Card