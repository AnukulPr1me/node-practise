const express = require('express');
const path = require('path');
const router = express.Router();
const product = [];
router.get('/add-product', (req, res, next) => {
  console.log('In the another middleware!!');
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.post('/add-product', (req, res, next) => {
  console.log('this is post!!');
  console.log(req.body);
  res.redirect('/');
});

exports.routes = router;
exports.product = product;
