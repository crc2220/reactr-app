import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Access.css';

function Access(props) {

    return (
        <Container fluid={true} className="App-container">
            <Row>
                <Col sm="12" md="6">
                    <br></br>
                    <h2>React'r Boilerplate</h2>
                    <br></br>
                    {props.children}
                </Col>

                <Col sm="12" md="6" className="Placeholder-img">
                    <img alt="App Graphic" />
                </Col>
            </Row>
        </Container>

    );

}

export default Access;