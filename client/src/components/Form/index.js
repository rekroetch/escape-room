import React from 'react';

function Form(props) {
    return (
      <form className="search">
        <div className="form-group"> Sign Up
            <div className="input-group mb-3">
              <input onChange={props.onChange} name="firstName" type="text" className="form-control" placeholder="First Name" aria-label="First Name"/>
            </div>

            <div className="input-group mb-3">
              <input onChange={props.onChange} name="lastName" type="text" className="form-control" placeholder="Last Name" aria-label="Last Name"/>
            </div>

            <div className="input-group mb-3">
              <input onChange={props.onChange} name="email" type="text" className="form-control" placeholder="Email" aria-label="Email"/>
            </div>

            <div className="input-group mb-3">
              <input onChange={props.onChange} name="password" type="text" className="form-control" placeholder="Password" aria-label="Password"/>
            </div>
          <button type="submit" onClick={props.onClick} className="btn btn-warning">
            Submit
          </button>
        </div>
      </form>
    );
  }
  
  export default Form;