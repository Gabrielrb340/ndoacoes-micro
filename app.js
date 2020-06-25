var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
mongoose = require('mongoose')
var logger = require('morgan');
require("dotenv-safe").config();
require('./config/db.mongoose.config').connect()
var campanhaRoute = require('./routes/campanha.route');
var doadorRoute = require('./routes/doador.route');
var ongRoute = require('./routes/ong.route');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/campanha', campanhaRoute);
app.use('/doador', doadorRoute);
app.use('/ong', ongRoute);
app.listen(4201, () => { console.log('Aplicação rodando em localhost:4201') })
module.exports = app;