import { useEffect, useState } from 'react'
import './Weather.css'


export const Weather = () =>{
    
    const [city, setCity] = useState('london');
    const [currTemp , setCurrTemp] = useState(29);
    const [sunRise , setSunRise] = useState(29);
    const [sunSet , setsunSet] = useState(29);
    const [minTemp , setMinTemp] = useState(0);
    const [maxTemp , setMaxTemp] = useState(0);
    const [sky, setSky] = useState("cloud");
    const [imgg, setImg] = useState('');
    const [avgRain, setAvgRain] = useState(0);
    const [wind, setWind] = useState(0);
    const [humidity, setHumidity] = useState(0);
    const [nextFive, setNextFive] = useState([])

    useEffect(()=>{
        let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=6&appid=5b2fe86acda81f8761fcf8f70357d4ee&units=metric`
        async function getData() {
            let res = await fetch(url)
            let data = await res.json()
            // let result = await res.json()
            setSunRise(data.list[0].main.temp)
            setsunSet(data.list[0].main.temp)
            setSky(data.list[0].weather[0].description)
            setCurrTemp(data.list[0].main.temp)
            setMaxTemp(data.list[0].main.temp_max)
            setMinTemp(data.list[0].main.temp_min)
            setHumidity(data.list[0].main.humidity)
            setImg(data.list[0].weather[0].icon)
            setWind (Math.ceil(data.list[0].wind.speed * 3.6));
            // setNextFive(data.list)
             console.log(data.list[0]);
        }
        getData()
        
    },[])
    nextFive.splice(0,1)
    return(
        <>
    
            <div className='midCont'>

                <p className='citystate'>New Delhi, India</p>

                <div>
                    <span className='home'>Home </span><span >/ Weather</span>
                </div>
                <hr />
                <hr />
                <hr />
                
                <div className='logo1'>
                        <span >[</span> <span>Weather</span> <span > ]</span>
                </div>
               

               <div className='displayBox'>
                   <div className='part-one'>
                       <div className='day-image'>
                           <div>Today</div>
                           <div>
                               <img src={`http://openweathermap.org/img/wn/${imgg}@2x.png`} alt="" />
                           </div>
                       </div>

                       <div className="current-temp">
                            <span className="todtemp" id="top_temp">{currTemp}</span>
                            <span className="temp-c">C</span>
                        </div>

                        <div className="sky-view">{sky}</div>

                        <div className="temp-min-max">
                            <div className="temp-min">
                            <strong id="top_mintemp">{minTemp}</strong>
                            <div className="tmin">Min</div>
                            </div>
                            <div className="temp-max">
                            <strong id="top_maxtemp">{maxTemp}</strong>
                            <div className="tmax">Max</div>
                            </div>
                        </div>
                            
                   </div>
                   <div className='part-two'>
                       <div>
                           <p style={{marginBottom: "3px"}}>Sun rise</p>
                           <strong className="sunrise-time" id="top_sunrise">05:35 AM</strong>
                           
                           <p  style={{marginTop: "10px"}}>Average rain</p>
                           <p>{avgRain} cm</p>
                       </div>
                       <div>
                            <div>
                                <p style={{marginBottom: "3px"}}>Sun set</p>
                                <strong className="sunset-time" id="top_sunrise">05:35 AM</strong>
                                
                                <p  style={{marginTop: "10px"}}>Max wind</p>
                                <p>{wind}  km/hr</p>
                            </div>
                       </div>
                       <div>
                            <p style={{marginBottom: "3px"}}>Humidity</p>
                            <p>{humidity} %</p>
                       </div>
                    </div>
              
              
              
              
              
               </div>

                {/* <div className='next-five'>
                    {nextFive.map((el,ind)=>{
                        return(
                             <div key={ind} className = 'eachDiv'> 
                             
                             </div>
                        )
                    })}
                </div> */}

            </div>

        </>
    )
}