const zangvac = [
	{
		author : 'kl11111',
		title : 'ggdash',
		read : false,
	},
	{
		author : 'kl222',
		title : 'ggdash',
		read : true,
	},
	{
		author : 'kl3333',
		title : 'ggdash',
		read : true,
	},
	{
		author : 'kl5333',
		title : 'ggdash',
		read : false,
	}
];
function girq(bool) {
	for (var i = 0; i < zangvac.length; i++) {
		if (zangvac[i].read === bool && bool === true) {
			console.log(`${zangvac[i].author} - ${zangvac[i].title}`);
		}else if(zangvac[i].read !== bool && bool === false){
			console.log(`${zangvac[i].author} - ${zangvac[i].title}`);
		}
	}
}
girq(true);



// object_neri tarberutyun@

let obj1 = {'k' : 5, 'o' : 45, 'p' : 78, 'l' : 12, 'po' : 456,};
let obj2 = {'m' : 5, 'o' : 45, 'po' : 789, 'x' : 78, 'l' : 12};
let obj3 = {};
console.log(obj2);
console.log(obj1);

function tarberutyun(obj_1,obj_2) {
	for (i in obj_1) {
		for(j in obj_2){
			if(i === j && obj_1[i] === obj_2[j]){
				delete obj_1[i];
				delete obj_2[j];
			}
		}
	}
	obj3 = obj1;
	for(let i in obj_2){
		obj3[i] = obj_2[i]
	}
	console.log(obj3);
}
tarberutyun(obj1,obj2);

//   3rd


const obj_revers = {
	'karmir' : "red",
	'kanach' : "green",
	'kapuyt' : "blue",
}
function objRevers(obyekt) {
	for (i in obyekt){
		obyekt[obyekt[i]] = i;
		delete obyekt[i];
	};
	console.log(obyekt);
}
objRevers(obj_revers);





























//ghh
