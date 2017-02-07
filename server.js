const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const Post           = require('./model/post').Post;
const app            = express();


app.use(bodyParser.urlencoded({ extended: true }));

require('./router/')(app, Post);


app.listen(8000,()=>{
  console.log('server listen on port 8000');
});