const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require('./admin')

router.get('/', (req, res, next) => {
  const products = adminData.product;
  res.render('shop', {prod: products, docTitle: 'Shop'});
});

module.exports = router;
