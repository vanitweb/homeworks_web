import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
/*import {Info} from './Info';*/
import App from './App';
import {Tasks} from './Tasks'
class Router extends Component {
  render() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/infoPage"
                    render={(props) => <Tasks item="Route 1" {...props} />}/>
                <Route path="/home" component={App} />
                <Route />
            </Switch>
        </BrowserRouter>
    );
  }
}
export {Router};