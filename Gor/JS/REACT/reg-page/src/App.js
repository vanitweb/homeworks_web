import React, { Component } from 'react';
import {Container} from 'reactstrap';
import {observer} from 'mobx-react';
import PropTypes from 'prop-types';

import {Store} from './stores/Store';

import './App.css';

import {RegisterForm} from './components/RegisterForm';

@observer
class App extends Component {
    constructor() {
        super();
        this.store = new Store();
    }	
    static childContextTypes = {
        store: PropTypes.object
    };
    getChildContext() {
        return {
            store: this.store
        };
    }
  render() {
    return (
      <div className="App text-white">
        <Container>
            <RegisterForm />
        </Container> 
      </div>
    );
  }
}

export default App;