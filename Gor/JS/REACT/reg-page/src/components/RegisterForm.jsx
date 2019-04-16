import React, { Component } from 'react';
import { Container, Form, Label } from 'reactstrap';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import './RegisterForm.css';

import {PersonalData} from './PersonalData';
import {ProfileDetails} from './ProfileDetails';
import {CardData} from './CardData';
import {Success} from './Success';

@observer
class RegisterForm extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };
    render() {
        const {step, maxStep} = this.context.store;
        let currentPage;
        switch (step) {
            case 1:
                currentPage = <PersonalData />;
                break;
            case 2:
                currentPage = <ProfileDetails />;
                break;
            case 3:
                currentPage = <CardData />;
                break;
            default:
                currentPage = <Success />;
        }
        return (
            <Container>
                <Form>
                    <Label>
                        <h1 className="text-dark">{step <= maxStep ? `Step ${step}/${maxStep}` : `Success`}</h1>
                    </Label>
                    {currentPage}
                </Form>
            </Container>
        );
    }
}

export {RegisterForm};