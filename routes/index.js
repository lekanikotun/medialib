var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    return res.redirect('/media');
  }
  var vm = {
    title: 'Login',
    bodyText: 'Simply create an account to get started, and you will have instant access to our online libraries.',
    error: req.flash('error')
  };
  res.render('index', vm);
});

module.exports = router;
