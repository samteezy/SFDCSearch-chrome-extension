document.addEventListener('DOMContentLoaded', function() {
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