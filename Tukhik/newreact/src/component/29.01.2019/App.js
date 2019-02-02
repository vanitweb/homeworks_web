import React, { Component } from 'react';

import {Article} from './Article';

const TEXT = 'After school, Kamal took the girls to the old house. It was very old and very dirty too. There was rubbish everywhere. The windows were broken and the walls were damp. It was scary. Amy didn’t like it. There were paintings of zombies and skeletons on the walls. “We’re going to take photos for the school art competition';
class App extends Component {
  
  <Article article = TEXT />
  state = {value1: "ClickOne", value2: "ClickTwo", value3: "ClickTho"}
	static propTypes = {
		
	};
	
	
  state = {value: ""}
  onChangeValue = (event)=>{
    const val = event.target.value;
   this.setState({value1: "ClickOne", value2: "ClickTwo", value3: "ClickTho"});
  }
  clear = () => {
  this.setState({value:''});
}

  render() {
    const {value}=this.state;
    return (
      <div className="App">
       <Input value = {value} onChange={this.onChangeValue} clearInput={this.clear}/>
       
   
      </div>
    );
  }
}

export default App;
