import { useState } from "react";
import Header from "./components/Header";
import LeetCodeContests from "./components/LeetCodeContests";
import CodeForcesContests from "./components/CodeForcesContests";
import CodeChefContests from "./components/CodeChefContests";
import { Analytics } from "@vercel/analytics/react";
import "./App.css";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState("CodeChef");
  // eslint-disable-next-line no-unused-vars
  const [isLoading, setIsLoading] = useState(false);

  const handlePlatformChange = (platform) => {
    setSelectedPlatform(platform);
    setIsLoading(true);

    // Simulate API fetch time
    setTimeout(() => {
      setIsLoading(false); // Remove the loading state after fetching data
    }, 2000); // Adjust this timeout to simulate fetch duration
  };

  return (
    <>
      <div className="parent">
        <Header />
        <div className="buttons">
          <p className="upcoming-contests-text">Upcoming Contests</p>
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

        <span
          className="contest-container"
          style={{
            display: selectedPlatform === "CodeChef" ? "block" : "none",
          }}
        >
          <CodeChefContests />
        </span>
        <span
          className="contest-container"
          style={{
            display: selectedPlatform === "LeetCode" ? "block" : "none",
          }}
        >
          <LeetCodeContests />
        </span>
        <span
          className="contest-container"
          style={{
            display: selectedPlatform === "CodeForces" ? "block" : "none",
          }}
        >
          <CodeForcesContests />
        </span>
      </div>
      <Analytics />
    </>
  );
}

export default App;
