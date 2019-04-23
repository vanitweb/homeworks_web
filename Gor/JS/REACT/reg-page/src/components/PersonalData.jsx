import React, { Component, Fragment } from 'react';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import {
    FormGroup,
    Input,
    FormFeedback,
    Button,
} from 'reactstrap';

@observer
class PersonalData extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };
    render() {
        const {nextStep, isActivePersonalData, personalDataValues, onChange} = this.context.store;
        return (
            <Fragment>
               <FormGroup>
                  <Input placeholder="First Name" defaultValue={personalDataValues('firstName')} name='firstName' onChange={onChange('personalData')} />
                  <FormFeedback>Name can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Last Name" defaultValue={personalDataValues('lastName')} name='lastName' onChange={onChange('personalData')} />
                    <FormFeedback>Surname can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Country" defaultValue={personalDataValues('country')} name='country' onChange={onChange('personalData')} />
                    <FormFeedback>Country can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="City" defaultValue={personalDataValues('city')} name='city' onChange={onChange('personalData')} />
                    <FormFeedback>City can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Address" defaultValue={personalDataValues('address')} name='address' onChange={onChange('personalData')} />
                    <FormFeedback>Address can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="email" placeholder="Email" defaultValue={personalDataValues('email')} name='email' onChange={onChange('personalData')} />
                    <FormFeedback>Invalid email address</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" placeholder="Password" defaultValue={personalDataValues('password')} name='password' onChange={onChange('personalData')} />
                    <FormFeedback>Password must be min length 8, containing lowcases, upercases, numbers and special symbols</FormFeedback>
                </FormGroup>
                <Button color="primary" onClick={nextStep} disabled={isActivePersonalData}>Next</Button>
            </Fragment>
        );
    }
}

export {PersonalData};