import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input, FormText } from 'reactstrap';
import Access from './layouts/Access';
import './ForgotPassword.css';


function ForgotPassword(props) {

    return (
        <Access>
            <div className="Access">
                <div className="Access-header">
                    <Row>
                        <Col md="6">
                            <h4>
                                Forgot Password
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
                            <Label for="exampleEmail">Enter Email address</Label>
                            <Input type="email" name="email" id="exampleEmail" placeholder="e@mail.com" />
                            <FormText color="muted">
                                We'll send you a link to reset your password
                            </FormText>
                        </FormGroup>


                        <Button>Reset Password</Button>
                    </Form>
                </div>

            </div>
        </Access>

    );

}

export default ForgotPassword;