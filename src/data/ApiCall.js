var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

var zdanie = "tomatoes,pasta";
var podzielone = zdanie.split(",", 10);


var request = new XMLHttpRequest()
var urlBase ="http://www.recipepuppy.com/api/?i=";
var ingredients = zdanie;
var fullUrl = urlBase + ingredients;

const fs = require('fs');

console.log(fullUrl);

request.open('GET', fullUrl, true)

request.onload = function () {
  // Begin accessing JSON data here
  var data = this.responseText;
  var parsed = JSON.parse(data);
  var jsonToString = JSON.stringify(parsed.results)

  console.log(parsed.results);

//Zapisanie do pliku
 var readyToFile = "export interface Result {\ntitle: string;\nthumbnail: string;\ningredients: string;\nhref: string;\n} \nconst results: Result[] = \n"+ jsonToString + "\n\nexport const getResults = () => results;";

fs.writeFile('ApiResults.ts', readyToFile, (err) => {
    if (err) {
        throw err;
    }
    console.log("JSON data is saved.");

}); 
};

request.send()