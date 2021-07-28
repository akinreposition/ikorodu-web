import React from 'react';
import { Route } from 'react-router-dom';

export const PublicRoute =({ component: Component, path, ...rest}) => {
   return (
    <Route
    exact={false}
    {...rest}
    render={(props) => <Component exact={false} {...props}/>}
    />
   )
}