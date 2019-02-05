import React, { Component } from 'react';


class MyButtons extends Component {

  render() {
	  const {onChange, onChange2, onChange3} = this.props;
        return (
            <div>
                  <button onClick={onChange} value = "This is btn1 name">Button 1</button>
                  <button onClick={onChange2}>Button 2</button>
                  <button onClick={onChange3}>Button 3</button>
            </div>
        );
  }
}

export {MyButtons};