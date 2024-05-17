#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  let count = 0;

  for (let x = 0; x < data.results.length; x++) {
    if (data.results[x].characters.includes('https://swapi-api.hbtn.io/api/people/18/')) {
      count++;
    }
  }

  console.log(count);
});
