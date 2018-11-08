var user = {
  name: 'Vaso',

  sayHi: function() {
    console.log( this.name );
  }
};

user.sayHi(); // sayHi в контексте user