//1.Task1 books name

let arr = [ {
              author: 'O’Reili',
              title: 'JavaScript: The definitive guide',
              read: true,
            },
            {
              author: 'David Herman',
              title: 'Effective JavaScrip',
              read: false,
            }
          ];

function printBooks(arg) {
    for(let i = 0; i < arr.length; i++) {
        if((arr[i].read == true && arg == true) ||(arr[i].read == false && arg == false)) {    
            console.log(` ${arr[i].author}-${arr[i].title} `);
        }
    }
}
printBooks(true);
printBooks(false); 
