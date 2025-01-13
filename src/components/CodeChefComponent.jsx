import React, { useState, useEffect } from "react";
import codecheflogo from "../assets/small-codechef.png";
import "./Contest.css";

function CodeChefComponent(props) {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const contestTime = new Date(props.startTime).getTime(); // Convert contest start time to timestamp
    const timerInterval = setInterval(() => {
      const currentTime = new Date().getTime();
      const diff = contestTime - currentTime; // Calculate time difference

      if (diff <= 0) {
        clearInterval(timerInterval); // Stop the timer when the contest starts
      } else {
        setTimeLeft(diff); // Update the time left
      }
    }, 1000); // Update every second

    return () => clearInterval(timerInterval); // Cleanup interval on component unmount
  }, [props.startTime]);

  const formatTime = (time) => {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  const handleClick = (myLink) => () => {
    window.location.href = myLink;
  };

  return (
    <div className="contest" onClick={handleClick(props.link)}>
      <div className="data">
        <div className="heading">
          <img src={codecheflogo} className="small" alt="CodeForces Logo" />
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

export default CodeChefComponent;
