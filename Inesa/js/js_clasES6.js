class People {
  constructor(name) {
    this.name = name;
  }

  info() {
    console.log("im anunn e" + this.name);
  }
}

class Developer extends People {
  info() {
    console.log(this.name + ' is developer');
  }
}
class JS_Developer extends Developer {
  info() {
    console.log(this.name + ' is js developer');
  }
}

var d = new JS_Developer('Inesa');
d.info();