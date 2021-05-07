import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import LandingPage from './Pages/LandingPage'
import CDAs from './Pages/CDAs';
import LocalGossips from './Pages/LocalGossips'
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Footer from './components/footer/Footer'
import NotFound from './Pages/NotFound'
import './App.scss';



const App = () => {
  return(
    <Router>
        <Navbar />
         <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/cda' component={CDAs}/>
                <Route exact path='/news' component={LocalGossips}/>
                <Route exact path='/contact-us' component={ContactUs}/>
                <Route exact path='/services' component={Services}/>
                <Route component={NotFound} />
         </Switch>
        <Footer />
    </Router>
  )
}

export default App;
