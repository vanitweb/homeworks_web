//1. Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։

//is_message_read({text: “hello”, from: “ananymous”}) => true/false

let message1 = {text: 'hello',from: 'Anna'};
let message2 = {text: 'by',from: 'Ani'};
let message3 = {text: 'hi',from: 'An'};
let message4 = {text: 'how are you',from: 'Ar'};

var read = new Set();

read.add(message2);
read.add(message3);

function is_message_read(obj) {
    return read.has(obj);
}
console.log(is_message_read(message1));
console.log(is_message_read(message2));
console.log(is_message_read(message3));
console.log(is_message_read(message4));

                
                
