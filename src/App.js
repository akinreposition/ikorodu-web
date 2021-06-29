import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import LandingPage from './Pages/LandingPage'
import LCDAs from './Pages/LCDAs';
import LocalGossips from './Pages/LocalGossips'
import ContactUs from './Pages/ContactUs';
import Services from './Pages/Services';
import Communities from './Pages/Communities.js';
import MSMEs from './Pages/MSMEs';
import Health from './Pages/Health';
import Footer from './components/footer/Footer'
import NotFound from './Pages/NotFound'
import './App.scss';




const App = () => {
  return(
    <Router>
        <Navbar />
         <Switch>
                <Route exact path='/' component={LandingPage}/>
                <Route exact path='/lcda' component={LCDAs}/>
                <Route exact path='/news' component={LocalGossips}/>
                <Route exact path='/contact-us' component={ContactUs}/>
                <Route exact path='/services' component={Services}/>
                <Route exact path='/communities' component={Communities}/>
                <Route exact path='/communities/msme' component={MSMEs}/>
                <Route exact path="/communities/health" component={Health}/>
                <Route component={NotFound} />
         </Switch>
        <Footer />
    </Router>
  )
}

export default App;
