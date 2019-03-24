import React, {Component} from 'react';
import {Button, Input,Label} from 'reactstrap';
import {Nav} from "./Nav.jsx";
class Refs extends Component {
onClick = () => {
    const val = this.refs.Myref.value;
	console.log(val);
}

    render() {
        return ( 
          <div>
          <Label>First name:</Label>
          	<input ref="Myref" type="text"/>
          	<Button type="submit" onClick={this.onClick}>Click</Button>
          </div>
          
            )
        }
    }

    export {Refs};