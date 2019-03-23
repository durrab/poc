import * as React from "react";
import { Link } from "react-router-dom";
import * as commonActions from '../actions/common/common-actions'
import { connect } from 'react-redux'
import Button  from '@material-ui/core/Button';

const mapStateToProps = (state) => {
  return {
    cardAnimation: state.common.cardAnimation,
    authenticate: state.authenticationState.authenticate,
  }
}



class Header extends React.Component {
  render() {

    const { authenticate } = this.props;

    /*
     <li>
                    <Link to="/view/help-support">Help & Support</Link>
                  </li>
    */
    return (
      <header className="header-area main-header">
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
              <div className="custom-navbar">
                <span />
                <span />
                <span />
              </div>
              <div className="main-menu">
                <ul>
                  <li className="active">
                    <Link to="/view/myhome">Home</Link>
                  </li>
                  <li>
                    <Link to="/view/myfeatures">Features</Link>
                  </li>
                  <li>
                    <Link to="/view/getting-started">Getting Started</Link>
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
    );
  }
}

export default connect(mapStateToProps)(Header)
/*

 <Link to="/view/dashboard">Dashboard</Link>
*/