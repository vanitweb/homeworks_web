let namakner = {
 namak0 : {text : "Как я?",um_koxmic : "Bakur",},
 namak1 : {text : "Как тебе эта идея?",um_koxmic : "Ohan",},
 namak2 : {text : "Ujexi mot misht el ashnan verjum en chter@ cicaxum",um_koxmic : "Erik Papyan",},
 namak3 : {text : "Я не понимаю ты дура или дурак? Наташа",um_koxmic : "Petros",},
 namak4 : {text : "Barev",um_koxmic : "Martiros",},
};

let kardacvac = new Map();
kardacvac.set(namakner.namak1,true);
kardacvac.set(namakner.namak3,true);
kardacvac.set(namakner.namak4,true);

function stugum(obj) {
 for (var namak in namakner) {
     if (namakner[namak].text === obj.text && namakner[namak].um_koxmic === obj.um_koxmic) {
         if (kardacvac.has(namakner[namak])) {
             console.log(kardacvac.get(namakner[namak]));
         }else{
             console.log("kardacvac chi")
         }
     }
 }
}
stugum({text : "Barev",um_koxmic : "Martiros",});
stugum({text : "Ujexi mot misht el ashnan verjum en chter@ cicaxum",um_koxmic : "Erik Papyan",})


//                                                     2


let namakner = {
 namak0 : {text : "Как я?",um_koxmic : "Bakur",},
 namak1 : {text : "Как тебе эта идея?",um_koxmic : "Ohan",},
 namak2 : {text : "Ujexi mot misht el ashnan verjum en chter@ cicaxum",um_koxmic : "Erik Papyan",},
 namak3 : {text : "Я не понимаю ты дура или дурак? Наташа",um_koxmic : "Petros",},
 namak4 : {text : "Barev",um_koxmic : "Martiros",},
};

let kardacvac = new Map();
kardacvac.set(namakner.namak0 , {data : "20.10.2018", user: "user1"});
kardacvac.set(namakner.namak4 , {data : "20.10.2018", user: "user6"});
kardacvac.set(namakner.namak2 , {data : "20.10.2018", user: "user3"});

function stugum(obj) {
 for (var namak in namakner) {
     if (namakner[namak].text === obj.text && namakner[namak].um_koxmic === obj.um_koxmic) {
         if (kardacvac.has(namakner[namak])) {
             console.log(`Read on ${kardacvac.get(namakner[namak]).data} by ${kardacvac.get(namakner[namak]).user}`);//kardacvac.get(namakner[namak])
         }else{
             console.log("message is not yet read");
         }
     }
 }
}
stugum({text : "Barev",um_koxmic : "Martiros",});
stugum({text : "Ujexi mot misht el ashnan verjum en chter@ cicaxum",um_koxmic : "Erik Papyan",});