class Validator {
   required = (value) => {
       return value.length > 0;
   }
   email = (value) =>{
       return value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
   }
   password = (value) => {
       return value.length >= 8
   }
}
export default Validator;