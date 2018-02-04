var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Cross-Platform Movie Search',
    partials: {
      header: "../views/partials/header"
    }
  });
});

module.exports = router;
