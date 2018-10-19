import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Access.css';

function Access(props) {

    return (
        <Container fluid={true} className="App-container">
            <Row noGutters={true}>
                <Col sm="12" md="6">
                    <h2>React'r Boilerplate</h2>
                    {props.children}
                </Col>
                <Col sm="12" md="6" className="Placeholder-img">
                    <img />
                </Col>
            </Row>
        </Container>

    );

}

export default Access;