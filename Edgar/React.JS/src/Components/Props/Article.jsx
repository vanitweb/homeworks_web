import React, { Component } from 'react';


class FancyBorder extends Component {
   
    render() {
        return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
        
        )
    }

}



export { FancyBorder };