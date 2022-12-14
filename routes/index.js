// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   console.log("added bootstrap styles for button in index.pug")
//   res.render('index', { title: 'Express' });
// });

// module.exports = router;



//Assignment 13
var express = require('express'); 
var passport = require('passport'); 
var router = express.Router(); 
var Account = require('../models/account'); 
 
router.get('/', function (req, res) { 
    res.render('index', { title: 'university App', user : req.user }); 
}); 
 
router.get('/register', function(req, res) { 
    res.render('register', { title: 'university App Registration'}); 
}); 
 
router.post('/register', function(req, res) { 
  Account.findOne({ username : req.body.username },  
    function(err, user) { 
      if(err) { 
        return res.render('register', { title: 'Registration',  
                  message: 'Registration error', account : req.body.username }) 
      } 
      if(user == {} ){ 
        return res.render('register', { title: 'Registration',  
                   message: 'Existing User', account : req.body.username }) 
      } 
      let newAccount = new Account({ username : req.body.username }); 
      Account.register(newAccount, req.body.password, function(err, user){ 
        if (err) { 
          return res.render('register', { title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        } 
        if(!user){ 
          return res.render('register',{ title: 'Registration',  
                    message: 'access error', account : req.body.username }) 
        }  
        console.log('Sucess, redirect'); 
        res.redirect('/'); 
      }) 
    })    
  }) 
  
router.get('/login', function(req, res) { 
    res.render('login', { title: 'university App Login', user : req.user }); 
}); 
 
router.post('/login', passport.authenticate('local'), function(req, res) {
  //Assignment 13
  if(req.session.returnTo) 
      res.redirect(req.session.returnTo);  
    res.redirect('/'); 
}); 
 
router.get('/logout', function(req,res,next) { 
    req.logout(function(err){
      if(err){
        return next(err);}
        res.redirect('/'); 
      });
    
}); 
 
router.get('/ping', function(req, res){ 
    res.status(200).send("pong!"); 
}); 
 
module.exports = router; 
 