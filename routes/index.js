var express = require('express');
var path = require('path')
var multer  = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
   // cb(null, file.fieldname + '-' + Date.now())
    cb(null, file.originalname)
  }
})

//var upload = multer({ dest: 'uploads/' })
var upload = multer({ storage: storage })

var router = express.Router();
var connection = require('../modules/connection')
var FileInfoModel = require('../modules/map_info')
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

/* GET blog page. */
router.get('/blog/', function(req, res, next) {
  res.render('blog', { title: 'Blogs', flag:0, success:'' });
});

/* GET career page. */
router.get('/career/', function(req, res, next) {
  res.render('career', { title: 'Career', flag:0, success:'' });
});

/* GET category page. */
router.get('/category/', function(req, res, next) {
  res.render('category', { title: 'Category', flag:0, success:'' });
});

/* GET contact page. */
router.get('/contact/', function(req, res, next) {
  res.render('contact', { title: 'Contact', flag:0, success:'' });
});

/* GET maps page. */
router.get('/maps/', function(req, res, next) {
  res.render('maps', { title: 'Maps', flag:0, success:'' });
});

/* GET register page. */
router.get('/register/', function(req, res, next) {
  res.render('register', { title: 'Register', flag:0, success:'' });
});

/* GET login page. */
router.get('/login/', function(req, res, next) {
  res.render('login', { title: 'Login', flag:0, success:'' });
});

/* GET Upload page. */
 router.get('/upload/', function(req, res, next) {
   res.render('upload', { title: 'Upload map details', flag:0, success:'' });
 });

/* POST Upload page. */
router.post('/upload', upload.array('img', 2), function(req, res, next) {
  var fileDetails = new FileInfoModel ({
    // String
    p_title: req.body.p_title,
    p_path1: "req.body.p_path1",
    p_path2: "req.body.p_path2",
    p_description: req.body.description,
    uploaded_by: "Rajendra Yadav",
    file_name1: "req.body.file_name1",
    file_name2: "req.body.file_name2",
    measurement_unit: "inches",
    facing: "req.body.facing",
    currency: "req.body.currency",
    


  })

  fileDetails.save(function(err, callback){
    if (err) throw err
      else
        res.render('index', { title: 'Data Uploading', 
        success:"Data Uploaded Successfully on server!!!!!", 
        subtitle1: 'Decorating & Beautiful Homes delights', subtitle2: 'Dreams fulfilled our quality experts' });
  })
  
  console.log(fileDetails)
});

module.exports = router;
