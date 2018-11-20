let ent = [];
ent.length = 10;
let mas = [ent, ent, ent, ent, ent, ent, ent, ent, ent, ent]; 
for (var i = 0;i < 10; i++) {
    for (var j = 0;j < 10; j++) {
    	mas[i][j] = Math.floor(Math.random() * 10);
    }
}
console.log(mas);
for (let k = 0;k < 10; k++) {
    for (let v = 0;v < 10; v++) {
        if (k == v) {
            mas[k][v] = 1;
        }
    }
}
console.log(mas);