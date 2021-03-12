const request = require('request');
const url = 'https://api.ipify.org?format=json';
/**
 * Makes a single API request to retrieve the user's IP address.
 * Input:
 *   - A callback (to pass back an error or the IP string)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The IP address as a string (null if error). Example: "162.245.144.188"
 */
const fetchMyIP = function(callback) {
  request(url, (error, response, body) => {
    // handeling errors of invalid domain etc
    if (error) {
      callback(error, null);
      return;
    }
    //server errors
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching IP. Response: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const data = JSON.parse(body);
    callback(null, data.ip);
    return;
  });
};

const fetchCoordsByIP = function(ip, callback) {
  request(`https://freegeoip.app/json/${ip}`, (error, response, body) => {
    // handeling errors of invalid domain etc
    if (error) {
      callback(error, null);
      return;
    }
    //server errors
    if (response.statusCode !== 200) {
      const msg = `Status Code ${response.statusCode} when fetching coordnidates IP: ${body}`;
      callback(Error(msg), null);
      return;
    }
    const { latitude, longitude} = JSON.parse(body);
    // if (ip.length !== 0) {
      callback(null, { latitude, longitude});
      return;
    // }
  });

};

/**
 * Makes a single API request to retrieve upcoming ISS fly over times the for the given lat/lng coordinates.
 * Input:
 *   - An object with keys `latitude` and `longitude`
 *   - A callback (to pass back an error or the array of resulting data)
 * Returns (via Callback):
 *   - An error, if any (nullable)
 *   - The fly over times as an array of objects (null if error). Example:
 *     [ { risetime: 134564234, duration: 600 }, ... ]
 */
 const fetchISSFlyOverTimes = function(coords, callback) {
  // ...
};

module.exports = { fetchMyIP, fetchCoordsByIP };