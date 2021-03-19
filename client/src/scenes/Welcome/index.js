
import React, { useState } from "react";
import API from "../../utils/API";
import Form from '../../components/Form';
import Card from '../../components/Card';
import './style.css'
//import { ESRCH } from "node:constants";
//import { Redirect } from "react-router";

function Welcome () {
    // Setting our component's initial state
    const [formObject, setFormObject] = useState({})

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({...formObject, [name]: value})
    };

    // When the form is submitted, use the API.saveUser method to save the User data
    function handleFormSubmit(event) {
        event.preventDefault();
        API.saveUser({
            firstName: formObject.firstName,
            lastName: formObject.lastName,
            email: formObject.email,
            password: formObject.password
        })
        .then(console.log(formObject))
        .catch(err => console.log(err))
    }
    

    return(
        <div>
            <header>
                <h1>Welcome</h1>
            </header>
            <Card>
                <Form
                    onChange={handleInputChange}
                    onClick={handleFormSubmit}
                />
            </Card>
        </div>
    );
}

export default Welcome
