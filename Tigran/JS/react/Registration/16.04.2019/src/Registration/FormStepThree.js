import React, { Component } from 'react';


import Messages from './Messages.js';


class FormStepThree extends Component {
    state = {
        isValidAll : false
    }
    // componentDidMount(){
    //     if(this.state.isValidAll.creditCardNumber !== ''){
    //         this.props.isNextFun(this.state.isValidAll)
    //     }
    // }
    componentDidMount(){
        if(this.props.isValidAll === 4){
            this.setState({
                isValidAll : true
            })
        }
    }
    isValidOther = (event) => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        let inputClass = event.target.className;
        inputClass = inputClass.split(" ")[1];
        if(inputValue !== ""){
            event.target.className = `form-control is-valid`;
            this.props.setCardInfo(inputName,inputValue);
            if(inputClass === "is-invalid" || inputClass === undefined){
                this.props.countStepThreePlus();
            }else{
                return
            }
        }else{// ete datarkvec
            event.target.className = `form-control is-invalid`
            this.props.setCardInfo(inputName,inputValue);// avel gorcoxutyun bayc karoxa petq ga
            this.props.countStepThreeMinus();
        }
    }
    render() {
        const {cardInfo} = this.props;
        const {isValidAll} = this.state
        return (
            <div className="FormStepThree">
                <div className="form-group">
                    {/*Credit Card Number <input type="text" name="creditCardNumber" onChange={this.isValidOther} value={cardInfo.creditCardNumber} className={(isValidAll) ? `form-control is-valid` : `form-control`} />
                                        Credit Card Name <input type="text" name="creditCardName" onChange={this.isValidOther} value={cardInfo.creditCardName} className={(isValidAll) ? `form-control is-valid` : `form-control`} />
                                        Credit Card cvc <input type="text" name="creditCardCvc" onChange={this.isValidOther} value={cardInfo.creditCardCvc} className={(isValidAll) ? `form-control is-valid` : `form-control`} />
                                        Credit Card expiration date <input type="text" name="creditCardExpirationDate" onChange={this.isValidOther} value={cardInfo.creditCardExpirationDate} className={(isValidAll) ? `form-control is-valid` : `form-control`} />*/}
                    <input type="text" name='creditCardNumber'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[7].placeholder} onChange={this.isValidOther} value={cardInfo.creditCardNumber}/>
                    <input type="text" name='creditCardName'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[8].placeholder} onChange={this.isValidOther} value={cardInfo.creditCardName}/>
                    <input type="text" name='creditCardCvc'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[9].placeholder} onChange={this.isValidOther} value={cardInfo.creditCardCvc}/>
                    <input type="text" name='creditCardExpirationDate'
                            className={(isValidAll) ? Messages.classes.validClassName : Messages.classes.defaultClassName}
                            placeholder={Messages.generalInfoInputs[10].placeholder} onChange={this.isValidOther} value={cardInfo.creditCardExpirationDate}/>                        
            
            
                    
                </div>
            </div>
    );
  }
}

export default FormStepThree;
