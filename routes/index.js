var express = require('express');
var router = express.Router();

const data = require(`../data`);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Parasites', 
    subTitle: "For a Limited Time Only",
    galleryTitle: "Gallery",
    gallerySubTitle: "Whatever Suits Your Fancy" });
});

router.get('/:user', function(req, res, next) {
  console.log('data:', data);
  console.log('user:', req.params.user);
  res.render('userpage', data[req.params.user]);
});

module.exports = router;
