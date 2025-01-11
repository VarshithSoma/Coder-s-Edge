import { useState } from "react";
import Header from "./components/Header";
import Contest from "./components/Contest";
import "./App.css";

function App() {
  return (
    <div className="parent">
      <Header></Header>
      <h3>Upcoming Contests</h3>
      <Contest
        platform="leetcode"
        title="LeetCode Biweekly Contest 105"
        date="2025-01-14T15:00:00"
      />
      <Contest
        platform="codechef"
        title="CodeChef January Challenge"
        date="2025-01-15T12:00:00"
      />
      <Contest
        platform="codeforces"
        title="CodeForces Round 900"
        date="2025-01-16T18:30:00"
      />
      <Contest
        platform="leetcode"
        title="weekly-contest-432"
        date="2015-03-25T00:00:00"
      />
    </div>
  );
}

export default App;
