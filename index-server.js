const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

const filePath = path.resolve(__dirname, 'dist');

const getTemplate = htmlFile => {
  return path.join(__dirname, `views/${htmlFile}.html`);
};

app.use(express.static(filePath));

app.get('/', (req, res) => {
  res.sendFile(getTemplate('index'));
});

app.listen(PORT, () => console.log('The application is listening to port, ' + PORT));