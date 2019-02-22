import * as React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


export default class User extends React.Component {

  render() : JSX.Element | any {
    return (
      <Container>
          <Row>
            <Col>
            <Card>
                <Card.Header>User Control Panel</Card.Header>
                <Card.Body>
                  <Card.Title>User Component</Card.Title>
                  <Card.Text>
                  This is just for demonstration...
                  </Card.Text>

      </Card.Body>
      </Card>
      </Col>
      </Row>
    </Container>)
  }

}
