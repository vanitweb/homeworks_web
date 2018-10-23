//4.ամենաշատ կրկնվող էլեմենտ

let array2 = [1,5,8,5,2,1,6,5,9,3];
console.log("եղած զանգվածն է");
console.log(array2);
let max;
let index;
let size1 = 0;
for( let i = 0; i < array2.length; i++ ){
    let size = 1;
    for( let j = 0; j < array2.length; j++ ){
        if( ( array2[i] === array2[j] ) && ( i != j ) ){
            size++;
        }
    }
    if( size1 < size ){
        max = array2[i];
        index = i;
    }
    size1 = size;
    }
console.log( "ամենաշատ կրկնվող էլեմենտն է" );
console.log( max );
console.log( "ամենաշատ կրկնվողի ինդեքսն է" );
console.log( index );

