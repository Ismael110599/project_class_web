var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/create', function(request, response, next) {
  response.status(200).json({
    status:true,
    message: "Todo esta ok",
  })
});

module.exports = router;
