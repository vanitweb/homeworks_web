// Հանձնարարություն 1. 1-ից n թվերի միջին թվաբանականը։
let a = 0;
let n = 20;

for (let i = 1; i <= n; i++) {
	a += i;
}
a /= n;
console.log(`1-ից ${n} թվերի միջին թվաբանականն է ${a}։`);