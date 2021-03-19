
import React from "react";
import Form from '../../components/Form';
import Card from '../../components/Card';
import './style.css'
//import { ESRCH } from "node:constants";
//import { Redirect } from "react-router";


function Welcome (props) {
    
    return(
        <div>
            <header>
                <h1>Welcome {props.user ? props.user.email : "not logged in"}</h1>
            </header>
            <Card>
                <Form
                    onChange={props.handleInputChange}
                    onClick={props.handleSignUpSubmit}
                />
            </Card>
            <Card>
                {/* rework the form components so that it can be used for both sign up and log in */}
                <form>
                    <div className="form-group"> Log In

                        <div className="input-group mb-3">
                            <input onChange={props.handleInputChange} name="email" type="text" className="form-control" placeholder="Email" aria-label="Email"/>
                        </div>

                        <div className="input-group mb-3">
                            <input onChange={props.handleInputChange} name="password" type="text" className="form-control" placeholder="Password" aria-label="Password"/>
                        </div>
                        <button
                            type="submit"
                            onClick={props.handleLogInSubmit}
                            className="btn btn-warning"
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </Card>
        </div>
    );
}

export default Welcome
