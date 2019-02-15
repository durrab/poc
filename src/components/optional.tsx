import * as React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'


export default class Optional extends React.Component {

  render() : JSX.Element | any {
    return (
      <Container>
          <Row>
            <Col>
            <Card>
                <Card.Header>Optional Window</Card.Header>
                <Card.Body>
                  <Card.Title>Optional Windowt</Card.Title>
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
