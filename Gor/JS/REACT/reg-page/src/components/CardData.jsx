import React, { Component, Fragment } from 'react';
import {
    FormGroup,
    Input,
    FormFeedback,
    Button
} from 'reactstrap';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';
import axios from 'axios';

@observer
class CardData extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };
    onChange = (event) => {
        if(this.context.store.isNotEmpty(event.target.value)) {
            this.context.store.cardData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            event.target.className = "is-invalid form-control";
        }
    }
    onChangeNumber = (event) => {
        if(this.context.store.cardNumberValidation(event.target.value)) {
            this.context.store.cardData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            this.context.store.cardDataEmpty(event.target);
            event.target.className = "is-invalid form-control";
        }
    }
    onChangeCvc = (event) => {
        if(this.context.store.cardCvcValidation(event.target.value)) {
            this.context.store.cardData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            this.context.store.cardDataEmpty(event.target);
            event.target.className = "is-invalid form-control";
        }
    }
    onChangeDate = (event) => {
        if(this.context.store.cardDateValidation(event.target.value)) {
            this.context.store.cardData(event.target);
            event.target.className = "is-valid form-control";
        } else {
            this.context.store.cardDataEmpty(event.target);
            event.target.className = "is-invalid form-control";
        }
    }
    onSubmit = () => {
        const user = {
			personalData: {},
			profileDetalis: {},
			cardData: {}
		};
		user.personalData.firstName = this.context.store.regData.personalData.firstName;
		user.personalData.lastName = this.context.store.regData.personalData.lastName;
		user.personalData.country = this.context.store.regData.personalData.country;
		user.personalData.city = this.context.store.regData.personalData.city;
		user.personalData.address = this.context.store.regData.personalData.address;
		user.personalData.email = this.context.store.regData.personalData.email;
		user.personalData.password = this.context.store.regData.personalData.password;
		user.profileDetalis.package = this.context.store.regData.profileDetalis.package;
		user.cardData.cardNumber = parseInt(this.context.store.regData.cardData.cardNumber);
		user.cardData.cardName = this.context.store.regData.cardData.cardName;
		user.cardData.cardCvc = parseInt(this.context.store.regData.cardData.cardCvc);
		user.cardData.cardDate = this.context.store.regData.cardData.cardDate;
		console.log(user);
        axios.post('http://localhost:4000/serverport/add', user)
        .then(res => {
            console.log(res.data);
            this.context.store.nextStep();
        });
    }
  render() {
      const {prevStep, cardDataValues, isActiveCardData} = this.context.store;
    return (
        <Fragment>
            <FormGroup>
              <Input placeholder="Credit Card number" onChange={this.onChangeNumber} defaultValue={cardDataValues('cardNumber')} name='cardNumber' />
              <FormFeedback>Credit Card number containing 16 numbers</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Credit Card name" onChange={this.onChange} defaultValue={cardDataValues('cardName')} name='cardName' />
              <FormFeedback>Credit Card name can not be empty</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Credit Card CVC" onChange={this.onChangeCvc} name='cardCvc' defaultValue={cardDataValues('cardCvc')} />
              <FormFeedback>Credit Card CVC containing 3 or 4 numbers</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Credit Card expiration date" onChange={this.onChangeDate} name='cardDate' defaultValue={cardDataValues('cardDate')} />
              <FormFeedback>Credit Card expiration date format: MM/YY</FormFeedback>
            </FormGroup>
            <Button color="primary" className="mx-2" onClick={prevStep}>Previous</Button>
            <Button color="success" onClick={this.onSubmit} disabled={isActiveCardData}>Submit</Button>
        </Fragment>
    );
  }
}

export {CardData};