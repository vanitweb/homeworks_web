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
    onSubmit = () => {
        const user = this.context.store.getRegData();
        console.log(user);
        axios.post('http://localhost:4000/serverport/add', user)
        .then(res => {
            console.log(res.data);
            this.context.store.nextStep();
        })
        .catch(err => {
            alert("Oooops! Something was wrong. Please, try agane");
            this.context.store.startStep();
        });
    }
  render() {
    const {
        prevStep,
        cardDataValues,
        isActiveCardData,
        onChange
    } = this.context.store;
    return (
        <Fragment>
            <FormGroup>
              <Input placeholder="Credit Card number" onChange={onChange('cardData')} defaultValue={cardDataValues('cardNumber')} name='cardNumber' />
              <FormFeedback>Credit Card number containing 16 numbers</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Credit Card name" onChange={onChange('cardData')} defaultValue={cardDataValues('cardName')} name='cardName' />
              <FormFeedback>Credit Card name can not be empty</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Credit Card CVC" onChange={onChange('cardData')} name='cardCvc' defaultValue={cardDataValues('cardCvc')} />
              <FormFeedback>Credit Card CVC containing 3 or 4 numbers</FormFeedback>
            </FormGroup>
            <FormGroup>
              <Input placeholder="Credit Card expiration date" onChange={onChange('cardData')} name='cardDate' defaultValue={cardDataValues('cardDate')} />
              <FormFeedback>Credit Card expiration date format: MM/YY</FormFeedback>
            </FormGroup>
            <Button color="primary" className="mx-2" onClick={prevStep}>Previous</Button>
            <Button color="success" onClick={this.onSubmit} disabled={isActiveCardData}>Submit</Button>
        </Fragment>
    );
  }
}

export {CardData};