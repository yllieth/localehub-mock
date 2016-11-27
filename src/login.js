var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  if (req.hasOwnProperty('body') && req.body.hasOwnProperty('code') && req.body.hasOwnProperty('state')) {
    res.status(200).json({
      token: '0a0a0a0a-1b1b-2c2c-3d3d-4e4e4e4e4e4e'
    })
  } else {
    res.status(412).json({
      status: 412,
      message: 'Missing parameter (code or status not found)'
    })
  }
});

module.exports = router;