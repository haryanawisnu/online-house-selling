const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
let house = require('./routes/house');
const bodyParser = require('body-parser');


let db_config = {
  development: 'mongodb://localhost/houseselling',
  test: 'mongodb://localhost/houseselling-test'
}

let app_env = app.settings.env;

mongoose.connect(db_config[app_env], function(err, res) {
  console.log('connected to database ' + db_config[app_env]);
});

//Corse
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Methods", "DELETE")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, token")
  next()
})
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/house', house);

app.listen(3000);
console.log('listening to port 3000');

module.exports = app;
