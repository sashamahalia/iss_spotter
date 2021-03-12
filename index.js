const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }
//   console.log('It worked! Returned IP:', ip);
// });

// fetchCoordsByIP('162.245.144.188', (error, coordinates) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }
//   console.log('It worked! Returned coordinates:', coordinates);
// });

// fetchISSFlyOverTimes({ latitude: 48.6486, longitude: -123.4044 }, (error, response) => {
//   if (error) {
//     console.log('It didn\'t work!', error);
//     return;
//   }
//   console.log('Here are the next five flyovers', response);
// });

nextISSTimesForMyLocation((error, passtimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  for (passtime of passtimes) {
    const date = new Date(passtime['risetime']* 1000).toString(); // adapted from http://danhounshell.com/blog/how-to-convert-a-10-digit-timestamp-json-to-a-javascript-date/
    // const date = new Date(passtime['risetime']* 1000).getTimezoneOffset();
    console.log(`Next pass at ${date} for ${passtime['duration']} seconds`);
  }
});