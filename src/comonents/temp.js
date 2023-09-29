import React, { useState, useEffect } from 'react'
import Time from './time.js'
const Temp = ({
    temp,
    humidity,
    pressure,
    weathermood,
    name,
    speed,
    country,
    sunset,
}) => {
    const [weatherState, setWeatheState] = useState("");
    const [key, setKey] = useState("C");
    const [tempValue, setTempValue] = useState("");
    useEffect(() => {
        if (weathermood) {
            switch (weathermood) {
                case "clouds":
                    setWeatheState("wi-day-cloudy");
                    break;
                case "haze":
                    setWeatheState("wi-day-haze");
                    break;
                case "clear":
                    setWeatheState("wi-day-sunny");
                    break;
                case "mist":
                    setWeatheState("wi-dust");
                    break;

                default:
                    setWeatheState("wi-day-sunny");
                    break;
            }
        }
    }, [weathermood]);

    const convert = (id) => {
        switch (id) {
            case "C":
                setTempValue((temp * 9 / 5) + 32);
                setKey("F");
                break;
            case "F":
                setTempValue((tempValue - 32) * 5 / 9);
                setKey("C");
                break;
            default: setTempValue(temp)
                setKey("C")
        }
    }
    useEffect(() => { setTempValue(temp) }, [temp]);
    // converting the seconds into time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;
    return (
        <div className='card'>
            <div className='icon'>
                <i className={` wi ${weatherState}`}></i>
            </div>
            <div className='detail'>
                <div className='wedgit'>
                    <h1 id={key} onClick={() => convert(key)}>{parseInt(tempValue)}&deg;{key}</h1>
                    <div>
                        <p className='temp'>{weathermood} </p>
                        <p className='loc'>{name},{country}</p>
                    </div>
                </div>
                <Time />
            </div>
            <div className='forcast'>
                <div className='fa'>
                    <div className='fai'>
                        <p className='fa1'>
                            <i className={" fa1 wi wi-sunset"}></i><br />
                        </p>
                        <p>{timeStr} PM<br /> Sunset</p>
                    </div>
                </div>
                <div className='fa'>
                    <div className='fai'>
                        <p className='fa1'>
                            <i className={"fa1 wi wi-humidity"}></i><br />
                        </p>
                        <p>{humidity}<br /> Humidity</p>
                    </div>
                </div>
                <div className='fa'>
                    <div className='fai'>
                        <p className='fa1'>
                            <i className={"fa1 wi wi-rain"}></i><br />
                        </p>
                        <p>  {pressure}<br /> Pressure</p>
                    </div>
                </div>
                <div className='fa'>
                    <div className='fai'>
                        <p className='fa1'>
                            <i className={"fa1 wi wi-strong-wind"}></i><br />
                        </p>
                        <p>  {speed}<br /> Speed</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Temp