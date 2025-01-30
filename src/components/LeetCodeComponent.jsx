import React, { useEffect, useState } from "react";
import leetCodeLogo from "../assets/leetcode-white-bg.png";
import "./Contest.css";

function Contest(props) {
  const [timeLeft, setTimeLeft] = useState("");

  const countdownParts = props.countdown.split(" ");
  const date = Number(countdownParts[0].replace("d", ""));
  const hrs = Number(countdownParts[1].replace("h", ""));
  const mins = Number(countdownParts[2].replace("m", ""));
  const duration = date * 24 * 60 * 60 + hrs * 60 * 60 + mins * 60;

  useEffect(() => {
    let countdownTimer = duration;
    const intervalId = setInterval(() => {
      if (countdownTimer < 0) {
        clearInterval(intervalId);
        setTimeLeft("00d 00h 00m 00s");
        return;
      }

      const days = String(Math.floor(countdownTimer / (24 * 60 * 60))).padStart(
        2,
        "0"
      );
      const hours = String(
        Math.floor((countdownTimer % (24 * 60 * 60)) / (60 * 60))
      ).padStart(2, "0");
      const minutes = String(
        Math.floor((countdownTimer % (60 * 60)) / 60)
      ).padStart(2, "0");
      const seconds = String(countdownTimer % 60).padStart(2, "0");

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      countdownTimer--;
    }, 1000);

    return () => clearInterval(intervalId);
  }, [duration]);

  return (
    <div className="contest">
      <div className="data">
        <div className="heading">
          <img src={leetCodeLogo} className="small" alt="LeetCode Logo" />
          <h3>{props.title}</h3>
        </div>
        <table className="btw">
          <tbody>
            <tr>
              <td>Date</td>
              <td>:</td>
              <td>{props.date}</td>
            </tr>
            <tr>
              <td>Before Start</td>
              <td>:</td>
              <td>{timeLeft}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Contest;
