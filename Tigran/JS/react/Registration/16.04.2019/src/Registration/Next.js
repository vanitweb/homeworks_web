import React, { Component } from 'react';



class Next extends Component {
    

  render() {
    const {next, nextFun, previousFun,step} = this.props;
    // console.log(isNext)
    let buttons;
    switch(step){
            case 1:
                if(next){
                    buttons =   <div className="col">
                                    <button onClick={nextFun} className="btn btn-info my-4 btn-block" type="submit">next</button>
                                </div>;
                }else{
                    buttons =   <div className="col">
                                    <button onClick={nextFun} disabled className="btn btn-info my-4 btn-block" type="submit">next</button>
                                </div>;
                }
                break;
            case 2 :
            case 3 :
                if(next){
                    buttons =   <><div className="col">
                                    <button onClick={previousFun} className="btn btn-info my-4 btn-block" type="submit">previous</button>
                                </div>
                                <div className="col">
                                    <button onClick={nextFun} className="btn btn-info my-4 btn-block" type="submit">next</button>
                                </div></>
                               
                }else{
                    buttons =   <><div className="col">
                                    <button onClick={previousFun} className="btn btn-info my-4 btn-block" type="submit">previous</button>
                                </div>
                                <div className="col">
                                    <button onClick={nextFun} disabled className="btn btn-info my-4 btn-block" type="submit">next</button>
                                </div></>
                }
                break;
            default:
                break;
        }
      
    
         
    return (
        <div className="Next row">
            {buttons}
            
        </div>
    );
  }
}

export default Next;




//// <div className="row">
//         <div className="col">
//             <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
//         </div>
//         <div className="col">
//             <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
//         </div>
//     </div> 