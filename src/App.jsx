import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LeetCodeContests from "./components/LeetCodeContests";
import CodeForcesContests from "./components/CodeForcesContests";
import CodeChefContests from "./components/CodeChefContests";
import "./App.css";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState("CodeChef");
  const [isLoading, setIsLoading] = useState(false);

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
    setIsLoading(true);

    // Simulate API fetch time
    setTimeout(() => {
      setIsLoading(false); // Remove the loading state after fetching data
    }, 1000); // Adjust this timeout to simulate fetch duration
  };

  return (
    <>
      <div className="parent">
        <Header />
        <h3>Next Coding Contests</h3>
        <p>Prepare yourself for the next set of exciting coding challenges.</p>
        <div className="buttons">
          <button
            className={selectedPlatform === "CodeChef" ? "active" : ""}
            onClick={() => handlePlatformChange("CodeChef")}
          >
            CodeChef
          </button>
          <button
            className={selectedPlatform === "LeetCode" ? "active" : ""}
            onClick={() => handlePlatformChange("LeetCode")}
          >
            LeetCode
          </button>
          <button
            className={selectedPlatform === "CodeForces" ? "active" : ""}
            onClick={() => handlePlatformChange("CodeForces")}
          >
            CodeForces
          </button>
        </div>

        {isLoading ? (
          <div className="loading">Loading...</div>
        ) : (
          <>
            {selectedPlatform === "LeetCode" && <LeetCodeContests />}
            {selectedPlatform === "CodeChef" && <CodeChefContests />}
            {selectedPlatform === "CodeForces" && <CodeForcesContests />}
            {selectedPlatform === "" && (
              <>
                <CodeChefContests />
                <LeetCodeContests />
                <CodeForcesContests />
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
