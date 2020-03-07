//Core lib imported 
const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const https = require('https');
const fs = require('fs')

//SSL Certficate 
var key = fs.readFileSync(__dirname + '/certs/example.com.key');
var cert = fs.readFileSync(__dirname + '/certs/example.com.crt');
var options = {
  key: key,
  cert: cert
};

//initializing the  express and application port 
const PORT =3000;
const app = express();

//initializing the middleware  cors  and bodyparser 
app.use(cors());
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));

// app path htt://siteurl:3000/xvalue/X

app.get('/xvalue/:valueId', async (req,res) => {
    var xval = parseInt(req.params.valueId.toString());
    var yval = xval+1;
    res.send(yval.toString());
  });
//app path 
app.get('/', (req,res) => {
res.send('Hello Word!');
});

//creating https server 
var server = https.createServer(options, app);

//app listeing on port 
server.listen(PORT, () => {
  console.log("server starting on port : " + PORT)
});