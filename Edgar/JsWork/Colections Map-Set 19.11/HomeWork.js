/* Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։*/
//is_message_read({text: "hello”, from: "ananymous”}) => true/false
let myMape = new Set();
let Emails = [{
        text: "hello Zara",
        from: "Davit"
    },
    {
        text: "For Davit",
        from: "Zara"
    },
    {
        text: "hello",
        from: "ananymous"
    },
    {
        text: "Barev",
        from: "Brain"
    },
];

function is_message_read(value) {
    return myMape.has(value) ? true : false;
}
myMape.add(Emails[0]); 
myMape.add(Emails[2]);
console.log(is_message_read(Emails[0]));
console.log(is_message_read(Emails[1]));
console.log(is_message_read(Emails[2]));
/*2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read*/
let WhoIsRead = new Map();
let obj3 = [{
        readOn: "2018-Nov-18",
        from: "Zaven"
    },
    {
        readOn: "2016-Mar-05",
        from: "Karen"
    },
    {
        readOn: "2017-Apr-14",
        from: "Ani"
    },
    {
        readOn: "2017-Jun-11",
        from: "Arpine"
    },
];
WhoIsRead.set(Emails[0], obj3[0]);
WhoIsRead.set(Emails[2], obj3[1]);
WhoIsRead.set(Emails[3], obj3[3]);

function message_read_info(value2) {
    if (WhoIsRead.has(value2)) {
        console.log(Object.values(WhoIsRead.get(value2)).join(" "));
    } else {
        console.log("Message is not read yet:");
    }
}
message_read_info(Emails[1]);
message_read_info(Emails[0]);
message_read_info(Emails[3]);

var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add("some text"); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);
console.log(mySet); // Set(4) {1, 5, "some text", {…}}

