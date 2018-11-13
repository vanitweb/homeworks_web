//METHOD this
/*const ma = {
    "keye" : "value",
     getKey:function(){
         this.keye = "Vavle";
        return this.keye;
     }
};
const ma1 = {
    "keye" : 25,
};

let data =ma.getKey();

console.log(ma.getKey());
console.log(ma1.getkey());
console.log(ma.keye);*/

let x = 3;
let foo ={
    x: 2,
        bar:{
            x:1,
            bar:function(){
                return this.x;
            }
        }
};
let go = foo.bar.bar;
console.log(go());// "use script"-ov ktpi 3, vercnelov global x-y, else - undefined;
console.log(foo.bar.bar()); // => 1
