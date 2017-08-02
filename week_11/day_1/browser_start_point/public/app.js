
var Wizard = {name: "Harry", defend: function(){ return "Expecto Patronum" }}


function myFunction() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode(Wizard.defend());
    btn.appendChild(t);
    document.body.appendChild(btn);
}

console.log(Wizard.defend())
