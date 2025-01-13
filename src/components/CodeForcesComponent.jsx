import React from "react";
import codeForcesLogo from "../assets/small-codeforces.png";
import "./Contest.css";

function CodeForcesComponent(props) {
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
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CodeForcesComponent;
