import React, { useEffect, useState } from "react";
import leetCodeLogo from "../assets/small-leetcode.png";
import CodeChefLogo from "../assets/small-codechef.png";
import codeForcesLogo from "../assets/small-codeforces.png";
import "./Contest.css";

function Contest(props) {
  const [timeLeft, setTimeLeft] = useState("");
  const formatDate = (dateString) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Determine the appropriate logo based on the platform
  let logo;
  if (props.platform === "leetcode") {
    logo = leetCodeLogo;
  } else if (props.platform === "codechef") {
    logo = CodeChefLogo;
  } else if (props.platform === "codeforces") {
    logo = codeForcesLogo;
  }

  // Calculate the time left until the contest starts
  useEffect(() => {
    const calculateTimeLeft = () => {
      const contestDate = new Date(props.date); // Convert the date prop to a Date object
      const now = new Date(); // Get the current date and time
      const difference = contestDate - now; // Calculate the time difference in milliseconds

      if (difference > 0) {
        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      } else {
        setTimeLeft("Contest Started!");
      }
    };

    // Update the timer every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(timer);
  }, [props.date]);

  return (
    <div className="contest">
      <img src={logo} alt={`${props.platform} logo`} className="small" />
      <div className="data">
        <h3>{props.title}</h3>
        <div>
          <h3>Date</h3>
          <h3>:</h3>
          <h3>{formatDate(props.date)}</h3>
        </div>
        <div>
          <h3>Before Start</h3>
          <h3>:</h3>
          <h3>{timeLeft}</h3>
        </div>
      </div>
    </div>
  );
}

export default Contest;
