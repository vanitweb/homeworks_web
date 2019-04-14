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
    onChange = (event) => {
        if(this.context.store.isNotEmpty(event.target.value)) {
            this.context.store.personalData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            event.target.className = "is-invalid form-control";
            this.context.store.personalDataEmpty(event.target);
        }
    }
    onChangeEmail = (event) => {
        if(this.context.store.emailValidation(event.target.value)) {
            this.context.store.personalData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            event.target.className = "is-invalid form-control";
            this.context.store.personalDataEmpty(event.target);
        }
    }
    onChangePassword = (event) => {
        if(this.context.store.passwordValidation(event.target.value)) {
            this.context.store.personalData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            this.context.store.personalDataEmpty(event.target);
            event.target.className = "is-invalid form-control";
        }
    }
    render() {
        const {nextStep, isActivePersonalData, personalDataValues} = this.context.store;
        return (
            <Fragment>
               <FormGroup>
                  <Input placeholder="First Name" defaultValue={personalDataValues('firstName')} name='firstName' onChange={this.onChange} />
                  <FormFeedback>Name can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Last Name" defaultValue={personalDataValues('lastName')} name='lastName' onChange={this.onChange} />
                    <FormFeedback>Surname can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Country" defaultValue={personalDataValues('country')} name='country' onChange={this.onChange} />
                    <FormFeedback>Country can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="City" defaultValue={personalDataValues('city')} name='city' onChange={this.onChange} />
                    <FormFeedback>City can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input placeholder="Address" defaultValue={personalDataValues('address')} name='address' onChange={this.onChange} />
                    <FormFeedback>Address can not be empty</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="email" placeholder="Email" defaultValue={personalDataValues('email')} name='email' onChange={this.onChangeEmail} />
                    <FormFeedback>Invalid email address</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" placeholder="Password" defaultValue={personalDataValues('password')} name='password' onChange={this.onChangePassword} />
                    <FormFeedback>Password must be min length 8, containing lowcases, upercases, numbers and special symbols</FormFeedback>
                </FormGroup>
                <Button color="primary" onClick={nextStep} disabled={isActivePersonalData}>Next</Button>
            </Fragment>
        );
    }
}

export {PersonalData};