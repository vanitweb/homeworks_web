import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, CustomInput, Button} from 'reactstrap';
import {observer} from 'mobx-react'

import Constants from './../../Constants.js'

@observer
class RegistrationStep2 extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            stepNext : PropTypes.func,
            stepPrev : PropTypes.func,
            packageClickRadio : PropTypes.func,
            packageInfoValid : PropTypes.func,
            userInfo : PropTypes.object,
        }).isRequired
    }
    render() {
        const {stepNext, stepPrev, packageClickRadio, userInfo, packageInfoValid} = this.context.AppStore;
    return (
        <div className = "RegistrationStep">
            <Form>
                <FormGroup>
                    <p className = "step2Text">Package</p>
                    <CustomInput type="radio"  name = "Package" 
                        label="Standard Package" value = {Constants.packageInfo.radio1Value} 
                        onClick ={packageClickRadio} id="exampleCustomSwitch"
                        defaultChecked = {(userInfo.packageInfo === Constants.packageInfo.radio1Value) && true}
                        />
                    <CustomInput type="radio" name = "Package" 
                        label="Premium Package" value = {Constants.packageInfo.radio2Value} 
                        onClick ={packageClickRadio} id="exampleCustomSwitch2"
                        defaultChecked = {(userInfo.packageInfo === Constants.packageInfo.radio2Value) && true}
                        />
                </FormGroup>
                <Button onClick = {stepPrev}>Previous</Button>
                <Button onClick = {stepNext} disabled = {!packageInfoValid} className = 'ml-2'>Next</Button>
            </Form>
        </div>
        );
    }
}

export default RegistrationStep2;