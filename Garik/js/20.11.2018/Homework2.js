////2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
//message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read
let arr = [{text : "text1",from : "from1"},
           {text : "text2",from : "from2"}, 
           {text : "text3",from : "from3"}, 
           {text : "text4",from : "from4"}
          ];
let readset = new Set();
let messread = [];
function read(text, user){
    readset.add(text);
    messread.push({text : text, data : new Date(),from : user})
}
function message_read_info(arg, name){
    if(readset.has(arg)){
        for(let i in messread){
            if(messread[i].from === name && messread[i].text === arg){
                console.log(`read on ${messread[i].data} by ${messread[i]}`)
                break; 
            }
        }                
    }else{
        console.log("message is not yet read")
    }
}