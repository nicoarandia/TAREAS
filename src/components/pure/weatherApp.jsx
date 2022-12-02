import React,{useState, useEffect } from 'react';
import WeatherMainInfo from '../container/weatherMainInfo';
import WeatherForm from './form/weatherForm';

import styles from '../../style/weatherApp.modulo.css'
import Loading from './loading';

const WeatherApp = () => {

    const [weather, setWeather] = useState(null);
    
    useEffect(() => {
        
        loadInfo();
        
    }, []);

    useEffect(() => {
        document.title = `Weather | ${weather?.location.name ?? "" } ` 
    }, [weather]);
    
    async function loadInfo(city="london" ){
        
        try {
            const request = await fetch(
                `http://api.weatherapi.com/v1/current.json?key=4d983e19933441ffa4a134524220112&q=${city}&aqi=no`
                );
            const json =await request.json();
            console.log(json)
            setTimeout(() => {
                setWeather(json);

            },2000 )
            
        } catch (error) {
            alert(`error no se hizo el pedido, el error es =  ${error}`)
            
        }
    }
    
    function handleChangeCity(city){
        setWeather(null);
        loadInfo(city);
    }

    return (
        <div >
            <div className={styles.weatherContainer}>

                <WeatherForm onChangeCity={handleChangeCity}  />
                {weather ? 
                <WeatherMainInfo weather={weather} />
                :
                <Loading/>
                }
            </div>
        </div>
    );
}

export default WeatherApp;
