/*Do persons work*/
let myMap = new Map();
let persons = [{
    name: "Anna",
    surname: "Asryan",
    age: 22,
    email: "asr@mail.ru",
    id: 2,
}, {
    name: "Armen",
    surname: "Hakobyan",
    age: 25,
    email: "armen@gmail.com",
    id: 3,
}, {
    name: "Alina",
    surname: "Avagimyan",
    age: 30,
    email: "al@gmail.com",
    id: 1,
}, {
    name: "Mona",
    surname: "Poghosyan",
    age: 60,
    email: "mona@gmail.com",
    id: 3,
}, {
    name: "laura",
    surname: "Apinyan",
    age: 59,
    email: "laur@gmail.com",
    id: 2,
}, {
    name: "Nare",
    surname: "Petrosyan",
    age: 69,
    email: "nare@gmail.com",
    id: 1,
}];

let description = [{
    jobTitle: "doctor",
    salary: 1000000,
    workExperience: "4years",

    jobTitle: "economist",
    salary: 700000,
    workExperience: "5years",

    jobTitle: "teacher",
    salary: 300000,
    workExperience: "8years",
}];

myMap.set(persons[3], description[1]);
myMap.set(persons[4], description[0]);
myMap.set(persons[2], description[1]);


function Employment(persons) {
    if (myMap.has(persons)) {
        console.log("Employed");
    } else {
        console.log("Unemployed");
    }
}
Employment(persons[0]);
Employment(persons[1]);
Employment(persons[2]);
Employment(persons[3]);
Employment(persons[4]);
Employment(persons[5]);


////1. Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։

//is_message_read({text: “hello”, from: “ananymous”}) => true/false
var read = new Set();
var messages = [{
    text: "Hi",
    from: "Rob"
}, {
    text: "Hi,how are you?",
    from: "Moon"
}, {
    text: "I'm fine,thank you",
    from: "Rob"
}];
read.add(messages[1]);
read.add(messages[2]);

function isMessageRead(messages) {
    return read.has(messages)

};
console.log(isMessageRead(messages[1]));