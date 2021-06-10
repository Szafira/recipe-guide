class ApiCall {
 async ApiCall(inputVal: any)
{
const XMLHttpRequest = require("./../../node_modules/xmlhttprequest").XMLHttpRequest;

const request = new XMLHttpRequest()
const urlBase ="http://www.recipepuppy.com/api/?i=";
const ingredients = inputVal;
const fullUrl = urlBase + ingredients;

function getUrl() {



  console.log(fullUrl);

  request.open('GET', fullUrl, true)

  request.onload = function () {
    // Begin accessing JSON data here
    const data = this.responseText;
    const parsed = JSON.parse(data);
    const jsonToString = JSON.stringify(parsed.results)

    console.log(parsed.results);  

  //Zapisanie do pliku
  const readyToFile = "export interface Result {\ntitle: string;\nthumbnail: string;\ningredients: string;\nhref: string;\n} \nconst results: Result[] = \n"+ jsonToString + "\n\nexport const getResults = () => results;";

 writeFile('ApiResults.ts', readyToFile, (err: any) => {
      if (err) {
          throw err;
      }
      console.log("JSON data is saved.");

  }); 
  };
  request.send()
}
return inputVal;
}
}
export const Api = new ApiCall();