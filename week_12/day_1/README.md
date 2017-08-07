# NPM Express server creation

In this practice I will be build a npm express server from scratch

learning objectives part1:
1. Know what express And Nodemon are
2. Understand how to define route in Express
3. Be able to create a basic Express Server
4. Be able to send an index.html and json back from our server

learning objectives part2:
1. Know how express does routes and routing
2. Understand what body-parser does
3. Understand the routes object
4. be able to create a RESTful api in Express


### Prerequisites

What things you need to install the software and how to install them

1. npm + nodejs
2. text editor
3. JSON Formatter (install on your browser)
4. npm body-parser
5. Insomnia REST Client

## Getting Started Part1

make a folder(mkdir) in your terminal for your project, name it whatever you like. Then touch
```
server.js
```
in your project folder

Once your done use NPM commands below to install your Dependency
```
npm init; npm install --save express
```
When the command start hit return till the end.

### Building your server.js file

code this into your server.js file
```js
var express = require('express')
var app = express()

app.get('/', function(req, res){
  res.json({data: 'Sup!'})
})

app.listen(3000, function(){
  console.log('App running on port' + this.address().port)
})
```
and start your server!
```
node server.js
```
Your should get the msg
```
App running on port3000
```
And tada! go to your url:
```
http://localhost:3000
```
and see your work!

```js
{
"data: 'Sup!'"
}
```

## Nodemon install
close your server down with ^c in terminal (" ^ " refers the the control key on mac) once server is stopped do the next step in terminal
```
npm install nodemon -g
```
-g refers to installing the dependencies in your golbal file network so it can be used anywhere.

Once nodemon is installed you can start it by
```
nodemon server.js
```
Nodemon will now update your page dynamically(i.e it will pickup any saves within your file system that is being used)


### Adding your dynamic public folder

Now that your server is dynamic we will need to add some features so it can keep up with the changes.

First create a 'index.html' file in your project folder and add this code to it
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title>my express</title>
  </head>
  <body>
    <h1>woah dude</h1>
  </body>
</tml>
```
It's important to notice '<link rel="stylesheet" href="style.css">' in the <head> tag is required to call the "style.css" file we will make shortly.


next step is to create a 'public' folder within your project folder. It must be called 'public' other wise Express won't understand it.

Then change your server.js code to take into count the changes we have made, this is what it will look like

```js
var express = require('express')
var app = express()

// app.get('/', function(req, res){
//   res.json({data: 'Sup!'})
// })//remove this block from your file

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html')
})

app.listen(3000, function(){
  console.log('App running on port: ' + this.address().port)
})

//add this
app.use(express.static('public'))//here is where we see the *magic*!
```
now create a 'style.css' within the public folder. open us you css file and add this code
```css
body {
  background-color: #333;
  color: orange;
}
```
go back to your webpage and refresh and see the magic!

your page will change to the css input, but wait thats not all!

if you change any parts of your included html, css, js and other files within your project, your server will pickup any changes and add them for you, and all you need to do is refresh your page.

### Part One of learning objectives done
---
### Understanding RESTful Objects

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [atom](https://atom.io/) - the lightweight text editor
* [npm](https://www.npmjs.com/) - package manager for JavaScript
* [Json Formatter](https://github.com/callumlocke/json-formatter) - a great little formatting extension for browsers
* [Insomnia](https://insomnia.rest/) - a platform to test your RESTful routes with

## Authors

* **Reece Jones**  - [lost-in-Code](https://github.com/lost-in-Code-au)

See also the list of [contributors](https://github.com/lost-in-Code-au/JS_sever_prac/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to google for allowing me to use there code
* Thanks to the instructors at Codeclan for your instruction
* Inspiration: Billy my cat making me work hate to bring home the cat food
* and my wife for just being her
