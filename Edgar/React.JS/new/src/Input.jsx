import React from 'react';

class Input extends React.Component{
   render(){
        const {value1} = this.props;
       return(
            <input value = {value1} onChange ={this.props.onChange}/>
       
       );
   } 
}

export {Input}