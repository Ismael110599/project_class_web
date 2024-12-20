var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/list', function(request, response,) {
  response.status(200).json({
    status:true,
    message: "Todo esta ok",
  })
});

module.exports = router;