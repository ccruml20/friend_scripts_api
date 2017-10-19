// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
var passport = require("passport");
const mongo = require("mongodb").MongoClient;
const client = require("socket.io").listen(4000).sockets;

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8082;
var DEV = (process.env.NODE_ENV = "development");

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Static directory
app.use(express.static("public"));

//auth Sessions

app.use(cookieParser());

require("./config/passport.js")(app);

// Routes
// =============================================================
require("./routes/post-api-routes.js")(app);
require("./routes/html-routes.js")(app);
require("./routes/authRoutes.js")(app);
// require("./routes/author-api-routes.js")(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function() {
	app.listen(PORT, function() {
		console.log("App listening on PORT " + PORT);
	});
});

// Connect to mongodb
mongo.connect("mongodb://127.0.0.1/mongochat", function(err, db) {
	if (err) {
		throw err;
	}

	console.log("MongoDB connected...");

	// Connect to Socket.io
	client.on("connection", function(socket) {
		let chat = db.collection("chats");

		// Create function to send status to server
		sendStatus = function(s) {
			socket.emit("status", s);
		};

		// Get chats from mongo collection
		chat
			.find()
			.limit(100)
			.sort({ _id: 1 })
			.toArray(function(err, res) {
				if (err) {
					throw err;
				}

				// Emit messages to client
				socket.emit("output", res);
			});

		// Handle input events
		socket.on("input", function(data) {
			let name = data.name;
			let message = data.message;

			// Validate name and message
			if (name == "" || message == "") {
				sendStatus("Please enter a name and a message");
			} else {
				// Insert message into database
				chat.insert({ name: name, message: message }, function() {
					client.emit("output", [data]);

					// Send status object
					sendStatus({
						message: "Message sent",
						clear: true
					});
				});
			}
		});

		// Handle clear
		socket.on("clear", function(data) {
			// Remove all chats from the collection
			chat.remove({}, function() {
				// Emit event letting client know everything has been cleared
				socket.emit("cleared");
			});
		});
	});
});
