# JavaScript Server Prac

JavaScript Objectives of day 1 week 11. \
-Write JS into Browser Console \
-Use Chrome Dev Tools to see Resources \
-Understand how we can serve up JS to the browser

## Getting Started

First use the startpoint.zip files to setup files, this will make a basic JS sever to experience console within chrome, and a  DOM sever template to start from.

### Prerequisites

NPM + node_module sever

```
$npm install
```

## Effecting

```js
var app = function () {
  var hideQOTD = document.getElementById('quote-of-the-day')
  hideQOTD.hidden = true

  var articleColor = document.getElementsByTagName("article")

  Array.from(articleColor).forEach(function(article){
    article.className = "blue-quote"
  })
}

window.addEventListener('load', app);
```

### Break down into

Experimenting to become more familiar with JavaScript in D.O.M

```js
var appendElements = function(ulCat, liName, liFood, liPhoto) {
  var section = document.querySelector("#cats")
  section.appendChild(ulCat)
  ulCat.appendChild(liName)
  ulCat.appendChild(liFood)
  ulCat.appendChild(liPhoto)
}
```


## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [atom](https://atom.io/) - the lightweight text editor
* [npm](https://www.npmjs.com/) - package manager for JavaScript

## Authors

* **Reece Jones** - *Initial work* - [lost-in-Code](https://github.com/lost-in-Code-au)

See also the list of [contributors](https://github.com/lost-in-Code-au/JS_sever_prac/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks to the instructors at Codeclan for your instruction
* Inspiration: Billy my cat making me work hate to bring home the cat food
* and my wife for just being her
