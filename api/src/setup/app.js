;

'use stric'
require('dotenv').config();
const  express  = require('express'),
       app = express(),
       morgan = require('morgan'),
       cors  = require('cors'),
      connetDb = require('../db/data'),
      bodyParser = require('body-parser'),
      { appConfig, db } = require('../config'),
      us = require('../routes/usuarios')
      connetDb(db);
       
app.use(morgan('dev')),
//app.use(express.urlencoded({extended: false})),
app.use(bodyParser.urlencoded({ extended: false })),
app.use(bodyParser.json()),
//app.use('/imagenes', express.static(path.resolve('imagenes'))),

app.use(cors())

app.use('/api', us)

module.exports = app;