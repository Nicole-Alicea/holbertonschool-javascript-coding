#!/usr/bin/node

const request = require('request');
const urlApi = 'https://swapi.co/api/films/' + ProcessingInstruction.argv[2];

request(urlApi, function (error, response, body) {
    if (error) {
        console.log(error);
    }
    console.log(JSON.parse(body).title);
});
