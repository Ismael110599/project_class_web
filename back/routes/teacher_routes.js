var express = require('express');
var router = express.Router();


const teacherController = require("../controllers/teacher.controller")

/* GET home page. */
router.post('/list', function(request, response) {
   const result =  teacherController.getList();
   response.status(200).json({
    status:true,
    message: "Todo esta ok",
  });
});


router.post("/create", function (request, response) {
  console.log(request.body);
  const result = teacherController.postCreate(request.body);
  response.status(200).json({
    status:true,
  });
})

router.post("/update", function(request, response) {
  const result = teacherController.postUpdate(request.body);
  response.status(200).json({
    status:true,
    info: result
  });  
});


router.post("/delete", function(request, response) {
  const result = teacherController.postDelete(request.body);
  response.status(200).json({
    status:true,
    info:result
  })
});

module.exports = router;