import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';

@observer
class InputSarch extends Component {
    static propTypes = {
        changeValue : PropTypes.func.isRequired,
    }
    render() {
        const {changeValue} = this.props;
        return (
            <>
            <td>
                <input  onChange = {changeValue} placeholder ="Search"/>
            </td>
            </>
        );
    }
}

export default InputSarch;