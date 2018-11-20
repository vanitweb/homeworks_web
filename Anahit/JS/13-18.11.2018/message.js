//1. Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։

//is_message_read({text: “hello”, from: “ananymous”}) => true/false

let message1 = {text: 'hello',from: 'Anna'};
let message2 = {text: 'by',from: 'Ani'};
let message3 = {text: 'hi',from: 'An'};
let message4 = {text: 'how are you',from: 'Ar'};

var read = new Map();

read.set(message2,{user1: new Date(2018,11,18),user2: new Date(2016,10,8)});
read.set(message3,{user1: new Date(2014,3,8),user3: new Date(2016,1,8)});

function is_message_read(obj) {
    /*if(read.get(obj)){
        return true;
    } else {
        return false;
    }*/
    return read.has(obj);
}
console.log(is_message_read(message1));
console.log(is_message_read(message2));
console.log(is_message_read(message3));
console.log(is_message_read(message4));

//2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
//message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read

function message_read_info(obj) {
    if(read.get(obj)){
        console.log('կարդացվելէ տվյալ օգտատրերի կողմից`');
        console.log(Object.keys(read.get(obj)));
        console.log('1ին անգամ կարդացվել են`');
        let date = Object.values(read.get(obj));
        let minDate = date[0];
        for(let i = 1; i < date.length; i++) {
            if(date[i] < minDate) {
                minDate = date[i];
            }
        }
        console.log(minDate); 
        } else {
            console.log('այդ նամակը կարդացված չէ');
        }
}
message_read_info(message1);
message_read_info(message2);
message_read_info(message3);
message_read_info(message4);
                
                
