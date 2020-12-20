var express = require('express');
var router = express.Router();
var connection = require('../modules/connection')
var ContactModel = require('../modules/contact')
router.use(express.static(__dirname+"./public"))

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Innovative Homes', success:'',
  subtitle1: 'Decorating & Beautiful Homes delights', subtitle2: 'Dreams fulfilled our quality experts' });
  // Decorating & Beautiful Homes delights your dreams can fullfil our best experts
});


/* GET Contact page. */
// router.get('/contact/', function(req, res, next) {
//   res.render('contact', { title: 'Contact',  success:'' });
// });

/* GET Upload page. */
 router.get('/upload/', function(req, res, next) {
   res.render('upload', { title: 'Upload map details', flag:0, success:'' });
 });

/* POST Contact page. */
router.post('/upload', function(req, res, next) {
  var contactDetails = new ContactModel ({
    name: req.body.name,
    phone: req.body.phone,
    email: req.body.email,
    remark: req.body.message
  })

  contactDetails.save(function(err, callback){
    if (err) throw err
      else
        res.render('index', { title: 'Contact', 
        success:"We have address your concern and get back  to you very soon!", 
        subtitle1: 'Decorating & Beautiful Homes delights', subtitle2: 'Dreams fulfilled our quality experts' });
  })
  
  console.log(contactDetails)
});

module.exports = router;
