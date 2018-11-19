let mas = [[], [], [], [], [], [], [], [], [], []]; 
for (let i = 0;i < 10; i++) {
    for (let j = 0;j < 10; j++) {
    	mas[i][j] = Math.floor(Math.random() * 10);
    }
}
console.log(mas);
for (let h = 0; h < 10; h++) {
	for (let k = 0; k <= h; k++) {
		mas[h][k] = 0;
	}
}
console.log(mas);