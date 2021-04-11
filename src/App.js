import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import LandingPage from './Pages/LandingPage'
import Enviroment from './Pages/Enviroment'
import News from './Pages/News'
import Subscribe from './Pages/Subscribe'
import Footer from './components/footer/Footer'
import Packages from './Pages/Packages'
import NotFound from './Pages/NotFound'
import './App.css';

const App = () => {
  return(
    <Router>
        <Navbar />
         <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/enviroments' component={Enviroment}/>
                <Route exact path='/news' component={News}/>
                <Route exact path='/packages' component={Packages}/>
                <Route exact path='/subscribe' component={Subscribe}/>
                <Route component={NotFound} />
         </Switch>
        <Footer />
    </Router>
  )
}

export default App;
