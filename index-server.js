const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const morgan = require('morgan');

const app = express();
const PORT = 8000;
const filePath = path.resolve(__dirname, 'dist/');
const imagePath = path.resolve(__dirname, 'images/');

//Use nunchucks as the template engine
app.set('view engine', 'njk');
nunjucks.configure('views', {
  express: app,
  autoescape: true
});

/**
* @method getTemplate
* @param {String} njkFile - name of the njk file
* @return {string} return path segments to get the file from the given directory.
*/
const getTemplate = njkFile => {
  return path.join(__dirname, `views/${njkFile}.njk`);
};

//Use the morgan plugin as a logger.
app.use(morgan('dev'));

//Use the handler to retrieve the static files.
app.use(express.static(filePath));
app.use(express.static(imagePath));

//Render the index template upon the default root index request.
app.get('/', (req, res) => {
  res.render(getTemplate('index'));
});

//Send image files based on GET request.
app.get(/^\/.*\.(png|jpg)$/, (req, res) => {
  const imgFile = req.url.slice(req.url.lastIndexOf('/') + 1);
  res.sendFile(path.join(__dirname, `images/${imgFile}`));
});

app.listen(PORT, () => console.log('The application is listening to port, ' + PORT));