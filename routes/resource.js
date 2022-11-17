// var express = require('express');
// var router = express.Router();
// // Require controller modules.
// var api_controller = require('../controllers/api');
// var university_controller = require('../controllers/university');
// /// API ROUTE ///
// // GET resources base.
// router.get('/', api_controller.api);
// /// university ROUTES ///
// // POST request for creating a university.
// router.post('/university', university_controller.university_create_post);
// // DELETE request to delete university.
// router.delete('/university/:id', university_controller.university_delete);
// // PUT request to update university.
// router.put('/university/:id', university_controller.university_update_put);
// // GET request for one university.
// router.get('/university/:id', university_controller.university_detail);
// // GET request for list of all university items.
// router.get('/university', university_controller.university_list);

// // /* GET detail university page */
// // router.get('/detail', university_controller.university_view_one_Page);
// // //Assignment 12 part 5
// /* GET create university page */
// router.get('/create', university_controller.university_create_Page);
// // //Assignment 12 part 6
// // /* GET create update page */
// // router.get('/update', university_controller.university_update_Page);
// module.exports = router;






var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var university_controller = require('../controllers/university'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// universityes ROUTES /// 
 
// POST request for creating a university.  
router.post('/university', university_controller.university_create_post); 
 
// DELETE request to delete university. 
router.delete('/university/:id', university_controller.university_delete); 
 
// PUT request to update university. 
router.put('/university/:id', university_controller.university_update_put); 
 
// GET request for one university. 
router.get('/university/:id', university_controller.university_detail); 
 
// GET request for list of all university items. 
router.get('/university', university_controller.university_list); 
// //Assignment 12 
// /* GET detail university page */ 
// router.get('/detail', university_controller.university_view_one_Page); 
  

// /* GET create university page */ 
// router.get('/create', university_controller.university_create_Page); 

// /* GET create update page */ 
// router.get('/update', university_controller.university_update_Page); 

// /* GET delete university page */ 
// router.get('/delete', university_controller.university_delete_Page); 
 
module.exports = router; 

