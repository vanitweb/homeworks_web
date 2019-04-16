import React, { Component } from 'react';


import Messages from './Messages.js';


class FormStepOne extends Component {
    state = {
        generalInfo : {
            firstName : '',
            lastName : '',
            country : '',
            city : '',
            address : '',
            email : '',
            password : ''
        },
        isValidAll : false 
    }
    componentDidMount(){
        if(this.props.isValidAll === 7){
            this.setState({
                isValidAll : true
            })
        }
    }
    isValidEmail = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let inputClass = event.target.className;
        inputClass = inputClass.split(" ");
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(regexp.test(String(inputValue).toLowerCase())){
            event.target.className = Messages.classes.validClassName;
            this.props.setGeneralInfo(inputName,inputValue);
            if(inputClass[2] === "is-invalid"){
                this.props.countStepOnePlus();
            }else{
                return
            }
        }else{
            event.target.className = Messages.classes.inValidClassName;
            // this.props.isNextFun();
            this.props.setGeneralInfo(inputName,inputValue);// avel gorcoxutyun bayc karoxa petq ga
            if(inputClass[2] === "is-valid" && inputClass[2] !== undefined){
                this.props.countStepOneMinus();
            }else{
                return
            }
        }
    }
    isValidPassword = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let inputClass = event.target.className;
        // console.log(inputClass);
        inputClass = inputClass.split(" ");
        if(inputValue.length >= 8){
            event.target.className = Messages.classes.validClassName;
            //this.props.isNextFun();
            this.props.setGeneralInfo(inputName,inputValue);
            if(inputClass[2] === "is-invalid" || inputClass[2] === undefined){
                this.props.countStepOnePlus();
            }else{
                return
            }
        }else{// ete datarkvec
            event.target.className = Messages.classes.inValidClassName;
            //this.props.isNextFun();
            this.props.setGeneralInfo(inputName,inputValue);// avel gorcoxutyun bayc karoxa petq ga
            console.log(inputClass,454);
            if(inputClass[2] === "is-valid"){
                this.props.countStepOneMinus();
            }else{
                return
            }
        }
    }
    isValidOther = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let inputClass = event.target.className;
        inputClass = inputClass.split(" ");
        if(inputValue !== ""){
            event.target.className = Messages.classes.validClassName;
            this.props.setGeneralInfo(inputName,inputValue);
            if(inputClass[2] === "is-invalid" || inputClass[2] === undefined){
                this.props.countStepOnePlus();
            }else{
                return
            }
        }else{// ete datarkvec
            event.target.className = Messages.classes.inValidClassName;
            this.props.setGeneralInfo(inputName,inputValue);// avel gorcoxutyun bayc karoxa petq ga
            this.props.countStepOneMinus();
        }
    }
    isValid = (event) => {
        let inputName = event.target.name;
        // let inputValue = event.target.value;
        // let generalInfo = this.state.generalInfo;
        // let inputClass = event.target.className;

        if(inputName === 'email'){
            this.isValidEmail(event);
        }else if(inputName === 'password'){
            this.isValidPassword(event);
        }else{
            this.isValidOther(event);
        }
    }
    

    render() {
        const {generalInfo} = this.props;
        const {isValidAll} = this.state;



        return (
            <div className="FormStepOne">
                <div className="form-row mb-4">
                    <div className="col">
                        <input type="text" name='firstName'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[0].placeholder} onChange={this.isValid} value={generalInfo.firstName}/>
                    </div>
                    <div className="col">
                        <input type="text" name='lastName'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[1].placeholder} onChange={this.isValid} value={generalInfo.lastName}/>
                    </div>
                </div>
                <div className="form-row mb-4">
                    <div className="col">
                        <input type="text" name='country'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[2].placeholder} onChange={this.isValid} value={generalInfo.country}/>
                    </div>
                    <div className="col">
                        <input type="text" name='city'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[3].placeholder} onChange={this.isValid} value={generalInfo.city}/>
                    </div>
                </div>
                <input type="text" name='address'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[4].placeholder} onChange={this.isValid} value={generalInfo.address}/>
                <input type="email" name='email'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[5].placeholder} onChange={this.isValid} value={generalInfo.email}/>
                <input type="password" name='password'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[6].placeholder} onChange={this.isValid} value={generalInfo.password}/>
                <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
                    At least 8 characters
                </small>
            </div>
        );
  }
}

export default FormStepOne;