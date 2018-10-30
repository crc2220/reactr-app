import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './Admin.css';

function Admin(props) {

    return (
        <Container fluid={true} className="App-container">
            <Row>
                <Col sm="12" md="4" className="Admin-left">
                    <h2>Future App Nav</h2>

                </Col>
                <Col sm="12" md="8" className="Admin-right">
                    <Row noGutters={true}>
                        <Col md="12" className="Admin-top-nav">
                            <Link className="float-right" to="/admin/account">Account</Link>
                        </Col>
                        <Col md="12" className="Admin-profile">
                            {props.children}
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

    );

}

export default Admin;