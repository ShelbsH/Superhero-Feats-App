const express = require('express');
const path = require('path');

const app = express();
const port = 8000;

const filePath = path.resolve(__dirname, 'dist');

const getTemplate = htmlFile => {
  return path.join(__dirname, 'views/' + htmlFile + '.html');
};

app.use(express.static(filePath));

app.get('/', (request, response) => {
  response.sendFile(getTemplate('index'));
});

app.listen(port, () => console.log('The port, ' + port + ' is being listened to.'));