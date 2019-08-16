'use strict';

const express = require('express');
require('dotenv').config();
const app = express();
const fs = require('fs');

//When someone makes a request, move to this directory
app.use(express.static('./public'));

app.get('/hello', (request, response) => {
  response.status(200).send('Hello');
});

// app.get('/test', (request, response) => {
//   const test = fs.readdir("./public", (err, files) => {
//     if (err) return console.error(err);
//     files.forEach(file => {
//       let commandName = file.split(".")[0];
//       console.log(`Attempting to load command ${commandName}`);
//     });
//   });
//   response.status(200).send(test)
// })

app.get('/data', (request, response) => {
  let airplanes = {
    departure: Date.now(),
    canFly: true,
    pilot: 'Well Trained'
  }
  response.status(200).json(airplanes);
});

app.get('/', (request, response) => { 
  response.status(200).redirect('index.html');
})


//This is the catch all if the directory does not exist
app.use('*', (request, response) => {
  response.send('Sorry, that route does not exist')
})

const PORT = process.env.POR || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}.`))