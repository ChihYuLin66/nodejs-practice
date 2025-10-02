var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('todo/index');
});

// 新增
router.get('/create', function(req, res, next) {
  res.render('todo/index');
});

router.post('/', function(req, res, next) {
  
});

// 編輯
router.get('/:id/edit', function(req, res, next) {
  res.render('todo/index');
});

router.put('/:id', function(req, res, next) {
  
});

router.delete('/:id', function(req, res, next) {
  
});





module.exports = router;
