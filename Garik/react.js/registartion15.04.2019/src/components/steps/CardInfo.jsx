import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Button, FormFeedback} from 'reactstrap';
import {observer} from 'mobx-react'

import Constants from './../../Constants.js'
import Messages from './../../Messages.js'

@observer
class CardInfo extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            stepPrev : PropTypes.func,
            cardInfoChangeInput : PropTypes.func,
            userInfo : PropTypes.object,
            sendInfo : PropTypes.func,
            cardInfoValidate : PropTypes.bool
        }).isRequired
    }
    render() {
        const {stepPrev, cardInfoChangeInput, userInfo, cardInfoValidate, sendInfo} = this.context.AppStore;
        const inputNames = Constants.cardInfo.inputNames;
        const inputInfo = Messages.cardInfo.inputInfo;
    return (
        <div className = "RegistrationStep">
            <Form>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardNumber.placeholder} name = {inputNames.cardNumber}
                        onChange = {cardInfoChangeInput} value = {userInfo.cardInfo.cardNumber}
                        />
                    <FormFeedback>{inputInfo.cardNumber.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardName.placeholder} name = {inputNames.cardName} 
                        onChange = {cardInfoChangeInput} value = {userInfo.cardInfo.cardName}
                        />
                    <FormFeedback>{inputInfo.cardName.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardCvc.placeholder} name = {inputNames.cardCvc} 
                        onChange = {cardInfoChangeInput} value = {userInfo.cardInfo.cardCvc}
                        />
                    <FormFeedback>{inputInfo.cardCvc.validEror}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder= {inputInfo.cardExpiration.placeholder} name = {inputNames.cardExpiration} 
                        onChange = {cardInfoChangeInput} value = {userInfo.cardInfo.cardExpiration}
                        />
                    <FormFeedback>{inputInfo.cardExpiration.validEror}</FormFeedback>
                </FormGroup>
                <Button onClick = {stepPrev}>Previous</Button>
                <Button disabled = {!cardInfoValidate} className = 'ml-2' onClick = {sendInfo}>Sign me up!</Button>
            </Form>
        </div>
        );
    }
}

export default CardInfo;