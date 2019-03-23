import React, {Component} from 'react';
import {FancyBorder} from "./Article.jsx";



class App extends Component {

    render() {
        return ( 
            <div>
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        Welcome
      </h1>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
            )
        }
    }

    export default App;