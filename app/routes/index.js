var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/create', (req, res) => {
	console.log('show controller');
	controller.createImage(req, res);
});

module.exports = router;
