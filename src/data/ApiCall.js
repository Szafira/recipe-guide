var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest()

request.open('GET', 'http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3', true)
request.onload = function () {
  // Begin accessing JSON data here
  var data = this.responseText;
  var parsed = JSON.parse(data);

  console.log(parsed)
  if (request.status >= 200 && request.status < 400) {
      console.log(parsed);
  } else {
    console.log('error')
  }
}

request.send()