# NPM Express server creation

In this practice I will be build a npm express server from scratch

learning objectives:
1. Know what express And Nodemon are
2. Understand how to define route in Express
3. Be able to create a basic Express Server
4. Be able to send an index.html and json back from our server


### Prerequisites

What things you need to install the software and how to install them

1. npm
2. node Js
3. text editor
4. JSON Formatter (install on your browser)

## Getting Started

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

Now that your server is dynamic we will need to add some features so it can keep up with the changes


first step is to create a public folder within your project folder. Then change your server.js code to look like this

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

app.use(express.static('public'))
```
and there you go!

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone who's code was used
* Inspiration
* etc
