import React, { useEffect, useState } from "react";
import CodeForcesComponent from "./CodeForcesComponent";
function CodeForcesContests() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const url = "https://codeforces.com/api/contest.list?gym=false";
      try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === "OK") {
          const filteredContests = data.result.filter(
            (contest) => contest.phase !== "FINISHED"
          );

          const formattedContests = filteredContests.map((contest) => ({
            name: contest.name,
            link: `https://codeforces.com/contest/${contest.id}`,
            startTime: new Date(
              contest.startTimeSeconds * 1000
            ).toLocaleString(),
            duration: `${contest.durationSeconds / 60} minutes`,
            phase: contest.phase,
          }));

          setContests(formattedContests);
        } else {
          console.error("Error: Unable to fetch contest data.");
        }
      } catch (err) {
        console.error("An error occurred:", err);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once after the component mounts

  return (
    <>
      {contests.map((contest, index) => (
        <CodeForcesComponent
          key={index}
          platform="codeforces"
          name={contest.name}
          link={contest.link}
          startTime={contest.startTime}
          duration={contest.duration}
          phase={contest.phase}
        />
      ))}
    </>
  );
}

export default CodeForcesContests;
