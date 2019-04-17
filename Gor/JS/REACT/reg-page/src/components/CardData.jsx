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
    onSubmit = (event) => {
        const user = this.context.store.regData;
        axios.post('/add', user)
        .then(
            res => {
                console.log(res);
                this.context.store.nextStep();
            })
        .catch(err => console.log(err));
    }
  render() {
      const {nextStep, prevStep, cardDataValues, isActiveCardData} = this.context.store;
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
            <Button color="success" onClick={nextStep} disabled={isActiveCardData}>Submit</Button>
        </Fragment>
    );
  }
}

export {CardData};