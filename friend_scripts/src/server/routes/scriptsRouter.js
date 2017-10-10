const express = require('express');
let scriptsRouter = express.Router();
let db = [];

module.exports = scriptsRouter => {

  scriptsRouter.route('/')
    .get((req, res)=>{
      res.status(200).json(db);
    })
    .post((req, res)=>{
      db.push(req.body);
      res.status(200).json(db);
    })
}

var express = require('express'),
bodyParser  = require('body-parser');
var app = express();
app.use(bodyParser.json());
var shareRouter = express.Router();
var db = [];
shareRouter.route('/')
    .get(function(req, res) {
    res.status(200).json(db);
    })
    .post(function(req,res){
    db.push(req.body);
    res.status(200).json(db);
    });
app.use('/api/share', shareRouter);
app.listen(8080, function(){
console.log('Application started.');
})
module.exports = app;
