/*Funkciayi amen kanchov stexcvac Objectum avelacnel key-value nshvac argumentnerov*/
/*function adding(){
const ob = {};
    return function(k, v){
        ob[k] = v;
        console.log(ob);
    } 
}
const r = adding();
r("name", 25);
r("name1", 26);
r("Sebo", 32)*/

const ob1 = {
    'Gor': {
    'tariq': 25, 
    'Ser': "M",
    'Cnn tiv': 1993,
},
"Edgar": {
    'tariq': 32, 
    'Ser': "M",
    'Cnn tiv': 1986,
},
};
function show(key, value){
   if(!(value === undefined)){
       console.log(ob1[key][value]); 
   }else{
        console.log( ob1[key]); 
    }
}
show("Edgar");
