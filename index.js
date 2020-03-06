const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
var cors = require('cors');
 
const Schema = mongoose.Schema;
const hash = new Schema({
    id: { type: String   },
    hash: { type: String },
    value:{type:Number}
});
const Hash =  mongoose.model('Hash', hash);
const PORT =3000;
const app = express();
app.use(cors());
mongoose.connect('mongodb+srv://devops:rq6ve2dr@cluster0-40smv.mongodb.net/test?retryWrites=true&w=majority', () =>{console.log('conected to DB')});
app.use(bodyParser());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/xvalue/:valueId', async (req,res) => {
console.log(req.params.valueId);
  const getX = await Hash.findOne({id:req.params.valueId}).then((result) =>{ return result.toJSON();})
console.log(getX.value);
   if(getX) return res.send(getX.value.toString());
  });

app.get('/', (req,res) => {
res.send('Hello Word!');
});


app.listen(PORT,() =>{console.log(`'serrver is running on port:'${PORT}`)})