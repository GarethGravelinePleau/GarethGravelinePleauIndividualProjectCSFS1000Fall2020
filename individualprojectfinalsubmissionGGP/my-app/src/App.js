
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Portfolio from './components/Portfolio'
import Contact from './components/Contact';
import Resume from './components/Resume';
import Error from './components/Error';
import Navigation from './components/Navigation';
import Login from './components/Login';
import Listing from './components/Listing';
import PrivateRoute from './components/PrivateRoute';
import ResumeListDash from './components/ResumeListDash';
import ResumeUpdate from './components/ResumeUpdate';
import ResumeCreate from './components/ResumeCreate';
import PortfolioListDash from './components/PortfolioListDash'
import PortfolioUpdate from './components/PortfolioUpdate';
import PortfolioCreate from './components/PortfolioCreate';
import UserCreate from './components/UserCreate';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
          <Navigation />
            <Switch>
            <Route exact path="/" component={Home}/> 
             <Route exact path="/home" component={Home}/>
             <Route exact path="/portfolio" component={Portfolio}/>
             <Route exact path="/resume" component={Resume}/>
             <Route exact path="/contact" component={Contact}/>
             <Route exact path="/login" component={Login} />
          <PrivateRoute path="/entries">
            <Listing />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <ResumeListDash />
          </PrivateRoute>
          <PrivateRoute path="/resume/update/:id">
            <Route component={ResumeUpdate} />
          </PrivateRoute>
          <PrivateRoute path="/resume/create/">
            <Route component={ResumeCreate} />
          </PrivateRoute>
          <PrivateRoute path="/admin2">
            <PortfolioListDash />
          </PrivateRoute>
          <PrivateRoute path="/portfolio/update/:id">
            <Route component={PortfolioUpdate} />
          </PrivateRoute>
          <PrivateRoute path="/portfolio/create/">
            <Route component={PortfolioCreate} />
          </PrivateRoute>
          <PrivateRoute path="/users/register/">
            <Route component={UserCreate} />
          </PrivateRoute>
            <Route component={Error}/>
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;
