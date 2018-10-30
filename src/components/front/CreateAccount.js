import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import Access from './layouts/Access';
import './CreateAccount.css';

function CreateAccount(props) {

    return (
        <Access>
            <div className="Access">
                <div className="Access-header">
                    <Row>
                        <Col md="6">
                            <h4>
                                Create Account
                            </h4>
                        </Col>
                        <Col md="6">
                            <Link className="float-right" to="/log-in">Log In</Link>
                        </Col>
                    </Row>

                </div>
                <div className="Create-account-form">
                    <Form>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="with a placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="password placeholder" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="confirm-password">Confirm Password</Label>
                            <Input type="password" name="confirm-password" id="confirm-password" placeholder="password placeholder" />
                        </FormGroup>

                        <Button>Create Account</Button>
                    </Form>
                </div>
                <br></br>
                <div className="Access-header">
                    <Row>
                        <Col md="12">
                            <h4>
                                Or:
                            </h4>
                        </Col>
                    </Row>

                </div>
                <br></br>
                <div className="Social-form">
                    <Button id="facebook" color="primary" block>Sign Up with Facebook</Button>
                    <Button id="google" color="secondary" block>Sign Up with Google</Button>
                    <Button id="twitter" color="success" block>Sign Up with Twitter</Button>
                </div>
            </div>
        </Access>
    );

}

export default CreateAccount;