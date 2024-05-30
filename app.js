const express = require('express');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use((req, res, next) => {
  console.log('this will run always');
  next();
});

app.use('/admin', adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, 'views', '404.html'));
})

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});
