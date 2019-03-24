import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {Users} from "./Users";
import {Users2} from "./Users2";
import {Nav} from "./Nav.jsx";



class App extends Component {
    render() {
        return ( 
<Router>  
    <div>
       <Nav/>
       <hr/>
          <div>
        <Route  exact  path="/Users" component={Users} />
        <Route path="/Users2" component={Users2} />

    </div>
          </div>
</Router>
            )
        }
    }

    export default App;