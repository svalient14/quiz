
//Un router de express es un MW que permite agrupar otros MWs de atención a rutas
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

module.exports = router;
