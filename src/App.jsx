import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import LeetCodeContests from "./components/LeetCodeContests";
import "./App.css";
import CodeForcesContests from "./components/CodeForcesContests";
function App() {
  return (
    <div>
      <div className="parent">
        <Header />
        <h3>Next Coding Contests</h3>
        <p>Prepare yourself for the next set of exciting coding challenges.</p>
        <LeetCodeContests></LeetCodeContests>
        <CodeForcesContests></CodeForcesContests>
      </div>
    </div>
  );
}

export default App;
