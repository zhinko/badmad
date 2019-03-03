var mongoose = require('../config/mongoose');
var Schema = mongoose.Schema;
var schema = new Schema ({
 password:{
  type:String,
  required:true
},
email: {
 type:String, uniquie:true, required:true
 }
});
exports.Users=mongoose.model('user', schema);