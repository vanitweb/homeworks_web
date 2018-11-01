//task1 unknown fuction

function unknown(num1,num2){
    var sum = num1 + num2;
    console.log(`${num1} ev ${num2} tveri gumarn e ${sum}`);
    function unknown(){
        var mijin = sum / arguments.length;
        return mijin;   
  //console.log(`${num1} ev ${num2} tveri mijin tvabanakann e ${mijin} `);
    }
}
console.log(unknown(5,3));
