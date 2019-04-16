import {extendObservable, action, computed} from 'mobx';

import Validator from './../helpers/Validator'
import Constants from './../Constants.js';
import Messages from './../Messages.js';

class AppStore {
    validator = new Validator();
    storeValues = {
        generalInfoCount : 0,
        CardInfoCount : 0,
        activeStep : Messages.generalInfo.headInfo,
        userInfo :{
            generalInfo : {
                firstName : '',
                lastName : '',
                country : '',
                city : '',
                address : '',
                email : '',
                password : ''
            },
            packageInfo : '',
            cardInfo : {
                cardNumber : '',
                cardName : '',
                cardCvc : '',
                cardExpiration : ''
            }
        }
    }
    constructor () {
        extendObservable(this, this.storeValues)
    }
    @action
    stepNext = () => {
        switch(this.activeStep.step){
            case 1:
                this.activeStep = Messages.packageInfo.headInfo;
                break;
            case 2:
                this.activeStep = Messages.cardInfo.headInfo;
                break;
            default:
                return;
        }
    }
    @action
    stepPrev = () => {
        switch(this.activeStep.step){
            case 2:
                this.activeStep = Messages.generalInfo.headInfo;
                break;
            case 3:
                this.activeStep = Messages.packageInfo.headInfo;
                break;
            default:
                return;
        }
    }
    //step1
    @computed
    get generalInfoValid(){
        return this.generalInfoCount === 7;
    }
    testInput(isValid, event){
        if(isValid){
            if(event.target.getAttribute("class") === "form-control" || event.target.getAttribute("class") === "form-control is-invalid"){
                event.target.setAttribute("class", "form-control is-valid");
                return this.generalInfoCount++;
            }
        }else{
            if(event.target.getAttribute("class") === "form-control is-valid"){
                this.generalInfoCount !== 0 && this.generalInfoCount--;
            }
            event.target.setAttribute("class", "form-control is-invalid");
        }
        console.log(this.generalInfoCount)
    }
    @action
    generalInfoChangeInput = (event) => {
        switch(event.target.name){
            case Constants.generalInfo.inputNames.firstName :
                this.userInfo.generalInfo.firstName = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);            
                break;
            case Constants.generalInfo.inputNames.lastName :
                this.userInfo.generalInfo.lastName = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.generalInfo.inputNames.country :
                this.userInfo.generalInfo.country = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.generalInfo.inputNames.city :
                this.userInfo.generalInfo.city = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.generalInfo.inputNames.address :
                this.userInfo.generalInfo.address = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.generalInfo.inputNames.email :
                this.userInfo.generalInfo.email = event.target.value;
                this.testInput(this.validator.email(event.target.value), event);
                break;
            case Constants.generalInfo.inputNames.password :
                this.userInfo.generalInfo.password = event.target.value;
                this.testInput(this.validator.password(event.target.value), event);
                break;
            default:
                return;
        }
    }
    //step2
    get packageInfoValid(){
        return this.userInfo.packageInfo !== "";
    }
    packageClickRadio =(event) =>{
        this.userInfo.packageInfo = event.target.value;
    }
    //step3
    cardInfoChangeInput = (event) => {
        switch(event.target.name){
            case Constants.cardInfo.inputNames.cardNumber :
                this.userInfo.cardInfo.cardNumber = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.cardInfo.inputNames.cardName :
                this.userInfo.cardInfo.cardName = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.cardInfo.inputNames.cardCvc :
                this.userInfo.cardInfo.cardCvc = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break;
            case Constants.cardInfo.inputNames.cardExpiration :
                this.userInfo.cardInfo.cardExpiration = event.target.value;
                this.testInput(this.validator.required(event.target.value), event);
                break; 
            default:
                return;
        }
    }
    @computed
    get cardInfoValidate(){
        return this.CardInfoCount = 4;
    }
}
export default AppStore;