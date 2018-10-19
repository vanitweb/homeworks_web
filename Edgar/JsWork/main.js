var i, j, parz;
      
for (i = 3; i < 100; i++) {
    parz = true;
    for (j = 2; j < i; j++)
    if (i % j === 0) {
        parz = false;
    }
    if (parz) {
        console.log(` ${i} թիվը պարզ է:`);
        }
}