import React, { useEffect, useState } from "react";
import CodeChefComponent from "./CodeChefComponent";

function CodeChefContests() {
  const [contests, setContests] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // Use a CORS proxy to bypass the CORS issue
      const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // Public proxy service
      const url = `${proxyUrl}https://www.codechef.com/api/list/contests/all?sort_by=START&sorting_order=asc&offset=0&mode=all`;

      try {
        const response = await fetch(url);
        const res = await response.json();

        console.log(res.future_contests);
        if (res.status === "success") {
          const data = res.future_contests; // Assuming 'future_contests' is the correct field in the response
          console.log(data);
          const formattedContests = data.map((contest) => ({
            name: contest.contest_name,
            link: `https://www.codechef.com/contests/${contest.contest_code}`,
            startTime: contest.contest_start_date,
            duration: `${contest.contest_duration} minutes`,
          }));

          setContests(formattedContests);
        } else {
          console.error("Error fetching contests:", res.message);
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
        <CodeChefComponent
          key={index}
          platform="CodeChef"
          name={contest.name}
          link={contest.link}
          startTime={contest.startTime}
          duration={contest.duration}
        />
      ))}
    </>
  );
}

export default CodeChefContests;
