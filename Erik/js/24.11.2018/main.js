
let message = {
  message1: {
   text: "My friends and family keep me grounded.",
   from: "Bale",
 },
  message2:  {
   text: "I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds.",
   from: "Mike Tyson",
 },
  message3 : {
   text: "I hated every minute of training, but I said, 'Don't quit. Suffer now and live the rest of your life as a champion.'",
   from: "Muhammad Ali",
 },
};

let one = new Map();
one.set(message.message1,true);
one.set(message.message2,true);
one.set(message.message3,true);
//console.log(one.get(message.message3));



 function fun(letter){
   for (let mes in message) {
     if(message[mes].text === letter.text && message[mes].from === letter.from) {
       if (one.has(message[mes])) {
         console.log(one.get(message[mes]));
       }
     }
   }
 }
 fun({text: "I'm a dreamer. I have to dream and reach for the stars, and if I miss a star then I grab a handful of clouds.", from: "Mike Tyson"});


let namak = {
  namak1: {
    text1: "erb es  galu?",
    from1: "esim",
  },
  namak2: {
    text1: "ok",
    from1: "esim2",
  },
  namak3: {
    text1: "inchka?",
    from1: "esim1",
  },
};
let one1 = new Map();
one1.set(namak.namak1,{data: "20.11.2018", from2: "Natali"});
one1.set(namak.namak2,{data: "27.11.2018", from2: "Vatali"});
one1.set(namak.namak3,{data: "29.11.2018", from2: "Batali"});
// console.log(one1.get(namak.namak1));
function func(lett) {
  for(let i in namak) {
    if(namak[i].text === lett.text && namak[i].from1 === lett.from1) {
      if(one1.has(namak[i])) {
        console.log(one1.get(namak[i]));
      }
    }
  }
}
func({text1: "erb es galu?", from1: "esim" });
