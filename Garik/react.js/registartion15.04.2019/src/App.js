import React, { Component } from 'react';
import PropTypes from 'prop-types'

import AppStore from './stores/AppStore';

import Registration from './components/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';

import './assets/stylesheets/App.css'

class App extends Component {
    static childContextTypes = {
        AppStore : PropTypes.object
    }
    AppStore = new AppStore();
    getChildContext (){
        return {
            AppStore : this.AppStore,
        }
    }
    render() {
    return (
        <div className = "App">
            <Registration/>
        </div>
        );
    }
}

export default App;
