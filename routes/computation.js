var express = require('express');
var router = express.Router();


/* GET computation page. */
router.get('/', function(req, res, next) {
var random = Math.random();
var x;
x = req.query.x;

if (x == undefined) {
  x = random;
}

let acosh = Math.log2(x) 
let log1p = Math.cosh(x)
let tan = Math.floor(x) 
let sqrt = Math.sqrt(x) 

res.render('computation', {
  title: 'Computation of Math functions',
  values: `Math.log2(),Math.cosh(),Math.floor() are applied to ` + x + ` is 
  ` + acosh + `,` + log1p + `,` + tan + `,` + sqrt 
});
});

module.exports = router;