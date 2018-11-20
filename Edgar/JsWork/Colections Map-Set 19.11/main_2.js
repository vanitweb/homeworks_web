let myMape = new Map();
let Emails = [
    {
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
let obj3 = [{
        readOn: new Date(2018, 11, 24),
        from: "Zaven"
    },
    {
        readOn: new Date(2015, 11, 24),
        from: "Karen"
    },
    {
        readOn: new Date(2016, 11, 24),
        from: "Ani"
    },
    {
        readOn: new Date(2017, 11, 24),
        from: "Arpine"
    },
];

function mainAdd(massege, user) {
    return myMape.set(massege, user);
}

mainAdd(Emails[0], obj3[0]);
let mySet = new Set();

function who_is_read(massege) {
     if (mySet.has(massege)) {
     return `Heriqa `;
    }
    if (myMape.has(massege)) {
        let r = (Object.values(myMape.get(massege)).join(" by: "));
        console.log(`massege is read: ${r}: `);
    } else {
        console.log("Message is not read yet:");
    }
   
        mySet.add(massege);

}
who_is_read(Emails[0]);
who_is_read(Emails[1]);
console.log(who_is_read(Emails[0]));