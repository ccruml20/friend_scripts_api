var db = require("../models");

module.exports = function(app) {
  app.get("/api/authors", function(req, res) {
    db.authors.findAll({}).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.get("/api/authors/:id", function(req, res) {
    db.authors.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  // app.get("/api/authors/fb/:id", function(req, res) {
  //   console.log(req.body.authorName+"$$$$$$$$$$$$$$$************$$$$$$$$$$$$$$$")
  //   // console.log(req.params.json());
  //   db.authors.findOrCreate({
  //     where: {
  //       fbUserID: req.params.id},
  //       defaults: { // set the default properties if it doesn't exist
  //       authorName: req.body.authorName,
  //       userName: req.body.userName,
  //       password: "12345",
  //       fbUserID: req.body.fbUserID
  //     }
  //   }).then(function(dbAuthor) {
  //     res.json(dbAuthor)
  //   });
  // });

  app.post("/api/authors/fb/:id", function(req, res) {
    console.log(req,'bodylicious ');
    db.authors.findOrCreate({
      where: {

            fbUserID: req.params.id
      },
      defaults: { // set the default properties if it doesn't exist
      authorName: req.body.authorName,
      userName: req.body.userName,
      password: "12345",
      fbUserID: req.body.fbUserID
      }
    })
      .then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

  app.delete("/api/authors/:id", function(req, res) {
    db.authors.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbAuthor) {
      res.json(dbAuthor);
    });
  });

};
