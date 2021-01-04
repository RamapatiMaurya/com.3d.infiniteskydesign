var express = require('express');
var path = require('path')
var multer = require('multer')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/')
  },
  filename: function (req, file, cb) {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, file.originalname)
  }
})

//var upload = multer({ dest: 'uploads/' })
var upload = multer({ storage: storage })

var router = express.Router();
//var mongoose = require('../modules/connection')
const mongoose = require('mongoose');
var FileInfoModel = require('../modules/map_info')
var user = require('../modules/users')
router.use(express.static(__dirname + "./public"))
var mapDetails = FileInfoModel.find({});
var userDetails = user.find({phone:'9953397678'});


/* GET home page. */
router.get('/', function (req, res, next) {
  mongoose.connect('mongodb+srv://RamapatiMaurya:Ramapati123@cluster0.cf6xo.mongodb.net/sky_design?retryWrites=true&w=majority',
    { useNewUrlParser: true }, () => { console.log('Remote DB connected!') });
  
  var user = userDetails.exec(function (err, data) {
    if (err) throw err
    else return data;
  })

  mapDetails.exec(function (err, data) {
    if (err) throw err
    res.render('index', { success: 'jai', data: data, user:user });
    // console.log(data)
    console.log("Loaded successfully!")
    mongoose.connection.close()
  })

  // Decorating & Beautiful Homes delights your dreams can fullfil our best experts
});


/* GET Contact page. */
// router.get('/contact/', function(req, res, next) {
//   res.render('contact', { title: 'Contact',  success:'' });
// });

/* GET blog page. */
router.get('/blog/', function (req, res, next) {
  res.render('blog', { title: 'Blogs', flag: 0, success: '' });
});

/* GET career page. */
router.get('/career/', function (req, res, next) {
  res.render('career', { title: 'Career', flag: 0, success: '' });
});

/* GET category page. */
router.get('/category/', function (req, res, next) {
  res.render('category', { title: 'Category', flag: 0, success: '' });
});

/* GET contact page. */
router.get('/contact/', function (req, res, next) {
  res.render('contact', { title: 'Contact', flag: 0, success: '' });
});

/* GET maps page. */
router.get('/maps/', function (req, res, next) {
  res.render('maps', { title: 'Maps', flag: 0, success: '' });
});

/* GET register page. */
router.get('/register/', function (req, res, next) {
  res.render('register', { title: 'Register', flag: 0, success: '', user:user });
});

/* GET profile page. */
router.get('/profile/', function (req, res, next) {
  res.render('profile', { title: 'Profile', flag: 0, success: '', user:user });
});

/* GET login page. */
router.get('/login/', function (req, res, next) {
  res.render('login', { title: 'Login', success: '', user:user });
});

/* GET Upload page. */
router.get('/upload/', function (req, res, next) {
  res.render('upload', { title: 'Upload map details', flag: 0, success: '' });
});

/* POST Upload page. */
router.post('/upload', upload.array('img', 2), function (req, res, next) {
  mongoose.connect('mongodb+srv://RamapatiMaurya:Ramapati123@cluster0.cf6xo.mongodb.net/sky_design?retryWrites=true&w=majority',
    { useNewUrlParser: true }, () => { console.log('Remote DB connected!') });
  var fileDetails = new FileInfoModel({
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

    mapdigitalpath: req.files[0] ?  req.files[0].filename : '',
    maphandmadepath: req.files[1] ? req.files[1].filename : '',
    budgetamount: req.body.budgetamount,
    currency: "Rupee"


  })
 
  fileDetails.save(function (err, callback) {
    if (err) throw err
    else {
       res.render('upload', { title: 'Upload map details', flag: 0, success: 'Record uploaded successfully!' });
      mongoose.connection.close();
      console.log("Record uploaded!")
    }

  })

  //if(req.files[0])
  //  console.log(path + req.files[0].path);
  // console.log(fileDetails)
});

module.exports = router;
