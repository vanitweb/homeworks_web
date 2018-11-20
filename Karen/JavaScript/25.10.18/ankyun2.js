let ent = [];
let mas = [ent, ent, ent, ent, ent, ent, ent, ent, ent, ent]; 
for (let i = 0;i < 10; i++) {
    for (let j = 0;j < 10; j++) {
    	mas[i][j] = Math.floor(Math.random() * 10);
    }
}
console.log(mas);
for (let i = 0; i < 10; i++) {
	for (let j = 0; j <= i; i++) {
		mas[i][j] = 0;
	}
}
console.log(mas);