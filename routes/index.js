
//Un router de express es un MW que permite agrupar otros MWs de atención a rutas
var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/question', quizController.question);
router.get('/check',    quizController.check);


module.exports = router;
