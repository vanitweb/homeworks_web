//1
var data = {};
data.displayInfo();


//2
var data = {};
data.displayInfo.foo = "bar";



//3
function data(){
    var thing = "foo";
}
data();
thing;



//4
for(var i=0; i > 5; i++){
    console.log(i);
}



//5
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
