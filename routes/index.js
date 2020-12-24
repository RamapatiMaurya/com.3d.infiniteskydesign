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
    title: req.body.title, //ok
    description: req.body.description, //ok
    width: req.body.width, //ok
    height: req.body.height, //ok
    uploaded_by: "Rajendra Yadav",
    uploaded_date: Date.now(),
    units: req.body.units,
    rooms: req.body.rooms,
    floors: req.body.floors,
    showingmode: req.body.showingmode,
    facing: req.body.facing,
    vastu: req.body.vastu,
    porch: req.body.porch,
    lawn: req.body.lawn,
    serventroom: req.body.serventroom,
    poojaroom: req.body.poojaroom,
    storeroom: req.body.storeroom,
    
    mapdigitalpath: req.files[0]? req.files[0].path : '',
    maphandmadepath: req.files[1]? req.files[1].path : '',
    budgetamount: req.body.budgetamount,
    currency: "Rupee"


  })

  fileDetails.save(function(err, callback){
    if (err) throw err
      else
        res.render('index', { title: 'Data Uploading', 
        success:"Data Uploaded Successfully on server!!!!!", 
        subtitle1: 'Decorating & Beautiful Homes delights', subtitle2: 'Dreams fulfilled our quality experts' });
  })
  //if(req.files[0])
  //  console.log(path + req.files[0].path);
 // console.log(fileDetails)
});

module.exports = router;
