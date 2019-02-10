import React, { Component } from 'react';
import {observable} from 'mobx';
import {observer} from 'mobx-react';

@observer
class MobxExample extends Component {
  state = {
      data: null
      stopTime: 
    }
@observable inputText = "";

  render() {
    return(
    <div>

    </div>
    )
  }
}

export default MobxExample;