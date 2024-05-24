#!/usr/bin/node
const request = require('request');

request.get(process.argv[2], function (error, response, body) {
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);
  let count = 0;
  const targetURL = 'https://swapi-api.hbtn.io/api/people/18/';

  for (let x = 0; x < data.results.length; x++) {
    if (data.results[x].characters.some(char => char.includes(targetURL))) {
      count++;
    }
  }

  console.log(count);
});
