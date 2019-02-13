import React, {Component} from 'react';
import { observable } from 'mobx';
import { observer }  from 'mobx-react';

@observer
class App extends Component {

@observable inputText = 'Sebastian';
    state = {
        stopTimer: true,
    }

    render() {
        return ( 
          <div>
            {this.inputText}
          </div>
            )
        }
    }

    export default App;