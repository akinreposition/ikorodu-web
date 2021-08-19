import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute =({ component: Component, path, ...rest}) => {
   return (
    <Route
    exact={path}
    {...rest}
    render={(props) => <Component exact={path} {...props}/>}
    />
   )
}