import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import {addPost}  from './redux/state';

const App =(props) => {
  return (
  	<BrowserRouter>
    <div className='app-wraper'>
    <Header />
    <Navbar />
    <div className='app-wraper-content'>
    <Route path='/dialogs' render = {() => <Dialogs dialogs={props.state.dialogs} messages={props.state.messages}/> } />
    <Route path='/profile' render = {() =>  <Profile state={props.state.profilePage} addPost={addPost}/> } />
    </div>	
    </div>
    </BrowserRouter>)
    
}
export default App; 