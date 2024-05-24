#!/usr/bin/node

'use strict';
const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (error, data) => {
  if (error) {
    return console.error(error);
  }
  console.log(data.toString());
});
