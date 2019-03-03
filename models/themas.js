var mongoose = require('../config/mongoose');
var Schema = mongoose.Schema;
var schema = new Schema ({
 name:{
  type:string,
  required:true
},
url: {
 type:string, uniquie:true, required:true;
 }
});
expocts.Themas=mongoose.model('thema', schema);