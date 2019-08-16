const express = require('express');
require('dotenv').config();
const app = express();

app.use(express.static('./public'));

app.get('/', (request, response) => {
  // response.status(200).sendFile('./index.html');
  response.status(200).sendFile(__dirname + '/index.html');
})

app.use('*', (request, response) => {
  response.send('Sorry, that route does not exist');
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on ${PORT}`));