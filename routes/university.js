var express = require('express');
const university_controlers= require('../controllers/university');
var router = express.Router();
/* GET home page. */

router.get('/', university_controlers.university_view_all_Page );

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