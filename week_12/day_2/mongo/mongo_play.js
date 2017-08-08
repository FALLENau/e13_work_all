use farm;

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

db.animals.find();

db.animals.update(
  { name: "Eugene" },
  {
    $set: {type: "Goose"}
});

db.animals.remove({ name: "Eugene" });

db.animals.find({ name: "Eugene" });

db.dropDatabase();
