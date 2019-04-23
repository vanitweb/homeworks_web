import React, { Component } from 'react';
import PropTypes from 'prop-types'
import {observer} from 'mobx-react'

import RegistrationHead from './RegistrationHead';
import GeneralInfo from './steps/GeneralInfo';
import PackageInfo from './steps/PackageInfo';
import CardInfo from './steps/CardInfo';

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
                RegistrationPage = <GeneralInfo/>
                break;
            case 2:
                RegistrationPage = <PackageInfo/>
                break;
            case 3:
                RegistrationPage = <CardInfo/>
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