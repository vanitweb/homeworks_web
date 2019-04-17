import React, { Component } from 'react';



class BootstrapFormExample extends Component {



	render() {
    
      
    
         
	    return (
	        <div className="BootstrapFormExample">

<form className="text-center border border-light p-5">
	<p className="h4 mb-4">Tell us who you are:</p>
    <p className="h4 mb-4">Step 1 / 3</p>

    <div className="form-row mb-4">
        <div className="col">

            <input type="text" id="firstName" className="form-control" placeholder="First name"/>
        </div>
        <div className="col">

            <input type="text" id="lastName" className="form-control" placeholder="Last name"/>
        </div>
    </div>
    <div className="form-row mb-4">
        <div className="col">

            <input type="text" id="country" className="form-control" placeholder="First name"/>
        </div>
        <div className="col">

            <input type="text" id="city" className="form-control" placeholder="Last name"/>
        </div>
    </div>
    


    <input type="email" id="defaultRegisterFormEmail" className="mb-4 form-control is-invalid" placeholder="E-mail"/>
    <input type="email" id="defaultRegisterFormEmail2" className="form-control mb-4 is-invalid" placeholder="E-madddddil"/>


    <input type="password" id="defaultRegisterFormPassword" className="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock"/>
    <small id="defaultRegisterFormPasswordHelpBlock" className="form-text text-muted mb-4">
        At least 8 characters
    </small>
    


    
    <div className="row">
	    <div className="col">
	        <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
	    </div>
	    <div className="col">
	        <button className="btn btn-info my-4 btn-block" type="submit">Sign in</button>
	    </div>
	</div>        
    


</form>

	            
	        </div>
	    );
  }
}

export default BootstrapFormExample;