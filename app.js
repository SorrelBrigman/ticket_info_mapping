'use strict'

const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes/')
const bodyParser = require('body-parser')
const { knex } = require('./db/database');

const port = process.env.PORT || 3000

//pug configuration
app.set('view engine', 'pug');

app.locals.body = {};

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static('public'));
app.use(routes)


app.use((req, res)=>{
  res.render('404');
})



//end of middleware
app.listen(port, ()=>{
  console.log(`listening on port ${port}`);
})
