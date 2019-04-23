import Constants from './../Constants.js'
class Validator {
    isValid(event){
        switch(event.target.name){
            case Constants.generalInfo.inputNames.firstName:
                return event.target.value.match(/^([a-z]|[A-Z]){1,10}$/)
            case Constants.generalInfo.inputNames.lastName:
                return event.target.value.match(/^([a-z]|[A-Z]){1,20}$/)
            case Constants.generalInfo.inputNames.country:
                return event.target.value.match(/^([a-z]|[A-Z]){1,10}$/)
            case Constants.generalInfo.inputNames.city:
                return event.target.value.match(/^([a-z]|[A-Z]){1,10}$/)
            case Constants.generalInfo.inputNames.address:
                return event.target.value.length > 0 && event.target.value.length < 20;
            case Constants.generalInfo.inputNames.email:
                return event.target.value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
            case Constants.generalInfo.inputNames.password:
                return event.target.value.length >= 8;
            case Constants.cardInfo.inputNames.cardNumber:
                return event.target.value.match(/^[0-9]{4}[-][0-9]{4}[-][0-9]{4}[-][0-9]{4}$/)
            case Constants.cardInfo.inputNames.cardName:
                return event.target.value.match(/^([a-z]|[A-Z]){1,15}$/)
            case Constants.cardInfo.inputNames.cardCvc:
                return event.target.value.match(/^[0-9]{3}$/)
            case Constants.cardInfo.inputNames.cardExpiration:
                return event.target.value.match(/^(0[1-9]|1[0-2])\/(([0-9]{4})|([0-9]{2}))$/)
            default:
                break
        }
    }
}
export default Validator;