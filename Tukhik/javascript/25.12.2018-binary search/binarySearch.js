const binarySearch = function(a, x){
  let p=0, r=a.length-1, q;
  while (p<=r){
    q = Math.floor((p+r+1)/2);
    if (a[q]==x){
      return q;
    }else if (a[q]>x){
      r=q-1;
    }else{
      p=q+1;
    }
  }
  return 'Not found';
}
                       
let a = [1,4,6,8,9,14,15,23];
let x = 9;
console.log(`${x}-i indexn e ${binarySearch(a, x)}`);
