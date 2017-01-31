var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Kjøller - mode for mænd'});
});

router.post('/contact', function (req, res) {
  console.log('The body', req.body);
  mailer.sendContact(req.body)
      .then(function () {
        res.json({message: 'Success'});
      }, function (reason) {
        res.status(500).json(reason);
      });
});

module.exports = router;
