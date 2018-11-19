var masiv = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
var texap;
for ( var i = 0; i < 20; i += 2 ) {
  texap = masiv[i];
  masiv[i] = masiv[i + 1];
  masiv[i + 1] = texap;
}
for (var kz in masiv ) {
  console.log( masiv[kz] )
}
