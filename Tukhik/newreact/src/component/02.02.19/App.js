import React, { Component } from 'react';
import './App.css';
import Header from './Header/Header'
import Navbar from './Navbar/Navbar'
import Profile from './Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'

const App =() => {
  return (
  	<BrowserRouter>
    <div className='app-wraper'>
    <Header />
    <Navbar />
    <div className='app-wraper-content'>
    <Route path='/dialogs' component={Dialogs}/>
    <Route path='/profile' component={Profile}/>
    </div>	
    </div>
    </BrowserRouter>)
    
}
export default App; 