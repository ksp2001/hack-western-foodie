## BEST WITH WHAT'S LEFT :: JEFFREY & KETKI HACKWESTERN6

1. Where Ketki and Jeffrey try to solve an actual problem by analyzing the ingredients in the fridge and attempt to find a recipe that can be made using those.
2. We use the Clarifai api to recognize the ingredients on the photo, and then uses the top 4 appearing ingredients to search in AllRecipes to see dishes that contain them.

## HOW TO USE OUR PROGRAM
1. Create a folder on your computer and open it in the Terminal (Command Line) :: [Quick Intro To CLI](https://launchschool.com/books/command_line/read/files_directories_executables#clicore)
2. 'git init' into it so that it forms a local repository. Then do git clone _'clone with https' url found at the top_
3. Then, _cd_ into the project folder in your terminal and type 'node index.js'.
4. Lastly, you want to open your browser (make sure you do step 3 before this) and type http://localhost:3000/ to see our project in action!
5. Last warning, make sure once you're done running it, go to terminal and hit Ctrl+C to exit out of the app.

## Inspiration : 
We wanted to solve a practical problem we'd both faced in our day-to-day lives. Food wastage is a big issue in Canada, with over 2.2 million tonnes of edible food being wasted each year. We wanted to make something that not only makes our lives easier, but make a difference to the environment as well.

## What it does
Our project accepts a URL link of a picture of the contents of your fridge. Using the Clarifai API, which utilizes machine learning to recognize specific ingredients in pictures, we take the ingredients identified and return recipes on the site AllRecipes.com that use those same ingredients.

## How we built it
Our front end was build using HTML/CSS. We used Node.js to do our server-side architecture, and Express.js as a link between the front-end and back-end. In order to recognize the ingredients in the picture, we utilized the Clarifai API.

## Challenges we ran into
One of our challenges was parsing the out Json file correctly to retrieve specific data points we needed for our program. 
Another challenge we had was linking the Node.js variable values with the corresponding HTML (EJS) file to be displayed on screen, or taken from the screen. 

## Accomplishments that we're proud of
HackWestern6 marks as the first hackathon for the both of us, and we are very proud of what we've managed to build. It included a big learning curve on our parts given we'd never worked with any other technologies except HTML, CSS and Vanilla Javascript before, and we're especially proud of managing to parse our JSON as required as well managing to redirect our front-end to the require AllRecipes page when the user hits submit, rather than making them manually click on a link appearing on the screen.

## What we learned
This entire project was entirely about learning for us. We learned how to implement API's, server-side programming using Node.js and Express.js, and how to work as a team through frustrations and bugs. 

## What's next for Best with what's Left
We definitely want to advance this project further because we really believe in the practicality and simplicity of this concept and it could become very useful to the everyday family if developed into an app. We want to include the capability to take photos and submitting them instead of submitting URL links, which we understand is a hassle. We also want to implement our own, trained, ML model instead of drawing from an API to get better and more customized results. In the future, we also want to add health benefits to this product, like calorie counting and macronutrient information. 

