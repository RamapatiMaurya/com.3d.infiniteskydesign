var express = require('express');
var router = express.Router();
router.use(express.static(__dirname+"./public"))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Innovative Homes', 
  subtitle1: 'Decorating & Beautiful Homes delights', subtitle2: 'Dreams fulfilled our quality experts' });
  // Decorating & Beautiful Homes delights your dreams can fullfil our best experts
});

module.exports = router;
