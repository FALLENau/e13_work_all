# NPM Express server creation

In this practice I will be build a npm express server from scratch


### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```
## Getting Started

make a folder($mkdir) for your project, name it whatever you like. Then touch
```
server.js
```
Then use NPM to install your Dependency
```
npm init; npm install --save express
```
Once

### Building your server.js file

code this into your server
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
And tada!
## Nodemon install


### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

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
