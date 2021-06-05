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
  //Dostęp do API
  var data = this.responseText;
  var parsed = JSON.parse(data);
  //Dodawanie domyślnej ikonki dla przepisu
  var defaultLink= "//http://img.recipepuppy.com/10.jpg";
  var parsedThumbnailsCheck = parsed.results.map(function(results, thumbnail)
  {
    if(parsed.results.thumbnail ==' '){ 
    }else {
      (thumbnail, Object.assign(results,  {thumbnail: defaultLink} )); 
    }
  });
  //Dodawanie ID do danego wyniku wyszukiwania
  var parsedThumbnailsCheckWithIndex =parsed.results.map((results, id) => Object.assign(results, { id }))
  console.log(parsed.results)

  var jsonToString = JSON.stringify(parsedThumbnailsCheckWithIndex)


//Zapisanie do pliku
  var readyToFile = "export interface Result {\ntitle: string;\nthumbnail: string;\ningredients: string;\nhref: string;\n} \nconst results: Result[] = \n"+ jsonToString + "\n\nexport const getResults = () => results;";

fs.writeFile('ApiResults.ts', readyToFile, (err) => {
    if (err) {
        throw err;
    }


}); 
};

request.send()