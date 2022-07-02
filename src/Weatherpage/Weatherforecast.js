import Card from './Card';
import React, { useEffect, useState } from 'react'
import { TextField, Button } from '@mui/material';

function Weatherforecast() {

    const [searchValue, setSearchValue] = useState("bangalore");
    const [tempInfo, setTempInfo] = useState({});

    const getWeatherInfo = async () => {
        try {
            let url = `http://api.weatherstack.com/current?access_key=75715a7d5c2734d450236a857c784444&query=${searchValue}`;

            let res = await fetch(url);
            let data = await res.json();
            console.log(data)

            const { temperature, humidity, pressure } = data.current;
            const { wind_dir } = data.current;
            const { wind_speed } = data.current;
            const { name } = data.location;
            const { localtime } = data.location;
            const { country } = data.location;

            const myNewWeatherInfo = {
                temperature,
                humidity,
                pressure,
                localtime,
                name,
                wind_speed,
                wind_dir,
                country,
            };

            setTempInfo(myNewWeatherInfo);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getWeatherInfo();
    }, []);
    return (

        <>
            <div className="wrap">
                <div className="search">
                    <TextField onChange={(e) => setSearchValue(e.target.value)}
                        className="text"
                        color="error"
                        margin='10px'
                        value={searchValue}
                        autoFocus
                        id="outlined-basic" label="Search..." variant="outlined" /> <br /><br />
                    <Button className="searchButton" onClick={getWeatherInfo} variant="contained">Search</Button>

                </div>
            </div>

            <div>
                <Card {...tempInfo} />
            </div>

        </>
    )
}

export default Weatherforecast