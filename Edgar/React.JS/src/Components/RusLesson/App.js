import React, {Component} from 'react';

import articles from './fixtures.js';
import {Nav} from "./Nav.jsx";



class App extends Component {

    render() {
        return ( 
            <div>
            <h1 >App Name</h1>
              <Nav articles={articles}/>
            </div>
            )
        }
    }

    export default App;