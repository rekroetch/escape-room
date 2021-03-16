import React from "react"
import { Route, Redirect } from "react-router-dom"
import auth from "../../auth.js"

// if user is logged in, the component specified will render, otherwise they are redirected to login
function ProtectedRoute ({  component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props => {
                if (auth.isAuthenticated()) {
                    return <Component {...props} />
                }
                else {
                    return <Redirect to={
                        {
                            pathname: "/",
                            state: {
                                from: props.location
                            }
                        }
                    } />
                }
            }}
        />
    )
};

export default ProtectedRoute