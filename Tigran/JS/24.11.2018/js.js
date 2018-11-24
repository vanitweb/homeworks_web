//                         1.1
Object.prototype.forEach = function () {
	console.log("chi ashxatum ECMA8 um");
}


//                         1.2
Array.prototype.araji_element = function () {
	console.log(this[0]);
}



//                          2

let object = {
    arr : [],
    set Set(value) {
        this.arr.push(value);
    },
    set kluch(value) {
        this.h = this.arr.length / value;
    },
    get element(){
    	console.log(this.arr,this.h);
    }
}
object.Set = 74;
object.Set = 45;
object.Set = 13;
object.kluch = "5";
console.log(object);
























//jjj
