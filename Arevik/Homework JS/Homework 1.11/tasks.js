//Task.1 Տպել  1-20 թվերը 5 վայրկյան ընդմիջումով

function printNumbersInterval() {
  let i = 1;
  let timerId = setInterval(function() {
    console.log(i);
    if (i == 20) clearInterval(timerId);
    i++;
  }, 5000);
}
printNumbersInterval();


//Task 2. Գրել մեր սեփական setInterval մեթոդը


let timerId= setInterval(() => console.log('Ողջույն!!!'), 3000);
setTimeout(() => { clearInterval(timerId); console.log('Ցտեսություն!!!'); }, 6000);