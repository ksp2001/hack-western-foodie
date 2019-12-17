const Clarifai = require('clarifai');

const app = new Clarifai.App({apiKey: '5b7f0c2efa4842dabd782cc91ce93def'});
const fs = require('fs');
const express = require('express');
const app2 = express();
app2.set('view engine', 'ejs');
app2.use(express.urlencoded({extended: true}))

app2.use(express.static('public'))
let imgURL = ""
let the_url = "https://www.allrecipes.com/search/results/?ingIncl="

app2.get('/', function(req, res){
   res.sendFile('html_front_end_foodie.html', {root: './public'});
});

app2.listen(process.env.PORT || 3000);
app2.post('/get-url', (req, res) => {
  let imgURL = ""
  imgURL = req.body.img_url
  let ingredients = []

app.models.predict("bd367be194cf45149e75f01d59f77ba7", imgURL).then(
    function(response) {
      let i = 0;
      response.outputs[0].data.concepts.forEach(element => {
          if ((element.name != "vegetable") && (element.name != "meat") && (element.name != "salad") && (element.name != "dairy") && (element.name != "fish")) {
            if (i<4) {
            ingredients.push(element.name);
            i+=1;
            }
          }
      });

      ingredients.forEach(element => {
        the_url+=element+','
      });
      the_url=the_url.substring(0, the_url.length-1)
      the_url += "&sort=re"
      //res.render('final.ejs', {the_url:the_url});
      console.log(the_url)
      res.redirect(the_url)
      // , function (err) {
      //   console.log("in open response")
      //   if ( err ) throw err;    
      //   });
    },
    function(err) {
      console.log("Oops there's an error")
    }
  );
})

