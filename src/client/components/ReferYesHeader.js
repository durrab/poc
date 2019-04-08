import * as React from "react";
import { Link } from "react-router-dom";
import * as commonActions from '../actions/common/common-actions'
import { connect } from 'react-redux'


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
import SvgIcon from '@material-ui/core/SvgIcon';
// @material-ui/icons
import Search from "@material-ui/icons/Search";
import Email from "@material-ui/icons/Email";
import Face from "@material-ui/icons/Face";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Explore from "@material-ui/icons/Explore";
// core components
import GridContainer from "../theme/components/Grid/GridContainer.jsx";

import GridItem from "../theme/components/Grid/GridItem.jsx";
import Header from "../theme/components/Header/Header.jsx";
import CustomInput from "../theme/components/CustomInput/CustomInput.jsx";
import CustomDropdown from "../theme/components/CustomDropdown/CustomDropdown.jsx";
import Button from "../theme/components/CustomButtons/Button.jsx";
import logo from '../assets/images/logo.svg'



import image from "../theme/assets/img/bg.jpg";
import profileImage from "../theme/assets/img/faces/avatar.jpg";

import headerStyle from '../assets/jss/header.jsx'

const mapStateToProps = (state) => {
  return {
    cardAnimation: state.common.cardAnimation,
    authenticate: state.authenticationState.authenticate,
  }
}



class ReferYesHeader extends React.Component {
  render() {

    const { authenticate } = this.props;
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
              brand="/assets/images/logo/logo.svg"
              fixed
              
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              className={classes.referYesHeader}
              rightLinks={
                <List className={classes.list}>
                 <ListItem className={classes.listItem}>
                    <Button
                    
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                     <Link to="/">Home</Link>
                    </Button>
                </ListItem>

                  <ListItem className={classes.listItem}>
                    <Button
                     
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                     <Link to="/view/myfeatures">Features</Link>
                    </Button>
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <Button
                     
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      <Link to="/view/plans-prices">Plans & Prices</Link>
                    </Button>
                  </ListItem>

                  <ListItem className={classes.listItem}>
                    <Button
                     
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                       <Link to="/view/faq">FAQ</Link>
                    </Button>
                  </ListItem>

                 {
                   authenticate === true && ( <ListItem className={classes.listItem}>
                    <Link className="template-btn" to="/view/dashboard">Dashboard</Link>
                    
                  </ListItem>)
                 }
                  
                  {
                    authenticate === true && (<ListItem className={classes.listItem}>
                      <Button
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                      
                       <Link className="login" to="/view/login">Logout</Link>
                      
                      </Button>
                    </ListItem>)
                  }

                  {
                    authenticate === false && (<ListItem className={classes.listItem}>
                      <Button
                        className={classes.navLink}
                        onClick={e => e.preventDefault()}
                        color="transparent"
                      >
                      
                       <Link className="login" to="/view/login">Login</Link>
                      
                      </Button>
                    </ListItem>)
                  }


                    {
                    authenticate === false && (
                    
                    <ListItem className={classes.listItem}>
                      <Link className="template-btn" to="/view/register">
                     sign up
                    </Link>
                    </ListItem>)
                  }
                 
               
               
                </List>
              }
            />
      
      </div>
    
    );
  }
}

/*

 <header >
        <div className="container">
          <div className="row">
            <div className="col-lg-2">
              <div className="logo-area">
                <a href="index.html">
                  <img src="assets/images/logo.jpg" alt="logo" />
                </a>
              </div>
            </div>
            <div className="col-lg-10">
             
              <div className="main-menu">
                <ul>
                <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/view/myfeatures">Features</Link>
                  </li>
                  <li>
                    <Link to="/view/plans-prices">Plans & Prices</Link>
                  </li>
                  <li>
                    <Link to="/view/faq">FAQ</Link>
                  </li>
                 
                  <li>
                   
                  </li>
                  <li className="menu-btn">
                  {
                     authenticate === true &&  <Link className="template-btn" to="/view/dashboard">Dashboard</Link>
                  }
                  {
                    authenticate === true && <Button className="login">Logout</Button> 
                  }
                  {
                     authenticate === false &&  <Link className="login" to="/view/login">log in</Link>
                  }
                  {
                     authenticate === false &&   <Link className="template-btn" to="/view/register">
                     sign up
                   </Link>
                  }
                   
                   
                  </li>
                </ul>
              </div>


            </div>
          </div>
        </div>
      </header>

*/

export default connect(mapStateToProps)(withStyles(headerStyle)(ReferYesHeader));
/*

 <Link to="/view/dashboard">Dashboard</Link>
*/