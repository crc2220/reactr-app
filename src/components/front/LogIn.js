import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Access from './layouts/Access';
import './LogIn.css';

function LogIn(props) {

    return (

        <Access>
            <div className="Login">
                <div className="Login-header">
                    <Row>
                        <Col md="6">
                            <h4>
                                Log In
                            </h4>
                        </Col>
                        <Col md="6">
                            <Link to="/create-account">Create Account</Link>
                        </Col>
                    </Row>

                </div>
                <div className="Login-form">
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Email</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                        </FormGroup>
                        <Row>
                            <Col md="6">
                                <FormGroup check>
                                    <Label check>
                                        <Input type="checkbox" />
                                        Remember Me
                                    </Label>
                                </FormGroup>
                            </Col>
                            <Col md="6">
                                <Link to="/forgot-password">Forgot Password</Link>
                            </Col>
                        </Row>

                        <Button>Log In</Button>
                    </Form>
                </div>
                <div className="Social-form">
                    <Button color="primary" block>Log In with Facebook</Button>
                    <Button color="secondary" block>Log In with Google</Button>
                    <Button color="success" block>Log In with Twitter</Button>
                </div>
            </div>
        </Access>

    );

}

export default LogIn;