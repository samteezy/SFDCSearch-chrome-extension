document.addEventListener('DOMContentLoaded', function() {
	var input = document.getElementById("q");
	// Execute a function when the user releases a key on the keyboard
	input.addEventListener("keyup", function(event) {
	  // Cancel the default action, if needed
	  event.preventDefault();
	  // Number 13 is the "Enter" key on the keyboard
	  if (event.keyCode === 13) {
		// Trigger the button element with a click
		document.getElementById("mybtn").click();
	  }
	});
	var btn = document.getElementById('mybtn');
		console.log(btn);
	btn.addEventListener('click', function() {
		query = document.getElementById("q").value;
			console.log(query);
		url ='https://sfdcsearch.com/#gsc.tab=0&gsc.q=' + query;
			console.log(url);
		chrome.tabs.create({ url: url });
	});
});