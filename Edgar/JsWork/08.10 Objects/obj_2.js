//METHOD this
const ma = {
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
ma1.getkey  = ma.getKey;

console.log(ma.getKey());
console.log(ma1.getkey());
console.log(ma.keye);
