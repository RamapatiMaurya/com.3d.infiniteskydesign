var express = require('express');
var router = express.Router();
router.use(express.static(__dirname+"./public"))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', 
  subtitle1: 'A responsive video gallery template with a functional designed by', subtitle2: '', url: '' });
});

module.exports = router;
