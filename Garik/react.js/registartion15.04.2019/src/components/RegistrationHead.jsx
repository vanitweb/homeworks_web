import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class RegistrationHead extends Component {
    static contextTypes = {
        AppStore : PropTypes.shape({
            activeStep : PropTypes.object,
        }).isRequired
    }
    render() {
        const {activeStep} = this.context.AppStore;
    return (
        <div className = "RegistrationHead">
            <div className = "headRight">
                <h3>Step {activeStep.step} / 3</h3>
                <p>{activeStep.textHead}</p>
            </div>
            <div className = "headLeft">
                <i className={activeStep.iconHead}></i>
            </div>
        </div>
        );
    }
}

export default RegistrationHead;