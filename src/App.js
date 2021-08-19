import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import { PrivateRoute } from './Routes/PrivateRoute.js';
// import { PublicRoute } from './Routes/PublicRoute.js'
// import { AuthContextProvider } from './authentication/AuthContext.js';
// import routes from './routes';
import { Provider } from 'react-redux';
import store from './store'
import LandingPage from './pages/LandingPage';
import LocalGossips from './pages/LocalGossips';
import LCDA from './pages/LCDAs';
import ContactUs from './pages/ContactUs';

import NotFound from './pages/NotFound'
import './App.scss';
import { SignUp } from './components/forms/SignUp';
import { Login } from './components/forms/Login';
import Services from './pages/Services';

const App = () => {
  return(
    <Provider store={store}>
      <Router>
            <Switch>
                {/* {routes.map((route, i) =>{
                  if(route.isPrivate){
                    return <PrivateRoute key={i} {...route}/>
                  } else {
                    return <PublicRoute key={i} {...route}/>
                  }
                })} */}
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/news' component={LocalGossips}/>
                <Route exact path='/services' component={Services}/>
                <Route exact path="/lcda" component={LCDA}/>
                <Route exact path="/contact-us" component={ContactUs}/>
                <Route exact path='/sign-up' component={SignUp}/>
                <Route exact path='/login' component={Login}/>
                <Route component={NotFound} />
            </Switch>
        </Router>
    </Provider>
  )
}

export default App;
