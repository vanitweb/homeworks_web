/*mijin tvabanakan*/
let zro = 0;
let a = 10;
for(let i = 1; i <= a; i++){
   zro += i;
   
}
zro = zro/(a+1);
console.log(`mijin tvabankan  ${zro} e`);


 


/* parz tiv 1*/
for (var i=2; i<=25; i++){
    for(var j=2; j<=i; j++){
        if (i%j == 0) {
        	break;
        }
    }if(j==i) {
    	console.log(i);
    }
}

