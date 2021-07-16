import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { PrivateRoute } from './Routes/PrivateRoute.js';
import { PublicRoute } from './Routes/PublicRoute.js'
import { Provider } from 'react-redux';
import { AuthContextProvider } from './authentication/AuthContext.js';
import store from './store'
import routes from './routes';
import NotFound from './pages/NotFound'
import './App.scss';

const App = () => {
  return(
    <Provider store={store}>
      <AuthContextProvider>
        <Router>
            <Switch>
                {routes.map((route, i) =>{
                  if(route.isPrivate){
                    return <PrivateRoute key={i} {...route}/>
                  } else {
                    return <PublicRoute key={i} {...route}/>
                  }
                })}
                <Route component={NotFound} />
            </Switch>
        </Router>
      </AuthContextProvider>
    </Provider>
  )
}

export default App;
