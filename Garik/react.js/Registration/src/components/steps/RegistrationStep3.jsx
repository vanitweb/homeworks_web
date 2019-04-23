import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import {observer} from 'mobx-react'

import Constants from './../../Constants.js'
import Messages from './../../Messages.js'

@observer
class RegistrationStep3 extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            stepPrev : PropTypes.func,
            cardInfoChangeInput : PropTypes.func,
            userInfo : PropTypes.object,
        }).isRequired
    }
    render() {
        const {stepPrev, cardInfoChangeInput, step3Valid, userInfo, cardInfoValidate} = this.context.AppStore;
    return (
        <div className = "RegistrationStep">
            <Form>
                <FormGroup>
                    <Input placeholder= {Messages.cardInfo.placholders.cardNumber}
                        name = {Constants.cardInfo.inputNames.cardNumber} onChange = {cardInfoChangeInput} 
                        value = {userInfo.cardInfo.cardNumber}
                        />
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {Messages.cardInfo.placholders.cardName}
                        name = {Constants.cardInfo.inputNames.cardName} onChange = {cardInfoChangeInput} 
                        value = {userInfo.cardInfo.cardName}/>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {Messages.cardInfo.placholders.cardCvc} 
                        name = {Constants.cardInfo.inputNames.cardCvc} onChange = {cardInfoChangeInput}
                        value = {userInfo.cardInfo.cardCvc}
                        />
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {Messages.cardInfo.placholders.cardExpiration}
                        name = {Constants.cardInfo.inputNames.cardExpiration} onChange = {cardInfoChangeInput} 
                        value = {userInfo.cardInfo.cardExpiration}
                        />
                </FormGroup>
                <Button onClick = {stepPrev}>Previous</Button>
                <Button type = "submit" disabled = {!cardInfoValidate} className = 'ml-2'>Sign me up!</Button>
            </Form>
        </div>
        );
    }
}

export default RegistrationStep3;