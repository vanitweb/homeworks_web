//sort function
let arr = ["a", "b", 4, 88, true];
Array.prototype.sort = function() {
	console.log("tpum e zangvaci erkarutyunn");
	console.log(arr.length);
}
arr.sort();

//stexcel metod
let arr = ["a", "b", 4, 88, true];
Array.prototype.tpel = function() {
	console.log("sa nor metod e");
}
arr.tpel();

//stxcel nor tip(Class)

let My_class = {
	hatkutyun1: "",
	hatkutyun2: "",
	hatkutyun3: "",
	set set_hatkutyun1(x) {
		this.hatkutyun1 = x;
	},
	set set_hatkutyun2(x) {
		this.hatkutyun2 = x;
	},
	set set_hatkutyun3(x) {
		this.hatkutyun3 = x;
	},
	get My_Classinfo() {
		
		return (this.hatkutyun1 + this.hatkutyun2 + this.hatkutyun3 );
	},
};
My_class.hatkutyun1 = "AAA";
My_class.hatkutyun2 = "FFF";
My_class.hatkutyun3 = 66;
console.log(My_class.My_Classinfo);
