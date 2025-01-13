import React, { useState, useEffect } from "react";
import codeForcesLogo from "../assets/small-codeforces.png";
import "./Contest.css";

function CodeForcesComponent(props) {
  const [timeLeft, setTimeLeft] = useState(0);
  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
  const convertStartTimeToDate = (startTime) => {
    const [date, time] = startTime.split(", ");
    const [day, month, year] = date.split("/");
    const [hours, minutes, seconds] = time.split(":");

    return new Date(year, month - 1, day, hours, minutes, seconds);
  };

  useEffect(() => {
    const contestTime = convertStartTimeToDate(props.startTime).getTime();

    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const diff = contestTime - currentTime;

      if (diff <= 0) {
        clearInterval(timerInterval);
      } else {
        setTimeLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [props.startTime]);

  const handleClick = (myLink) => () => {
    window.location.href = myLink;
  };

  return (
    <div className="contest" onClick={handleClick(props.link)}>
      <div className="data">
        <div className="heading">
          <img src={codeForcesLogo} className="small" alt="CodeForces Logo" />
          <h3>{props.name}</h3>
        </div>
        <table className="btw">
          <tbody>
            <tr>
              <td>Start Time</td>
              <td>:</td>
              <td>{props.startTime}</td>
            </tr>
            <tr>
              <td>Duration</td>
              <td>:</td>
              <td>{props.duration}</td>
            </tr>
            <tr>
              <td>Phase</td>
              <td>:</td>
              <td>{props.phase}</td>
            </tr>
            <tr>
              <td>Countdown</td>
              <td>:</td>
              <td>{formatTime(timeLeft)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CodeForcesComponent;
