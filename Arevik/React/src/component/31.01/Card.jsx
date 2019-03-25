import React, { Component } from 'react';
import { Card, Button, CardImg, CardTitle, CardText, CardDeck, CardSubtitle, CardBody } from 'reactstrap';


class Card extends Component {

    render() {

        return(
            <CardDeck>
                {this.props.arrayOfLavTeachers.map((item,i) => {
                    return (
						<Card key={i}>{item}
							<CardImg top width="100%" src="this.props.arrayOfLavTeachers.photo"/>
							<CardBody>
								<CardTitle>{this.props.arrayOfLavTeachers.name}</CardTitle>
								<CardSubtitle>{this.props.arrayOfLavTeachers.subject}</CardSubtitle>

								<Button>{this.props.arrayOfLavTeachers.aboutMe}</Button>
							</CardBody>
						</Card>
					)
                })}
            </CardDeck>
        );
    }
}

export {Card};