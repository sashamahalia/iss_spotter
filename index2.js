const { nextISSTimesForMyLocation  } = require('./iss_promised');

const printPassTimes = passTimes => {
  for (const passtime of passTimes) {
    const date = new Date(passtime['risetime'] * 1000).toString(); // adapted from http://danhounshell.com/blog/how-to-convert-a-10-digit-timestamp-json-to-a-javascript-date/
    console.log(`Next pass at ${date} for ${passtime['duration']} seconds`);
  }
};

nextISSTimesForMyLocation()
  .then((passTimes) => {
    printPassTimes(passTimes);
  })
  .catch((error) => {
    console.log("It didn't work: ", error.message);
  });