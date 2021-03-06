const express = require('express');
const map = require('./map');
const locals = require('../lib/middlewares/locals');

const router = express.Router();

router.use(locals);

/* GET home page. */
router.get('/', function(req, res, next) {
  if (req.user) {
    res.redirect('/map');
  } else {
    res.render('index', {
        title: 'Twitter Stream',
        error: req.query.error,
        logout: !!req.query.logout
    });
  }
});

router.use('/map', map);

module.exports = router;
