var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
  var data = [{
    first: "Bruce",
    last: "Wayne"
  }, {
    first: "Peter",
    last: "Parker"
  }]
  res.send(data);
});

module.exports = router;
