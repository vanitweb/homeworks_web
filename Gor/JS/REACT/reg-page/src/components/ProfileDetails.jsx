import React, { Component, Fragment } from 'react';
import {FormGroup, Label, Button, Input} from 'reactstrap';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

@observer
class ProfileDetails extends Component {
    static contextTypes = {
        store: PropTypes.object.isRequired
    };
  render() {
      const {nextStep, prevStep, profileDetalisValues, isActiveProfileDetails, onChangeProfile} = this.context.store;
    return (
        <Fragment>
            <FormGroup tag="fieldset">
              <legend>Select your package</legend>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="packages" defaultChecked={profileDetalisValues() === "Standart Package" && 'true'} value="Standart Package" onClick={onChangeProfile} />
                  Standart Package
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="packages" defaultChecked={profileDetalisValues() === "Premium Package" && 'true'} value="Premium Package" onClick={onChangeProfile}/>
                  Premium Package
                </Label>
              </FormGroup>
            </FormGroup>
            <Button color="primary" className="mx-2" onClick={prevStep}>Previous</Button>
            <Button color="primary" onClick={nextStep} disabled={isActiveProfileDetails}>Next</Button>
        </Fragment>
    );
  }
}

export {ProfileDetails};