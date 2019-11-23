const Clarifai = require('clarifai');

const app = new Clarifai.App({apiKey: '5b7f0c2efa4842dabd782cc91ce93def'});
let ingredients = []
let block_list = ["vegetable", "meat", "dairy","salad"]
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
let img_url = ""
let the_url = "https://www.allrecipes.com/search/results/?ingIncl="

readline.question(`What's your image url: `, (img) => {
  img_url = img
  readline.close() 


app.models.predict("bd367be194cf45149e75f01d59f77ba7", img_url).then(
    function(response) {
      let i = 0;
      response.outputs[0].data.concepts.forEach(element => {
        //console.log(element.name) 
          if ((element.name != "vegetable") && (element.name != "meat") && (element.name != "salad") && (element.name != "dairy")) {
            if (i<4) {
            ingredients.push(element.name);
            i+=1;
            }
          }
      });

      console.log(ingredients)
      ingredients.forEach(element => {
        the_url+=element+','
      });
      the_url=the_url.substring(0, the_url.length-1)
      the_url += "&sort=re"
      console.log(the_url)
    },
    function(err) {
      console.log("Oops there's an error")
    }
  );
})

