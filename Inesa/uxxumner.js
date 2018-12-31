//1
var data = {};
data.displayInfo();
//uxxum
var data = 
{
displayInfo:function(){console.log("blbl");}	
};
data.displayInfo();//datan funkcia chuni


//2
var data = {};
data.displayInfo.foo = "bar";
//uxxum
var data = {
	displayInfo:{}
};
data.displayInfo.foo = "bar";




//3
function data(){
    var thing = "foo";
}
data();
thing;
//uxxum
var thing;
function data(){
	thing = "foo";
}
data();
thing;


//4
for(var i=0; i > 5; i++){
    console.log(i);
}
//uxxum
for(let i=0; i < 5; i++){
    console.log(i);
}



//5
function addIfEven(num){
    if(num % 2 = 0){
        return num + 5;
    }
    return num;
}
//uxxum
function addIfEven(num){
    if(num % 2 === 0){
        return num + 5;
    }
    return num;
}

//6
function displayEvenNumbers(){
    var numbers = [1,2,3,4,5,6,7,8];
    var evenNumbers = [];
    for(var i=0; i<numbers.length-1; i++;)
	{
        if(numbers % 2 = 0); 
		{
            evenNumbers.push(i);
        }
        return evenNumbers;
    }
}
displayEvenNumbers();
//uxxum
function displayEvenNumbers(){
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    var evenNumbers = [];
    for(var i = 0; i < numbers.length - 1; i++)
	{
        if(numbers[i] % 2 === 0)
		{
            evenNumbers.push(numbers[i]);
        }
    }
	return evenNumbers;
}
displayEvenNumbers();























