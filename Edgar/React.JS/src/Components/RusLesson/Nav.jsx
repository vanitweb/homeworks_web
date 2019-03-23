import React, {Component} from 'react';
import {Article} from './Article.jsx';
class Nav extends Component  {
    render() {
    const{articles} = this.props
    const Elements= articles.map(list =>
    	<li key={list.id}><Article article={list}/></li>
    )
        return ( 
          <div>
         {Elements}
          </div>
            )
        }
    }

    export {Nav};