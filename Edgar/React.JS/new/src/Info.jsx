import React from 'react';

class Info extends React.Component{
    render(){
    const {value} = this.props;
    return(
        <p>{value}</p>
        
    );
    }
}
export {Info}