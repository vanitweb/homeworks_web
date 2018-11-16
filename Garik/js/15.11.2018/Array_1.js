//homework1
function regExp(arg){
    let reg = /^(((([a-z]|[A-Z]){1,3}$)?(((([a-z]|[A-Z]){3})([0-9]{1,2})$))?(((([a-z]|[A-Z]){3})([0-9]{2})[-]))?)+)$/;
    let result = reg.test(arg);
    console.log(result)
}
regExp("dGd90-abs66-")