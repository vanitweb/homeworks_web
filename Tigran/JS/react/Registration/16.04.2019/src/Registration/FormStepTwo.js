import React, { Component } from 'react';



class FormStepTwo extends Component {
    componentDidMount(){
    	this.props.isNextFunStepTwo()
    }
	render() {
    	const {packageInfo, packageInfoSave} = this.props;
	    return (
	      <div className="FormStepTwo">
	            Standart <input type="radio" name="package" onClick={packageInfoSave} value="standart" defaultChecked={(packageInfo === "standart") && "true" }/>
	            Premium <input type="radio" name="package" onClick={packageInfoSave} value="premium" defaultChecked={(packageInfo === "premium") && "true"}/>
	      </div>
	    );
  	}
}

export default FormStepTwo;
