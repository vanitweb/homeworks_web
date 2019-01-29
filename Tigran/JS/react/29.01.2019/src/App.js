import React, { Component } from 'react';
import './App.css';





class App extends Component {
  state = {
    anun : "",
    azganun : "",
    
  }
  
  hashvel = (bar,text,count)=> {

    let index = text.indexOf(bar);
      if(index !== -1){
          count++;
          console.log(count,index,bar,"4");
          return this.hashvel(bar,text.slice(index + bar.length),count)
      }else{

          console.log(count,index,"verj");
          
      }
  }

  poisk = () => {
    let bar = document.getElementsByTagName("input")[0].value;
    if (bar === "") {
      return 0;
    }
    let text = document.getElementsByTagName("P")[0].textContent;
    // text = text.split(" ");
    let count = 0;
    // console.log(bar);
    // console.log(text);
    this.hashvel(bar,text,count);
  }

  render() {
    return (



      <div className="App">


          <input type="text"/>
          <button onClick={this.poisk}>search</button>
        

        <p>
        Lorem Ipsum is simply dummy text of the printing and 
        typesetting industry. Lorem Ipsum has been the industry's 
        standard dummy text ever since the 1500s, when an unknown 
        printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived <span>not</span> only five centuries, but also
         the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets
           containing Lorem Ipsum passages, and more recently with desktop publishing 
           software like Aldus PageMaker including versions of Lorem 

          
          </p>


        
      </div>
      
    );
  }
}

export default App;
