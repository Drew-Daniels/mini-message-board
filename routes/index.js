var express = require('express');
var router = express.Router();
var { format } = require('date-fns');

const messages = [
  {
    text: 'Hi there!',
    user: "Amando",
    added: new Date()
  },
  {
    text: 'Hello world!',
    user: 'Charles',
    added: new Date()
  }
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages, dateFormatter: format});
});
router.get('/new', function(req, res, next) {
  res.render('form');
});
router.post('/new', function(req, res, next) {
  const authorName = req.body.authorName;
  const message = req.body.message;
  messages.push({text: message, user:authorName, added: new Date()});
  res.redirect('/');
});

module.exports = router;
