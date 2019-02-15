import * as React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import * as authActions from '../actions/auth/auth-actions'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import InputGroup from 'react-bootstrap/InputGroup'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'
import FormControl from 'react-bootstrap/FormControl'
import Form from 'react-bootstrap/Form'

import User from './user'
import Admin from './admin'
import Optional from './optional'

export interface AppProps {
  isError: boolean,
  dispatch: any,
  actions: any,
  auth: any,
  status:any,
  selectedRole:any,
  selectedUser:string,
  response: any,
}


const mapStateToProps = (state) => {
  return {
    auth:state.auth,
    error: state.auth.error,
    isLoading: state.auth.isLoading,
    status: state.auth.status,
    selectedRole : state.auth.selectedRole,
    selectedUser: state.auth.selectedUser,
    response: state.auth.response,
  }
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    actions: bindActionCreators<any, {}>(authActions,dispatch)
  };
}




class App extends React.Component<any, AppProps> {

  roles = ():any => {
    return [{key:1, value:'Guest'},{key:2, value:'Admin'},{key:3, value:'User'},{key:4, value:'Unknown'}];
  }
  static defaultProps = {
    isLoading: false,
    status: '',
    selectedRole: {
      key: 0,
      value: 'Select Role'
    },
    selectedUser : ''
  }

  constructor(props:AppProps){
      super(props);
  }

  componentDidMount() {

  }

  renderCurrentAction = ():any => {
    const {response, isLoading, isError, status } = this.props;

  return(  <Container>
      <Row>
        <Col>
          {isLoading && <Alert key={1} variant={'primary'}>{status}</Alert>}
          {isError && <Alert key={1} variant={'danger'}>{status}</Alert>}
        </Col>
      </Row>

      <Row>
        <Col>
        <Card>
            <Card.Header>Authentication Component</Card.Header>
            <Card.Body>
              <Card.Title>Please enter your username and select role</Card.Title>
              <Card.Text>
                Walmart POC
              </Card.Text>
      <Form>

      <Form.Group>

        <InputGroup>
          <FormControl
            placeholder="Enter username"
            aria-label="Enter username"
            aria-describedby="basic-addon2" onChange={this.onChangeUserText} value = {this.props.selectedUser}
          />

          <DropdownButton
            as={InputGroup.Append}
            variant="outline-secondary"
            title={this.props.selectedRole.value}
            id="rolesInput"
          >
          {this.roles().map(role =>   <Dropdown.Item onSelect={this.handleRoleSelection} eventKey={role.key} key={role.key} value={role} >{role.value}</Dropdown.Item>)}
          </DropdownButton>
        </InputGroup>
      </Form.Group>

      <Button variant="primary" onClick={this.handleClick}>
        Submit
      </Button>
    </Form>
  </Card.Body>
  </Card>
  </Col>
  </Row>

  <Row>
    {response.showUser && <User/>}
  </Row>

  <Row>
    {response.showAdmin && <Admin/>}
  </Row>

  <Row>
    {response.showOptional && <Optional/>}
  </Row>
</Container>)
 }

  render() : JSX.Element | any {
    return this.renderCurrentAction();
  }

  handleClick = (event:any):void => {
    console.log(event.currentTarget.value);
    console.log("User Name: " + this.props.selectedUser);
    const {selectedUser, selectedRole} = this.props;
    this.props.actions.showAuthRequestIndicator("Loading App");

    let data = {
      user: selectedUser,
      access_request: true,
      role: selectedRole
    }
    this.props.actions.createAuthRequest(data);

  }

  handleRoleSelection = (key:any):void => {

    let selectedRole = this.roles().find(role =>  {
      console.log('role is here' + role);
      if(role.key === parseInt(key))
        return role;
      return undefined;
    });
    this.props.actions.selectRole(selectedRole);
  }

  onChangeUserText = (event:any):void => {
    if(event.currentTarget.value !== undefined)
    this.props.actions.selectUser(event.currentTarget.value);
  }



}

export default connect(mapStateToProps, mapDispatchToProps)(App)
