import React, {Component} from 'react';

class Article extends Component {
	state = {
		isOpen: false
	}
	render(){
	const {article}=this.props;
	const body = this.state.isOpen && <section> {article.text} </section>
	return (
	<div>
		<h2>
			{article.title}
			<button onClick={this.handleClick}>
				{this.state.isOpen ? 'close' : 'open'}
			</button>
		</h2>
		{body}
		<h3> 
			creation data: {(new Date).toDateString()}
		</h3>
	</div>
	)
  }
  handleClick = () => {
	console.log('ghgh')
	this.setState({
		isOpen: !this.state.isOpen
  })		
 }
}


export default Article