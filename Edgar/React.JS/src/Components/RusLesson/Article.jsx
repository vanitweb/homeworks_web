import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import style from "./Article.module.css"
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

class Article extends Component {
    state = {
        isOpen: true
    }

    handleClick = () => {
        console.log("Click");
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        const { article } = this.props;
        const body = this.state.isOpen && <section>{article.text}</section>
        return (
           
         <Card className={style.Card}>
         <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
         <CardBody>
         <CardTitle><h2>{article.user}</h2></CardTitle>
        <Button class = "priamry"onClick={this.handleClick}>{this.state.isOpen ? "Close": "open"}</Button>
          <CardText>{body}</CardText>
          </CardBody>
          </Card>
       

        )
    }

}



export { Article };