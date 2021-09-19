import React, { useState } from "react"

export default function App() {
  const [days, setDays] = useState(null)
  const [hours, setHours] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [seconds, setSeconds] = useState(null)
  const [nextYear] = useState(new Date().getFullYear() + 1)

  const intervalFunction = () => {
    var countDownDate = new Date(`Jan 1, ${nextYear} 00:00:00`).getTime()
    var now = new Date().getTime()
    var distance = countDownDate - now
      
    setDays(Math.floor(distance / (1000 * 60 * 60 * 24)))
    setHours(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
    setMinutes(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)))
    setSeconds(Math.floor((distance % (1000 * 60)) / 1000))

    if (distance < 0) {
      clearInterval(interval)
    }
  }
  setTimeout(() => {
    intervalFunction()
  }, 1)
  const interval = setInterval(() => {
    intervalFunction()
  }, 1000) 

  return (
    <div className="App">
      <h1>Countdown Timer</h1>
      <div className="timer">
        <div className="container">
          <div className="elements">
            <p>{days}</p>
            <span>days</span>
          </div>
        </div>
        <div className="container">
          <div className="elements">
            <p>{hours}</p>
            <span>hours</span>
          </div>
        </div>
        <div className="container">
          <div className="elements">
            <p>{minutes}</p>
            <span>minutes</span>
          </div>
        </div>
        <div className="container">
          <div className="elements">
            <p>{seconds}</p>
            <span>seconds</span>
          </div>
        </div>
      </div>
      <p>Happy New Year, { new Date().getFullYear() + 1 }!</p>
      <small>This countdown accurately measures the days from now until the end of the year you are in!</small>
    </div>
  )
}