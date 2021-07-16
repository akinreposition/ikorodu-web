import React, { useContext } from 'react';
import { Route, Redirect  } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthContext';

export const PrivateRoute = ({ compoment: Component, path, ...rest }) => {
    const { userType } = useContext(AuthContext);
    return (
        <Route
        {...rest}
        exact={true}
        render={props =>
            userType && userType.type !== undefined ? (
                <Component exact={path} {...props} />
            ) : (
                <Redirect 
                to={{pathname: "/login", state: { referer: props.location } }}
            />)
        }
        />
    );
}