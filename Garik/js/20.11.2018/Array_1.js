//1. Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
//is_message_read({text: “hello”, from: “ananymous”}) => true/false
//2.Գրել ծրագիր, որը կօգնի հասկանալ, թե որ նամակներն են արդեն կարդացած և երբ(առաջին անգամ) և ում կողմից են նրանք արդեն կարդացվել։ Յուրաքանչյուր նամակ ունի տեքստ և թե ում կողմից է ուղարկված։
//message_read_info({text: “hello”, from: “ananymous”}) => read on 2018-Nov-18 by user 1 // message is not yet read
let arr = [{text : "text1",from : "from1"},
           {text : "text2",from : "from2"}, 
           {text : "text3",from : "from3"}, 
           {text : "text4",from : "from4"}
          ];
let read = new Map();
read.set(arr[1], {data : "2018-11-02", from : "user1"});
read.set(arr[3], {data : "2018-10-27", from : "user2"});
function is_message_read(arg){
    for(let i of arr){
        if(i.text === arg.text && i.from === arg.from){
            console.log(read.has(i))
        }
    }
}
function message_read_info(arg){
    for(let i of arr){
        if(i.text === arg.text && i.from === arg.from){
            if(read.has(i)){
                console.log(`read on ${read.get(i).data} by ${read.get(i).from}`)
            }else{
                console.log("message is not yet read")
            }
        }
    }
}
is_message_read({text : "text2",from : "from2"})
message_read_info({text : "text2",from : "from2"})