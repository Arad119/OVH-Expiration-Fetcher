require("dotenv").config();

const fs = require("fs");
const express = require("express");
const ovh = require("ovh")({
  endpoint: process.env.OVH_ENDPOINT,
  appKey: process.env.APP_KEY,
  appSecret: process.env.APP_SECRET,
  consumerKey: process.env.CONSUMER_KEY,
});

const app = express();

let ovhData = null;

// Function to fetch information from OVH API and save it locally
const fetchOVHInfo = async () => {
  try {
    ovh.request(
      "GET",
      `/vps/${process.env.VPS_NAME}/serviceInfos`,
      (err, serviceInfo) => {
        if (err) {
          console.error("Error fetching data from OVH API:", err);
          return;
        }
        // Add local date and time to the fetched data
        const localDateTime = new Date().toLocaleString();

        const expiration = serviceInfo.expiration.toString();
        ovhData = { expiration, localDateTime }; // Store expiration and localDateTime together
        console.log("OVH API data fetched:", ovhData);

        // Save the fetched data to a local file
        fs.writeFile("ovhData.json", JSON.stringify(ovhData), (err) => {
          if (err) {
            console.error("Error saving OVH data locally:", err);
          } else {
            console.log("OVH data saved locally");
          }
        });
      }
    );
  } catch (error) {
    console.error("Error fetching data from OVH API:", error);
  }
};

// Fetch OVH data when the server starts
fetchOVHInfo();

// Schedule the fetchOVHInfo function to run once every day (24 hours)
const fetchInterval = 24 * 60 * 60 * 1000; // 24 hours in milliseconds
setInterval(fetchOVHInfo, fetchInterval);

// Route to get the OVH data
app.get("/", (req, res) => {
  if (ovhData) {
    res.json(ovhData);
  } else {
    res.status(500).json({ error: "OVH data not available" });
  }
});

// Start the Express server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
