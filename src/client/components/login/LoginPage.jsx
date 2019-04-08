import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../../theme/components/Header/Header.jsx"
import HeaderLinks from "../../theme/components/Header/HeaderLinks.jsx";
import Footer from "../../theme/components/Footer/Footer.jsx";
import GridContainer from "../../theme/components/Grid/GridContainer.jsx";
import GridItem from "../../theme/components/Grid/GridItem.jsx";
import loginPageStyle from "../../theme/assets/jss/material-kit-react/views/loginPage.jsx";
import image from "../../theme/assets/img/bg7.jpg";
import Card from "../../theme/components/Card/Card.jsx"
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as loginActions from '../../actions/login/login-actions'
import * as commonActions from '../../actions/common/common-actions'
import LoginForm from './LoginForm.jsx'
import DashboardComponent from '../dashboard/DashboardComponent'

import {
  withRouter, Redirect
} from 'react-router-dom'


const mapStateToProps = (state) => {
  return {
    login: state.authenticationState,
    form: state.form,
    indicator: state.authenticationState.indicator,
    isError: state.authenticationState.isError,
    response: state.authenticationState.response,
    status: state.authenticationState.status,
    authenticate: state.authenticationState.authenticate,
    dashboard: state.authenticationState.dashboard,
    cardAnimation: state.common.cardAnimation
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(loginActions,dispatch),
    commonActions: bindActionCreators(commonActions,dispatch)
  };
}



class LoginPage extends React.Component {
  
  constructor(props) {
    super(props);
    this.props.commonActions.toggleCardAnimation(false);
  }

  componentDidMount() {
   
    setTimeout(
     () => {
      this.props.commonActions.toggleCardAnimation(true);
     },
      500
    );


  }

  
  render() {
    const {cardAnimation, dashboard, authenticate, indicator, status, isError, response , classes,form, ...rest } = this.props;
    
    return (
      <div>
        
        {authenticate === false ? (  <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
      

        <div className={classes.container} style={{marginTop:70}}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[cardAnimation]}>
                  <LoginForm indicator={indicator} status={status} isError={isError} classes={classes} onSubmit={this.handleSubmit}/>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
     
         
        
        </div>): (<DashboardComponent/>)}

      </div>
    );
  }


  handleSubmit = () => {
    const { form } = this.props
    if(form.authenticationForm != undefined){
      this.props.actions.showStatusMessage('authenticating - please wait...');
      this.props.actions.indicator(true);
      this.props.actions.error(false);
      this.props.actions.loginRequest(form.authenticationForm.values);
      
      console.log('Final values got here' + JSON.stringify(form.authenticationForm.values));
    }
    console.log('On Submit called')
  }


  componentWillMount = () => {
    this.props.commonActions.toggleCardAnimation(false);
  }

}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(loginPageStyle)(LoginPage));
