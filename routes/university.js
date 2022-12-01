var express = require('express');
const university_controlers= require('../controllers/university'); 
var router = express.Router();
//Assignment 13
const secured = (req, res, next) => { 
    if (req.user){ 
      return next(); 
    } 
    req.session.returnTo = req.originalUrl; 
    res.redirect("/login"); 
  } 

/* GET Class page. */
router.get('/', university_controlers.university_view_all_Page);

/* GET Class page. */
router.get('/view', university_controlers.university_view_all_Page);

/* GET detail university page */ 
router.get('/detail',secured, university_controlers.university_view_one_Page); 
  

/* GET create university page */ 
router.get('/create',secured, university_controlers.university_create_Page); 

/* GET create update page */ 
router.get('/update',secured, university_controlers.university_update_Page); 

/* GET delete university page */ 
router.get('/delete', secured, university_controlers.university_delete_Page); 

module.exports = router;





















// //Assignment 12 part4
// /* GET detail university page */ 
// router.get('/', university_controlers.university_view_one_Page); 
// //Assignment 12 part 5
// /* GET create university page */ 
// router.get('/create', university_controlers.university_create_Page); 
// //Assignment 12 part 6
// /* GET create update page */ 
// router.get('/update', university_controlers.university_update_Page); 
// //Assignment 12 part 7
// /* GET delete university page */ 
// router.get('/delete', university_controlers.university_delete_Page); 