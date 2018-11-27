var Persone, person, Developer,developer;

Person = function(name){
    this.name = name;
};

Person.prototype.greet = function()
{
    console.log("Hello, my name is " + this.name);
}

Developer = function (name, skills)
{
    Person.apply(this. argumements);
    this.skills = skills || [];
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;


developer = new Developer ("Vazgen",["html","css","js"]);
console.log(Developer.name);
console.log(developer.skills);
developer.greet();


// t2
function Mard() {
  this.name = '';
}
function developer() {
  Mard.call(this);
  this.ashxatavardz = [];
}
developer.prototype = Object.create(Mard.prototype);

developer.prototype.constructor = developer;



function webdeveloper() {
   developer.call(this);
	this.officename = "";
}
webdeveloper.prototype = Object.create(developer.prototype); 
webdeveloper.prototype.constructor = webdeveloper;
