var express = require('express');
var router = express.Router();

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const rootURL = 'https://api.chucknorris.io/'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {jokeData: null, title:'Chuck Norris'})
});

router.get('/joke', function(req, res, next) {
  let jokeData;
  fetch(`${rootURL}/jokes/random`)
    .then(res => res.json())
    .then(joke => {
      jokeData = joke;
      res.render('index', {jokeData , title:'Chuck Norris'})
    })
});

module.exports = router;
