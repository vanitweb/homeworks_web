import React from 'react';

class Article extends React.Component {
	state={
		isOpen: true
	}

	render () {
		const {article} = this.props
		const body = this.state.isOpen && <	section> {article.text}</section>
		return (
		<div>
		 <h2> 
			{article.titel} 
			<button onClick = {handleClick}>Click</button>
		  </h2>
		  {body}
		</div>
		)
	}
handleClick = () => {
			this.state({
				isOpen: !this.state.isOpen
			})
		}

export {Article};