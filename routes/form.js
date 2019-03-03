var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
var post=req.body;
var Users=require('../models/users').Users;
var users=new Users({
 'email' : post.email,
 'password' : post.password
 });
 users.save();
res.redirect('/');
//console.log(post);
});

router.get('/', function(){
	var Users=require('../models/users').Users;
	Users.find({}, function(err, users){
		console.log(users);
	});
	
});

module.exports = router;
