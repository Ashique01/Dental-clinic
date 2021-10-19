import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../Hooks/useAuth';
import useFirebase from '../../../Hooks/useFirebase';



const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useFirebase();//use Auth is not working
    if (isLoading) {
        return <Spinner animation="border" variant="danger" />
    }
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ? children : <Redirect
                to={{
                    pathname: "/login",
                    state: { from: location }
                }}
            ></Redirect>

            }
        >

        </Route>
    );
};
export default PrivateRoute;