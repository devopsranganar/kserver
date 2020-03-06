const  mongoose = require('mongoose') ;
const Schema = mongoose.Schema;
const hash = new Schema({
    id: { type: String   },
    hash: { type: String },
    value:{type:Number}
});
//const Hash =  mongoose.model('Hash', hash);
module.export =  mongoose.model('Hash', hash);
