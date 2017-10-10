var express = require('express'),
bodyParser  = require('body-parser');
var app = express();
app.use(bodyParser.json());
var scriptRouter = express.Router();
var db = [];
scriptRouter.route('/')
    .get(function(req, res) {
      console.log("hello moto");
    res.status(200).json(db);
    })
    .post(function(req,res){
    db.push(...req.body);
    res.status(200).json(db);
    });
app.use('/api/scripts', scriptRouter);
app.listen(8085, function(){
console.log('Application started.');
})
module.exports = app;
