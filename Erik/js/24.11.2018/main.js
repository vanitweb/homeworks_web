//1.1
Array.prototype.pop = function() {
  return this.shift();
};
 let a = [1,5,6];
 console.log(a.pop());
  //1.2
Array.prototype.metodner = function() {
  for (let i in this) {
    console.log(i);
   }
 };
let a = [1,5,6];
a.metodner()

//2
let oby = {
  set set1(gnahatakan) {
    this.gnahatakan1 = gnahatakan;
  },
  set set2(gnahatakan) {
    this.gnahatakan2 = gnahatakan;
  },
  set set3(gnahatakan) {
    this.gnahatakan3 = gnahatakan;
  },
  get mijin_gnahatakan() {
    return (this.gnahatakan1 + this.gnahatakan2 + this.gnahatakan3) / 3;
  },
gnahatakan1 : "",
gnahatakan2 : "",
gnahatakan3 : "",
}
oby.set1 = 5;
oby.set2 = 8;
oby.set3 = 1;
console.log(oby.mijin_gnahatakan);
