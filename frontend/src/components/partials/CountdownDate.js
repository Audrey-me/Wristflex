import React,{useEffect, useState} from 'react'
import moment from 'moment'


const targetTime = moment("2023-12-01")

const CountdownDate = () => {
    const[currentTime,setCurrentTime] = useState(moment())
    const timeBetween = moment.duration(targetTime.diff(currentTime));

// displays timer every seconds 
    useEffect(()=>{
       const interval = setInterval(()=>{
          setCurrentTime(moment())
        },1000)

        return ()=> clearInterval(interval)
    },[])

  return (
    <div className='countdown-contanier'>
        <div className='countdown-data'><p className='data'>{timeBetween.days()}</p> <p>Days </p> </div>
        <div className='countdown-data'><p className='data'>{timeBetween.hours()} </p><p>Hours </p></div>
        <div className='countdown-data'><p className='data'>{timeBetween.minutes()}</p><p>Mins </p></div>
        <div className='countdown-data no-data'><p className='data data-sec'>{timeBetween.seconds()} </p><p>Secs</p> </div>
      </div>
    
  )
}

export default CountdownDate
