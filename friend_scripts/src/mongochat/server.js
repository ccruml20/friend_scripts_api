const express = require("express");
const mongo = require("mongodb").MongoClient;
const client = require("socket.io").listen(4000).sockets;

const app = express();
const http = require("http").Server(app);
http.listen(8000, function() {
	console.log("listening on *:8000");
});

app.get("/", function(req, res) {
	// res.send("<h1>hello world</h1>");
	res.sendFile(__dirname + "/index.html");
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
