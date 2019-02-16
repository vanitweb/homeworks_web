import React, { Component, Fragment} from 'react';
import '../../App.css';
import { observer } from 'mobx-react';
import { AppStore }  from '../../Stores/App.Store.js';

@observer
class App extends Component {
	appStore = new AppStore();

	onSearchValueUpdate = () => {
		this.appStore.searchValue = 'barev dzez';
	};
	    render() {
        return ( 
     			<Fragment>
     				{this.appStore.storeValues._searchValue}
     				<button onClick={this.onSearchValueUpdate}>Update search Value</button>
     			</Fragment>
            );
        }
}
export default App;
