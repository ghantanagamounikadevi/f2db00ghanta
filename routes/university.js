var express = require('express');
var router = express.Router();

/* home page */

router.get('/', function (req, res, next) {
    res.render('university',{title:'Search Results university'});
});

module.exports = router;