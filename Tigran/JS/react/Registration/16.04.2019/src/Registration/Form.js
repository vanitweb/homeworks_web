import React, { Component } from 'react';

import FormHeader from './FormHeader.js';
import FormStepOne from './FormStepOne.js';
import FormStepTwo from './FormStepTwo.js';
import FormStepThree from './FormStepThree.js';
import FormStepFour from './FormStepFour.js';
import Next from './Next.js';

import BootstrapFormExample from './BootstrapFormExample.js'


class Form extends Component {
    state = {
        step : 1,
        next : false,
        isValidCountStepOne : 0,
        isValidCountStepThree : 0,
        generalInfo : {
            firstName : '',
            lastName : '',
            country : '',
            city : '',
            address : '',
            email : '',
            password : ''
        },
        packageInfo : {
            package : 'standart'
        },
        cardInfo : {
            creditCardNumber : '',
            creditCardName : '',
            creditCardCvc : '',
            creditCardExpirationDate : ''
        }
    }
    isNextFunStepTwo = () => {
        if (this.state.packageInfo !== "") {
            this.setState({
                next : true
            })
        }else{
            this.setState({
                next : false
            })
        }
    }
    generalInfoSave = (generalInfo) => {
        this.setState({
            generalInfo : generalInfo
        })
    }
    packageInfo = (packageInfo) => {
        this.setState({
            packageInfo : packageInfo
        })
    }
    cardInfo = (cardInfo) => {
        this.setState({
            cardInfo : cardInfo
        })
    }
    countStepOnePlus = () => {//sarqel mi function
        if (this.state.isValidCountStepOne+1 === 7) {
            if ((this.state.step === 1) && (this.state.isValidCountStepOne+1 === 7)) {
                this.setState({
                    isValidCountStepOne : this.state.isValidCountStepOne + 1,
                    next : true
                })
            }else{
                this.setState({
                    next : false
                })
            }
        }else{
            this.setState({
                isValidCountStepOne : this.state.isValidCountStepOne + 1,
            })
        }
    }
    countStepOneMinus = () => {//sarqel mi function
        
        this.setState({
            isValidCountStepOne : this.state.isValidCountStepOne - 1,
            next : false
        })
        
        
    }
    setGeneralInfo = (inputName,inputValue) => {
        let generalInfo = this.state.generalInfo;
        generalInfo[inputName] = inputValue;
        this.setState({
            generalInfo : generalInfo
        })
    }
    countStepThreePlus = () => {//sarqel mi function
        this.setState({
            isValidCountStepThree : this.state.isValidCountStepThree + 1
        });

        if (this.state.isValidCountStepThree+1 === 4) {
            if ((this.state.step === 3) && (this.state.isValidCountStepThree+1 === 4)) {
                this.setState({
                    isValidCountStepThree : this.state.isValidCountStepThree + 1,
                    next : true
                })
            }else{
                this.setState({
                    next : false
                })
            }
        }else{
            this.setState({
                isValidCountStepThree : this.state.isValidCountStepThree + 1,
            })
        }
    }
    countStepThreeMinus = () => {//sarqel mi function 
        this.setState({
            isValidCountStepThree : this.state.isValidCountStepThree - 1
        });
    }
    setCardInfo = (inputName,inputValue) => {
        let cardInfo = this.state.cardInfo;
        cardInfo[inputName] = inputValue;
        this.setState({
            cardInfo : cardInfo
        })
    }

    nextFun = () => {
        if(this.state.step < 3){
            this.setState({
                step : this.state.step + 1,
                next : false
            }) 
        }
    }
    previousFun = () => {
        if(this.state.step > 1){
           this.setState({
                step : this.state.step - 1,
                next : true
            })
        } 
    }
    packageInfoSave = (event) => {
        this.setState({
            packageInfo : event.target.value,
            next : true
        })
    }
            





    render() {
        let component;
        switch(this.state.step){
            case 1:
                component = <FormStepOne 
                                generalInfoSave = {this.generalInfoSave}
                                isValidCountStepOne = {this.state.isValidCountStepOne}
                                countStepOneMinus = {this.countStepOneMinus}
                                countStepOnePlus = {this.countStepOnePlus}
                                setGeneralInfo = {this.setGeneralInfo}
                                generalInfo = {this.state.generalInfo}
                                isNextFun={this.isNextFun}
                                isValidAll={this.state.isValidCountStepOne}
                                />;
                break;
            case 2:  
                component = <FormStepTwo
                                packageInfo={this.state.packageInfo}
                                packageInfoSave={this.packageInfoSave}
                                isNextFunStepTwo={this.isNextFunStepTwo}
                            />;
                break;
            case 3:  
                component = <FormStepThree
                                countStepThreeMinus = {this.countStepThreeMinus}
                                countStepThreePlus = {this.countStepThreePlus}
                                cardInfo = {this.state.cardInfo}
                                setCardInfo = {this.setCardInfo}
                                isValidAll={this.state.isValidCountStepThree}
                            />;
                break;
            case 4:  
                component = <FormStepFour/>;
                break;
            default:
                break;
        }
        return (
            <>
            <div className="Form text-center border border-light p-5">
                <FormHeader step={this.state.step}/>
                {component}
                <Next 
                    next={this.state.next}
                    step={this.state.step}
                    nextFun={this.nextFun}
                    previousFun={this.previousFun}
                    />
            </div>

            {/*<BootstrapFormExample/>*/}
            </>
        );
    }
}

export default Form;


