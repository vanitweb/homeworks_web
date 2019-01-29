import React, {Component} from 'react';


class Text extends Component {
	render(){
		return(
			<div>
			<p id="p">Anyone who reads Old and Middle English literary texts will be familiar  the mid-brown volumes  the EETS,  the
			symbol  Alfred's jewel embossed on the front cover. Most of the works attributed to King Alfred or to Aelfric, 
			along  some  those by bishop Wulfstan and much anonymous prose and verse  the pre-Conquest period, are to 
			be found within the 
			Society's three series; all of the surviving medieval drama, most of the Middle English romances, much religious 
			and secular prose and verse including the English works  John Gower, Thomas Hoccleve and most  
			Caxton's prints all find their place in 
			the publications. Without EETS editions, study  medieval English texts would hardly be possible.</p>
				<p>{this.props.tpel}</p>
			</div>
		);
	}
}
export {Text};