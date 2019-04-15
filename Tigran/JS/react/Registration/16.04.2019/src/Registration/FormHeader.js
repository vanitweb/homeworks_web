import React, { Component } from 'react';

import Messages from './Messages.js';

class FormHeader extends Component {
    
  render() {
    const {step} = this.props;
    return (
      	<div className="FormHeader">
            <p className="h4 mb-4">{Messages.generalInfo.headInfo.title}</p>
    		<p className="h4 mb-4">Step {step} / 3</p>
      	</div>
    );
  }
}

export default FormHeader;