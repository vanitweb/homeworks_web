// 1.
function masGum(mas) {
  mas = mas.filter(function (tiv) {
    return tiv > 0;
  } );
  let sum = mas.reduce(function (sum, tiv) {
    return sum + tiv;
  })
  console.log(sum);
}
masGum([-1, -2, 4, 5, 6, -8]);