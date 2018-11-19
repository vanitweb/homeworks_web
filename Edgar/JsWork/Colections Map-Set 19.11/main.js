

//mardy ashxatuma te che
let  myMap = new Map();


var persons =[
        {
            name: "Hakob",
            surname: "Paronyan",
            age: 54,
            username: "HakobP",
            password: "Hakob_054",
        },
        {
            name: "Levon",
            surname: "Sarjan",
            age: 61,
            username: "Lev",
            password: "Levomicidin",
        },
        {
            name: "Armine",
            surname: "Kroyan",
            age: 28,
            username: "Armin",
            password: "hayastan2018",
        },
        {
            name: "Karine",
            surname: "kroyan",
            age: 41,
            username: "LevKar",
            password: "loveForever",
        },];


let obj = {
    jobTitle:  "jobTitle_1", 
    ashxatavardz: 250000,
    pordz: " 2 tari "
};

function check(value){
    if(myMap.has(value)){
        console.log(value);
    }else
         console.log("Not value");
}



myMap.set(persons[0], obj);
check(persons[0]);
console.log(myMap.get(persons[0]));


