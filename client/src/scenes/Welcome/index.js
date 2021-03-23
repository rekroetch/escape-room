
import React from "react";
import Form from '../../components/Form';
import Card from '../../components/Card';
import Row from '../../components/Row';
import Col from '../../components/Col';
import './style.css'

function Welcome (props) {
    
    return(
        <div className="background">
            <header className="welcome">
                Welcome to the Escape Room!
                <h2 className="login">{props.user ? props.user.email : "Log In or Sign Up"}</h2>
            </header>
            <div className="container">
                <Row>
                    <Col size="lg-4">
                        <Card>
                            <p className="intro">Play as a detective trying to solve the murder of a young newlywed named Ponnie, whose body was discoved in her husband's office by her mother several weeks after her death.</p>
                        </Card>
                    </Col>
                    <Col size="lg-4">
                        <Card>
                            <Form
                                onChange={props.handleInputChange}
                                onClick={props.handleSignUpSubmit}
                            />
                        </Card>
                    </Col>
                    <Col size="lg-4">
                        <Card>
                            {/* rework the form components so that it can be used for both sign up and log in */}
                            <form>
                                <div className="form-group"> Log In

                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="email" type="text" className="form-control" placeholder="Email" aria-label="Email"/>
                                    </div>

                                    <div className="input-group mb-3">
                                        <input onChange={props.handleInputChange} name="password" type="password" className="form-control" placeholder="Password" aria-label="Password"/>
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
                    </Col>
                </Row>
            </div>
            <div className="animated-background">
                <div class="forest">
  
                    <div class="bird-container">
                        <div class="bird"></div>
                    </div>
  
                    <div class="sun"></div>
                    <div class="tree01"></div>
  	                <div class="tree02"></div>
  	                <div class="tree03"></div>
                    <div class="tree04"></div>
  
                    <div class="combi-container">
                        <div class="combi"></div>
                        <div class="wheelshadow"></div>
                        <div class="wheel wheel01" ></div>
                        <div class="wheel wheel02" ></div>
                    </div>
  {/* <!-- combi-container end --> */}
  
                </div>
{/* <!-- forest end --> */}
                <div class="forest-background"></div>
                <div class="road"></div>
            </div>
        </div>
    );
}

export default Welcome
