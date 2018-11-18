//                              1


let zangvac_1 = [1,2,3,-14,,-100000,-4,-7,55,6];
function drakan(zangvac) {
	zangvac = zangvac.filter(function (x) {
		return x > 0;
	});
	let gumar = zangvac.reduce(function (tiv1,tiv2) {
		return tiv1 + tiv2;
	})
	console.log(gumar)
}
drakan(zangvac_1)


//                         2



let massiv = [7, 6, 5, 44];
function qarak(zangvac) {
	let taza = zangvac.map(function (x) {
		return x * x;
	})
	console.log(taza);
}
qarak(massiv)



//                               4  "sxal"


let zangvac01 = [9,11,1,13,15,45];
let zangvac02 = [8,9,1,10,45,12,14]

function chkrk(zang1,zang2) {
	let taza = zang1.concat(zang2);
	taza.sort();
	console.log(taza);
	for (let tazal = taza.length, i = 0; i < tazal; i++) {
		if (taza[i] === taza[i+1]) {
			taza.splice(i,2);
		}
	}
	console.log(taza);
}
chkrk(zangvac01,zangvac02);


//                                     3

let mardik = [
	{
		name: "Vardan",
		surname: "Vardanyan",
		age: 36,
		granc_or: "or1", 
	},
	{
		name: "Grigor",
		surname: "Harutunyan",
		age: 12,
		granc_or: "or2",
	},
	{
		name: "Gurgen",
		surname: "Piloyan",
		age: 78,
		granc_or: "or3", 
	},
	{
		name: "Vaxinak",
		surname: "Inqnstinqyan",
		age: 44,
		granc_or: "or4",
	},
];
function obj_sort(zangvac, fil) {
	zangvac.sort(function (mard1, mard2) {
		if(mard1[fil] < mard2[fil]){
			return -1;
		}else{
			return 1;
		}
	});
	console.log(zangvac);
}
obj_sort(mardik,"age");











