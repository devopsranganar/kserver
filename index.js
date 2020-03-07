const express = require('express');
const bodyParser = require('body-parser');
//const mongoose = require('mongoose');
var cors = require('cors');
const https = require('https');
const fs = require('fs')

var key = fs.readFileSync(__dirname + '/certs/example.com.key');
var cert = fs.readFileSync(__dirname + '/certs/example.com.crt');
var options = {
  key: key,
  cert: cert
};

//const Schema = mongoose.Schema;
//const hash = new Schema({
//    id: { type: String   },
 //   hash: { type: String },
 //   value:{type:Number}
//});
//const Hash =  mongoose.model('Hash', hash);

const PORT =3000;
const app = express();

app.use(cors());

//mongoose.connect('mongodb+srv://devops:rq6ve2dr@cluster0-40smv.mongodb.net/test?retryWrites=true&w=majority', () =>{console.log('conected to DB')});


app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/xvalue/:valueId', async (req,res) => {
console.log(req.params.valueId);
 // const getX = await Hash.findOne({id:req.params.valueId}).then((result) =>{ return result.toJSON();})
var getx = parseInt(req.params.valueId);
var getY = getx+1;
console.log(gety);
   if(getx) return res.send(gety);
  });
  
app.get('/', (req,res) => {
res.send('Hello Word!');
});


var server = https.createServer(options, app);

server.listen(PORT, () => {
  console.log("server starting on port : " + PORT)
});