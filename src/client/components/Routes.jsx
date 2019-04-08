import React, { Fragment } from "react";
import {  Route, Switch, Redirect, withRouter } from "react-router-dom";
import Home from "./home/Home.jsx";
import Features from "./Features";
import GettingStarted from "./GettingStarted";
import PlansPrices from "./PlansPrices";
import FAQ from "./FAQ";
import HelpSupport from "./HelpSupport";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import LoginComponent from './login/LoginComponent'
import RegisterComponent from './registration/RegistrationComponent'
import DashboardComponent from './dashboard/DashboardComponent'

import Header from '../theme/components/Header/Header.jsx'
import HeaderLinks from '../theme/components/Header/HeaderLinks.jsx'
//import { HeaderLinks } from 'components/Header/HeaderLinks.jsx';
import SectionPills from "../theme/views/Components/Sections/SectionPills.jsx"
import LoginPage from "./login/LoginPage.jsx"
import SectionNavbars from "../theme/views/Components/Sections/SectionNavbars.jsx"
//import LandingPage from "../theme/views/LandingPage/LandingPage.jsx" 

import { connect } from 'react-redux'





const mapStateToProps = (state) => {
  return {
    authenticated: state.authenticationState.authenticated
  }
}




const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    rest.authenticated === true
      ? <Component {...props} />
      : <Redirect to={{
          pathname: '/view/login',
          state: { from: props.location }
        }} />
  )} />
);

class MyRoutes extends React.Component {
  render() {
      const  {authenticated} = this.props;
    
    return (

      
            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/view/myfeatures" component={Features} />
              <Route  path="/view/getting-started" component={GettingStarted} />
              <Route  path="/view/plans-prices" component={PlansPrices} />
              <Route  path="/view/faq" component={FAQ} />
              <Route  path="/view/help-support" component={HelpSupport} />
              <Route path="/view/login" component={withRouter(LoginPage)} />
              <Route path="/view/register" component={RegisterComponent}/>
              <Route path="/view/navbar" component={SectionPills}/>
              <ProtectedRoute authenticated={authenticated} path="/view/dashboard" component={DashboardComponent} />
              <Route path="/view/dashboard-test" component={DashboardComponent} />

         
             
            </Switch>

            

    
        
         
          
    );
  }
}

export default withRouter(connect(mapStateToProps)(MyRoutes))
 