//1.1 array-ի ցանկացած մեթոդ վերցնել, օրինակ sort-ը, փոխել

let phones = ["Xiaomi Redmi", "Huawey", "Samsung", "Nokia"];
Array.prototype.filter = function(phone){
	if(phone ==="Samsung"){
	console.log(1);
	}else{
		console.log('it is not Samsung');
	}
}
phones.filter("Xiaomi Redmi");

//1.2 ավելացնել ուրիշ, մեր ստեղծած մեթոդը
let array = [2, 4, 6, 8, 10];
Array.prototype.myFunction = function(){
	let result = [];
	for (let i = 0, l = this.length; i < l; i++){
		result.push(this[i]/2);
	}
	return result;
}
console.log(array.myFunction());



//2. Հայտարարել տիպ, որի բոլոր property-ները privat են, օգտագործել get, set

let phones = {
	name: "",
	HDD: "",
	RAM: "",
	price: "",
	
	set phone(value){
		this.phones.name = value;		
	},	
	set phHdd(value){
		this.phones.HDD = value;
	},
	set phRam(value){
		this.phones.RAM = value;
	},
	set phPrice(value){
		this.phones.price = value;
	},
	get phone(){
		return `${this.name} ${this.HDD} ${this.RAM} ${this.price}`;
	},
};
phones.name = "Xiaomi Redmi 5";
phones.HDD = "16GB";
phones.RAM = "2GB";
phones.price = "98000dr";
console.log(phones.phone);