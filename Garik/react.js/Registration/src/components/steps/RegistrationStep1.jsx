import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Button} from 'reactstrap';
import {observer} from 'mobx-react'

import Constants from './../../Constants.js'
import Messages from './../../Messages.js'

@observer
class RegistrationStep1 extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            generalInfoChangeInput : PropTypes.func,
            stepNext : PropTypes.func,
            userInfo : PropTypes.object,
            generalInfoValid : PropTypes.bool,
        }).isRequired
    }
    render() {
        const {generalInfoChangeInput, stepNext, userInfo, generalInfoValid} = this.context.AppStore;
    return (
        <div className = "RegistrationStep">
            <Form>
                <FormGroup>
                    <Input placeholder={Messages.generalInfo.placholders.firstName} 
                        name = {Constants.generalInfo.inputNames.firstName} onChange = {generalInfoChangeInput} 
                        value = {userInfo.generalInfo.firstName}
                        />
                </FormGroup>
                <FormGroup>
                    <Input placeholder={Messages.generalInfo.placholders.lastName}
                        name = {Constants.generalInfo.inputNames.lastName} onChange = {generalInfoChangeInput}
                        value = {userInfo.generalInfo.lastName}
                        />
                </FormGroup>
                <FormGroup>
                    <Input placeholder={Messages.generalInfo.placholders.country} 
                        name = {Constants.generalInfo.inputNames.country} onChange = {generalInfoChangeInput} 
                        value = {userInfo.generalInfo.country}/>
                </FormGroup>
                <FormGroup>
                    <Input placeholder={Messages.generalInfo.placholders.city} 
                        name = {Constants.generalInfo.inputNames.city} onChange = {generalInfoChangeInput} 
                        value = {userInfo.generalInfo.city}
                        />
                </FormGroup>
                <FormGroup>
                    <Input placeholder={Messages.generalInfo.placholders.address} 
                        name = {Constants.generalInfo.inputNames.address}onChange = {generalInfoChangeInput} 
                        value = {userInfo.generalInfo.address}
                        />
                </FormGroup>
                <FormGroup>
                    <Input type="email" 
                        placeholder={Messages.generalInfo.placholders.email} name = {Constants.generalInfo.inputNames.email} 
                        onChange = {generalInfoChangeInput} value = {userInfo.generalInfo.email} 
                        />
                </FormGroup>
                <FormGroup>
                    <Input type="password" 
                        placeholder={Messages.generalInfo.placholders.password} name = {Constants.generalInfo.inputNames.password} 
                        onChange = {generalInfoChangeInput} value = {userInfo.generalInfo.password}/>
                </FormGroup>
                <Button onClick = {stepNext} disabled = {!generalInfoValid}>Next</Button>
            </Form>
        </div>
        );
    }
}

export default RegistrationStep1;