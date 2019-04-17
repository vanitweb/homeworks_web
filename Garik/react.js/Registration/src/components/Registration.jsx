import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

import RegistrationHead from './RegistrationHead';
import RegistrationStep1 from './steps/RegistrationStep1';
import RegistrationStep2 from './steps/RegistrationStep2';
import RegistrationStep3 from './steps/RegistrationStep3';

import './../assets/stylesheets/Registration.css'

@observer
class Registration extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            activeStep : PropTypes.object,
        }).isRequired
    }
    render() {
        const {activeStep} = this.context.AppStore;
        let RegistrationPage
        switch(activeStep.step){
            case 1:
                RegistrationPage = <RegistrationStep1/>
                break;
            case 2:
                RegistrationPage = <RegistrationStep2/>
                break;
            case 3:
                RegistrationPage = <RegistrationStep3/>
                break;
            default:
                return;
        }
    return (
        <div className = "Registration">
            <RegistrationHead />
            {RegistrationPage}
        </div>
        );
    }
}

export default Registration;