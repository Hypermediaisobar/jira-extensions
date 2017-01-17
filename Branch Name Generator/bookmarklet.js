javascript:(function () {
	var cursorX = void 0;
	var cursorY = void 0;

	function onMouseMove(evt) {
		cursorX = evt.clientX;
		cursorY = evt.clientY;
	}

	function onKeyPress(evt) {
		var element = document.elementFromPoint(cursorX, cursorY);
		if (evt.charCode === 103) {
			var ticketTitle = $(element).closest(".ghx-issue")[0].getAttribute("aria-label");
			var gitFriendlyTicketName = ticketTitle.replace(/\s-\s|\s|\//g, "_");
			var resultsContainer = document.createElement("input");
			resultsContainer.value = "\"#" + gitFriendlyTicketName + "\"";
			document.body.appendChild(resultsContainer);
			resultsContainer.select();
			document.execCommand("selectAll");
			document.execCommand("copy", false, null);
			document.body.removeChild(resultsContainer);
		}
	}
	document.querySelector(".ghx-swimlane").addEventListener("mousemove", _.throttle(onMouseMove, 300));
	document.addEventListener("keypress", onKeyPress);
})()
