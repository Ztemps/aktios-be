var express = require('express');
var http = require('http');
var app = express();
const cors = require('cors');

app.use(cors({
  origin: '*',
  credentials: false
}));

var dataRoute = express.static(__dirname + '/resources/datasource.json');
var personRoute = express.static(__dirname + '/resources/info-population.json');

app.use('/data', dataRoute);
app.use('/population', personRoute);

app.get('/', (req, res) => {
  res.status(200).send("Paint&Paint API-REST")
});

http.createServer(app).listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});