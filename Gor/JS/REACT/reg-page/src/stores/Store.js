import {extendObservable, computed} from 'mobx';

class Store {
    storeValues = {
        currentStep: 1,
        regisrtationSteps: 3,
        userData: {
            personalData: {},
            profileDetalis: {},
            cardData: {}
        }
    };	
    constructor() {
        extendObservable(this, this.storeValues);
    }
    textValidation = (value) => {
        return value.match(/^([a-zA-Z]){1,25}$/);
    }
    passwordValidation = (value) => {
        return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,10}$/);
    }
    emailValidation = (value) => {
        return value.match(/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    }
    cardDateValidation = (value) => {
        return value.match(/^((0[1-9])|(1[0-2]))\/(\d{2})$/);
    }
    cardNumberValidation = (value) => {
        return value.match(/^\d{16}$/);
    }
    cardCvcValidation = (value) => {
        return value.match(/^[0-9]{3,4}$/);
    }
    onChange = category => event => {
        let isValid;
        switch (event.target.name) {
            case 'email':
                isValid = this.emailValidation(event.target.value);
                break;
            case 'password':
                isValid = this.passwordValidation(event.target.value);
                break;
            case 'cardDate':
                isValid = this.cardDateValidation(event.target.value);
                break;
            case 'cardNumber':
                isValid = this.cardNumberValidation(event.target.value);
                break;
            case 'cardCvc':
                isValid = this.cardCvcValidation(event.target.value);
                break;
            default:
                isValid = this.textValidation(event.target.value);
        }
        if(isValid) {
            this.userData[category][event.target.name] = event.target.value;
            event.target.className = "is-valid form-control";
        } else {
            event.target.className = "is-invalid form-control";
            if(this.userData[category][event.target.name]) {
                delete this.userData[category][event.target.name];
            }
        }
    }
    onChangeProfile = (event) => {
        this.userData.profileDetalis.package = (event.target.value);
    }
    nextStep = () => {
        this.currentStep += 1;
    }
    prevStep = () => {
        this.currentStep -= 1;
    }
    startStep = () => {
        this.currentStep = 1;
    }
    @computed get step() {
        return this.currentStep;
    }
    get maxStep() {
        return this.regisrtationSteps;
    }
    personalDataValues = (key) => {
        return this.userData.personalData[key];
    }
    profileDetalisValues = () => {
        return this.userData.profileDetalis.package;
    }
    cardDataValues = (key) => {
        return this.userData.cardData[key];
    }
    @computed get isActivePersonalData() {
        return Object.keys(this.userData.personalData).length !== 7;
    }
    @computed get isActiveProfileDetails() {
        return Object.keys(this.userData.profileDetalis).length !== 1;
    }
    @computed get isActiveCardData() {
        return Object.keys(this.userData.cardData).length !== 4;
    }
    getRegData = () => {
        return this.userData;
    }
}

export {Store};