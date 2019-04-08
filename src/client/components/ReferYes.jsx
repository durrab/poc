import * as React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActions from "../actions/auth/auth-actions";
import Contents from './Contents'
import Footer from './Footer'
import ReferYesHeader from './ReferYesHeader'
import MyRoutes from './Routes.jsx'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'





const mapStateToProps = state => {
  return {
    auth: state.auth,
    error: state.auth.error,
    isLoading: state.auth.isLoading,
    status: state.auth.status,
    selectedRole: state.auth.selectedRole,
    selectedUser: state.auth.selectedUser,
    response: state.auth.response,
    isError: state.auth.isError
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch)
  };
};

class ReferYes extends React.Component {
 
  static defaultProps = {
    isLoading: false,
    status: "",
    selectedRole: {
      key: 0,
      value: "Select Role"
    },
    selectedUser: ""
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  renderCurrentAction = () => {
    return (
     <div>
         <div className="preloader">
          <div className="spinner"></div>
        </div>
        <ReferYesHeader/>  
        <MyRoutes/>
        <Footer/>

     </div>
       
       
     
      
    )

  };

  render() {
    return this.renderCurrentAction();
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReferYes);
