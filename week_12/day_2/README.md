individual# Mongo db

##learning objectives

###Part 1
1. Explain what NoSQL is
2. Know how to run Mongo db
3. Know how to create datebase
4. Know how to create collection
5. Know how to create a document
6. Know how to delete a datebase

### Prerequisites

What things you need to install the software and how to install them

1. npm + nodejs
2. text editor
3. JSON Formatter (install on your browser)
4. npm body-parser
5. Insomnia REST Client

#### Tips for terminal
in your terminal you can use the alias 'i' for install on npm and other program frameworks like so
```sh
npm i --save express
```
#### Tips of debugging

```js
function = function(event) {
  console.log(event)
}
```
also works in RESTful requests with body-parser(npm)
```js
filmsRouter.post('/', function(req, res){
  console.log(req.body)
  films.push(req.body.film)
  res.json({data: films})
})
```
<br>
Remember if stuff double check your webpack and server terminal, while there running you will get feedback
```sh
throw er; // Unhandled 'error' event
      ^
Error: listen EADDRINUSE 'error' event
    at errnoExecption (net.js:901:11)
```
ect

## What is NoSQL?
basically in the simplest idea NoSQL is Mongo db


add name refers of SQL vs NoSQL

##Start Mongo and create datebase

```sh
mongod
```
then open a new tab in terminal and type
```sh
mongo
```
this starts your server and puts you into the shell of Mongo
<br>
once in Mongo type
```sh
>use farm;
```
which creates and moves you into 'farm' database.
```sh
db.animals.insert({});
```
creates a animals table within your farm database
<br>
then add your js object into the input field
```sh
db.animals.insert({name:"Billy", type:"Little Lion"});
```
this will create and insert into table/collection

```sh
db.animals.find();
```
will find all items within that table/collection

```sh
db.dropDatabase();
```
drops the database

##Making a mongo file
make a mongo folder and cd into it, then touch a js file ['mongo_play.js'](mongo/mongo_play.js) and add this code, same as when we wore in mongo db

```js
use farm;
db.dropDatabase();
```
then test in terminal by typing
```sh
mongo < mongo_play.js
```

```js
db.animals.insert({
  name: "Billy",
  type: "Little Lion"
});

db.animals.find();
```
and then run in terminalagain
```sh
mongo < mongo_play.js
```

add to the file
```js
db.animals.insert([{
  name: "Billy",
  type: "Little Lion"
},{
  name: "Whitepaw",
  type: "Dire Wolf"
},{
  name: "Andrea",
  type: "Mermaid"
},{
  name: "Eugene",
  type: "Catfish"
}]);
```
<br>
add your find method
```js
db.animals.find();
```
this will return your table(animals)

<br>
if you need to find one thing use
```js
db.animals.find({name: "Eugene"});
```
it will find the individual item

###Updating

```js
db.animals.update(
  { name: "Eugene" },
  {
    $set: { type: "Goose" }
});
```

###Deleting in Mongo

```js
db.animals.remove({ name: "Eugene" });
```

Interesting when you try to look for it with
```js
db.animals.find({name: "Eugene"});
```
this will be the response
```sh
WriteResult({ "nRemoved" : 1 })
```
