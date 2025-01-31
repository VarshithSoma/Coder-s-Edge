# Coding Contest Data Fetcher

This project fetches contest and problem data from **CodeChef**, **CodeForces**, and **LeetCode** using either web scraping or available APIs. It also includes a CORS proxy setup to bypass cross-origin restrictions while making requests.

## Features

- Fetch upcoming and ongoing contests from CodeChef, CodeForces, and LeetCode.
- Retrieve problem details for competitive programming practice.
- Bypass CORS restrictions using a proxy.
- Use official/unofficial APIs where possible and scrape data otherwise.

## Finding Endpoints

### CodeChef

- **API or Web Scraping?**
  - CodeChef does not provide an official public API for contests and problems.
  - Used web scraping to extract contest details from their [contests page](https://www.codechef.com/contests).
  - BeautifulSoup in Python or Puppeteer in JavaScript can be used for scraping.

### CodeForces

- **API Available**
  - CodeForces offers an official API at [https://codeforces.com/apiHelp](https://codeforces.com/apiHelp).
  - Used the `contest.list` and `problemset.problems` endpoints to fetch relevant data.

### LeetCode

- **API or Web Scraping?**
  - LeetCode does not provide an official public API for upcoming contests.
  - There is no GraphQL API endpoint for upcoming contest data.
  - Checked the **Network tab** in browser developer tools for potential endpoints, but no API endpoint was found for upcoming contests. All contest data had to be scraped directly from the website.
  - Two methods were used to scrape [LeetCode's contest page](https://leetcode.com/contest/):
    1. **Using ScrapingBee API**:
    2. **Using Puppeteer (Node.js)**: Implemented as described in this [Gist](https://gist.github.com/VarshithSoma/0cda3f37a4df35d631faa79b9a83d2cb).

## Using a CORS Proxy

Since some requests are blocked due to CORS policies, a proxy was used to forward requests:

### CORS Proxy Setup

- Used **CodeTabs CORS Proxy** (`https://cors.codetabs.com/`) to bypass CORS restrictions.
- Example usage:
  ```javascript
  fetch("https://api.codetabs.com/v1/proxy?quest=/https://example.com/api")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error("Error:", error));
  ```
- This allows making requests without needing to set up a custom proxy server.

## Running the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/VarshithSoma/Coder-s-Edge.git
   cd project-name
   ```
2. Install dependencies:
   ```bash
   npm install  # For Node.js setup
   ```
3. Start the main application.

---
