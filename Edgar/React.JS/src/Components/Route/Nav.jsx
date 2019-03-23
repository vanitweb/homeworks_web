import React, {Component} from 'react';
import { Link } from "react-router-dom";
import style from './Nav.module.css'


class Nav extends Component {
    render() {
        return ( 
          <div>
   <ul>
   
   	<li><Link className ={style.link}to="/Users">Users</Link></li>
   	<li><Link className ={style.link}to="/Users2">Users2</Link></li>
   </ul>
          </div>
            )
        }
    }

    export {Nav};