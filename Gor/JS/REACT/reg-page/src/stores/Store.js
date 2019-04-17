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
    isNotEmpty = (value) => {
        return value.length !== 0;
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
        return value.match(/^(\d{4}[- ]){3}\d{4}|\d{16}$/);
    }
    cardCvcValidation = (value) => {
        return value.match(/^[0-9]{3,4}$/);
    }
    nextStep = () => {
        this.currentStep += 1;
    }
    prevStep = () => {
        this.currentStep -= 1;
    }
    @computed get step() {
        return this.currentStep;
    }
    get maxStep() {
        return this.regisrtationSteps;
    }
    personalData = (target) => {
        this.userData.personalData[target.name] = target.value;
    }
    personalDataEmpty = (target) => {
        if(this.userData.personalData[target.name]) {
            delete this.userData.personalData[target.name];
        }
    }
    cardDataEmpty = (target) => {
        if(this.userData.cardData[target.name]) {
            delete this.userData.cardData[target.name];
        }
    }
    profileDetalis = (value) => {
        this.userData.profileDetalis.package = value;
    }
    cardData = (target) => {
        this.userData.cardData[target.name] = target.value;
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
    @computed get regData() {
        return this.userData;
    }
}

export {Store};