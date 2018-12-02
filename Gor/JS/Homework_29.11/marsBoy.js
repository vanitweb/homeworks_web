//Homeworks 29.11.2018
//Marskoy boy
console.log('******************************************************************************************************');
class Navak {
	constructor(navLength) {
		this.navLength = navLength;
	}
}
class Table {
	constructor(lengthH, lengthV) {
		this.lengthH = lengthH;
		this.lengthV = lengthV;
		this.navArray = new Array();
		this.navArray.push(new Navak(1));
		this.navArray.push(new Navak(1));
		this.navArray.push(new Navak(1));
		this.navArray.push(new Navak(1));
		this.navArray.push(new Navak(2));
		this.navArray.push(new Navak(2));
		this.navArray.push(new Navak(2));
		this.navArray.push(new Navak(3));
		this.navArray.push(new Navak(3));
		this.navArray.push(new Navak(4));
	}
}
class Gamer {
	constructor(gamerName) {
		this.gamerName = gamerName;
		this.table = new Table(10, 10);
	}
}
let gamerOne = new Gamer('gamerOne');
let gamerTwo = new Gamer('gamerTwo');
console.log(gamerOne);
console.log(gamerTwo);