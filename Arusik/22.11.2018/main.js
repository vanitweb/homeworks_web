//1.1 array-ի ցանկացած մեթոդ վերցնել, օրինակ sort-ը, փոխել

let phones = ["Xiaomi Redmi", "Huawey", "Samsung", "Nokia"];
Array.prototype.filter = function(phone) {
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

let phone = {
	name: 'Samsung',
	HDD: '64GB',
	RAM: '4GB',
	price: '130000',
	get smartPhone() {
		return `${this.name} ${this.HDD} ${this.RAM} ${this.price}`;
	},
	set smartPhone(value) {
		const param = value.split(',');
		this.name = param[0];
		this.HDD = param[1];
		this.RAM = param[2];
		this.price = param[3];
	}
};
phone.smartPhone = 'Xiaomi Redmi, 32GB, 2GB, 80000';
//phone.smartPhone = 'Nokia, 8GB, 1GB, 50000';
console.log(phone);
