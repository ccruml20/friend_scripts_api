// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************
// Dependencies
// =============================================================
// Requiring our models
var db = require("../models");
// Routes
// =============================================================
module.exports = function(app) {
	app.get("/api/myStories/:authorId", function(req, res) {
		db.stories
			.findAll({
				include: [db.authors],
				limit: 6,
				order: [["createdAt", "DESC"]],
				where: { authorId: req.params.authorId }
			})
			.then(function(result) {
				res.json(result);
				// console.log(result);
				// res.json({response: "ok"})
			});
	});

	// GET route for getting all of the posts
	app.get("/api/stories", function(req, res) {
		// var query = {};
		// if (req.query.author_id) {
		//   query.AuthorId = req.query.author_id;
		// }
		db.stories
			.findAll({
				include: [db.authors]
			})
			.then(function(result) {
				res.json(result);
			});
	});
	app.get("/api/fullstory-:id", function(req, res) {
		// console.log(req.params.id);
		db.sentences
			.findAll({
				where: {
					storyId: req.params.id
				},
				include: [db.stories]
			})
			.then(function(result) {
				res.json(result);
			});
	});
	app.get("/api/firstsentence-:id", function(req, res) {
		// console.log(req.params.id);
		db.stories
			.findAll({
				attributes: ["sentence"],
				where: {
					id: req.params.id
				}
			})
			.then(function(result) {
				res.json(result);
			});
	});
	app.get("/api/sentences", function(req, res) {
		// var query = {};
		// if (req.query.author_id) {
		//   query.AuthorId = req.query.author_id;
		// }
		db.stories.findOne({ storyID: req.body.storyId }).then(function(result) {
			res.json(result);
		});
	});
	// Get rotue for retrieving a single post
	// app.get("/api/posts/:id", function(req, res) {
	//   db.Post.findOne({
	//     where: {
	//       id: req.params.id
	//     }
	//   }).then(function(dbPost) {
	//     console.log(dbPost);
	//     res.json(dbPost);
	//   });
	// });
	// POST route for saving a new post
	app.post("/api/stories", function(req, res) {
		console.log(req.body.storyTitle);
		// console.log(req.body.authorID);
		// console.log(req.body.sentence);
		db.stories
			.create({
				storyTitle: req.body.storyTitle,
				authorId: req.body.authorId,
				sentence: req.body.sentence
			})
			.then(function(result) {
				res.json(result);
			});
	});
	app.post("/api/sentences", function(req, res) {
		// console.log(req.body.storyTitle);
		console.log(req.body.storyId, ' (((((((((((((((((storyId)))))))))))))))))');
		console.log(req.body.sentence);
		db.sentences
			.create({
				sentence: req.body.sentence,
				storyId: req.body.storyId,
				authorId: 1
			})
			.then(function(result) {
				res.json(result);
				console.log(result, '{{{{{{{{{{{{{{{{[[[[[[[[[[[[[resuttbbbaby]]]]]]]]]]]]]}}}}}}}}}}}}}}}}');
			});
	});
	// DELETE route for deleting posts
	// app.delete("/api/posts/:id", function(req, res) {
	//   db.Post.destroy({
	//     where: {
	//       id: req.params.id
	//     }
	//   }).then(function(dbPost) {
	//     res.json(dbPost);
	//   });
	// });
	// PUT route for updating posts
	// app.put("/api/posts", function(req, res) {
	//   db.Post.update(
	//     req.body,
	//     {
	//       where: {
	//         id: req.body.id
	//       }
	//     }).then(function(dbPost) {
	//       res.json(dbPost);
	//     });
	// });
};
