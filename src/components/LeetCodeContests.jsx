import React, { useEffect, useState } from "react";
import Contest from "./LeetCodeComponent";

function LeetCodeContests() {
  const [contests, setContests] = useState([]);
  useEffect(() => {
    const fetchContestData = async () => {
      const apiKey = import.meta.env.VITE_KEY;
      if (!apiKey) {
        console.error(
          "API Key not found. Please set the SCRAPINGBEE_API_KEY environment variable."
        );
        return;
      }
      const scrapingBeeURL = `https://app.scrapingbee.com/api/v1?api_key=${apiKey}&url=https://leetcode.com/contest/`;
      try {
        const response = await fetch(scrapingBeeURL);
        const htmlText = await response.text();
        // Parse the HTML response
        const parser = new DOMParser();
        const doc = parser.parseFromString(htmlText, "text/html");
        // Extract the contests data
        const contests = [];
        const contestElements = doc.querySelectorAll("a.w-full");
        if (contestElements.length >= 3) {
          contestElements.forEach((element) => {
            const title = element.textContent.trim();
            const link = element.href;
            const match = title.match(
              /Starts in (\d+d \d+h \d+m \d+s)?(Weekly Contest \d+|Biweekly Contest \d+)(.+)$/
            );
            if (match) {
              const [, countdown, contestType, date] = match;
              contests.push({
                countdown: countdown || "N/A",
                contestType: contestType.trim(),
                date: date.trim(),
                link,
              });
            }
          });
        }
        setContests(contests);
        console.log("Formatted Contests:", contests); // For debugging
      } catch (err) {
        console.error("Error fetching contest data:", err);
      }
    };
    fetchContestData();
  }, []);
  return (
    <>
      {contests.map((contest, index) => (
        <Contest
          key={index}
          platform="leetcode"
          title={contest.contestType}
          date={contest.date}
          countdown={contest.countdown}
          link={contest.link}
        />
      ))}
    </>
  );
}

export default LeetCodeContests;
