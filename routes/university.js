var express = require('express');

var router = express.Router();
/* GET home page. */

router.get('/', function(req, res, next) {
res.render('university', { title: 'Search Results university' });

});

var express = require('express');

const university_controlers= require('../controllers/university');

var router = express.Router();

/* GET universitys */

router.get('/', university_controlers.university_view_all_Page );

module.exports = router;

// GET request for one university.

router.get('/university/:id', university_controlers.university_detail);