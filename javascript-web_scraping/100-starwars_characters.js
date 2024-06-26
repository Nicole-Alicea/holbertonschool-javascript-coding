#!/usr/bin/node
const request = require('request');
request(`https://swapi-api.hbtn.io/api/films/${process.argv[2]}`, function (error, response, body) {
  if (error) console.log(error);
  for (const characterId of JSON.parse(body).characters) {
    request(characterId, function (error, response, body) {
      if (error) console.log(error);
      console.log(JSON.parse(body).name);
    });
  }
});
