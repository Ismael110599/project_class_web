var express = require('express');
var router = express.Router();


const teacherController = require("../controllers/teacher.controller")

/* GET home page. */
router.get('/list', function(response) {
   const result =  teacherController.getList()
  response.status(200).json({
    status:true,
    message: "Todo esta ok",
  })
});

module.exports = router;