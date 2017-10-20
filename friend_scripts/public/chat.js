(function() {
	var element = function(id) {
		return document.getElementById(id);
	};

	// Get Elements
	var status = element("status");
	var messages = element("messages");
	var textarea = element("textarea");
	var username = element("username");
	var clearBtn = element("clear");

	window.onload = function() {
		document.getElementById("chatContainer").style.display = "none";
	};

	$("#chatBtn").click(function() {
		$("#chatContainer").toggle();
	});

	// Set default status
	var statusDefault = status.textContent;

	var setStatus = function(s) {
		// Set status
		status.textContent = s;

		if (s !== statusDefault) {
			var delay = setTimeout(function() {
				setStatus(statusDefault);
			}, 3000);
		}
	};

	// Connect to socket.io
	var socket = io.connect("http://127.0.0.1:4000");

	// Check for connection
	if (socket !== undefined) {
		console.log("Connected to socket...");

		// Handle server output
		socket.on("output", function(data) {
			// console.log(data);
			if (data.length) {
				for (var i = 0; i < data.length; i++) {
					// Create message divs

					$("#messages").append(
						`<div class="chat-message">
							<strong>${data[i].name + ": "}</strong>
							${data[i].message}
						</div>`
					);
				}
			}
		});

		// Get status from server
		socket.on("status", function(data) {
			// get mesage status
			setStatus(typeof data === "object" ? data.message : data);

			// if status is clear, clear text
			if (data.clear) {
				textarea.value = "";
			}
		});

		// Handle client input
		textarea.addEventListener("keydown", function(event) {
			if (event.which === 13 && event.shiftKey == false) {
				// emit to server input
				socket.emit("input", {
					name: username.value,
					message: textarea.value
				});

				event.preventDefault();
			}
		});

		// handle chat clear
		clearBtn.addEventListener("click", function() {
			socket.emit("clear");
		});

		// clear message
		socket.on("cleared", function() {
			messages.textContent = "";
			username.value = "";
		});
	}
})();
