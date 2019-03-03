var express = require('express');
var router = express.Router();
router.get('/themas/add', function(req, res, next) {

});
/* GET home page. */
router.get('/:id?', function(req, res, next) {
if(req.params.id){
var index = req.params.id;
}else{
var index = 'Welcome to main page';
}
  res.render('index', { title: index });
});
router.get('/:email/:password', function(req, res, next){
	var Users=require('../models/users').Users;
var users=new Users({
 'email' : req.params.email,
 'password' : req.params.password
 });
 users.save();
res.redirect('/');
})
module.exports = router;
