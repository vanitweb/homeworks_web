//1
var data = {};
Object.prototype.displayInfo = function() {
  return 0;
};
data.displayInfo();


// 2
let data = {};
data.displayInfo = {};
data.displayInfo.foo = "bar";




//3
let thing;
function data(){
    return thing = "foo";
}
data();
thing;



// //4
for(var i=0; i < 5; i++){
    console.log(i);
}



//5
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}
