//homework1
let arr = [
    {
        author : "Girq1",
        title : "Hexinak1", 
        read : true
    },
    {
        author : "Girq2",
        title : "Hexinak2",
        read : false
    },
    {
        author : "Girq3",
        title : "Hexinak3",
        read : true
    },
    {
        author : "Girq4",
        title : "Hexinak4", 
        read : false
    }
]
function printBooks(arg){
    for(let i in arr){
        if(arg === arr[i].read){
            console.log(`${arr[i].author} - ${arr[i].title}`)
        }
    }
}
printBooks(false)
//homework2
function getDiff(obj1, obj2){
    let t = {};
    for(let i in obj1){
        for(let j in obj2){
            if(i === j && obj1[i] === obj2[j]){
                delete obj1[i];
                delete obj2[j];
            }
        }
    }
    t = obj1;
    for(let i in obj2){
        t[i] = obj2[i]
    }
    console.log(t)
}
getDiff(
    {
        a : 2,
        b : 6,
        c : 3,
        e : 9,
        f : 1
    },
    {
        k : 9,
        b : 6,
        l : 1,
        c : 3,
        a : 2
    })
//homework3
let obj = {
    key1 : "Value1",
    key2 : "Value2", 
    key3 : "Value3",
    key4 : "Value4",
    key5 : "Value5",
    key6 : "Value6"
};
console.log(obj);
for(let i in obj){
    obj[obj[i]] = i;
    delete obj[i]
}
console.log(obj)