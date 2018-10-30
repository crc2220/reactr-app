import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

class Profile extends Component {
    state = {
        values: {
            profilePhoto: '',
            profileName: '',
            profileEmailAddress: ''
        },
        formValid: false
    }
    handleUserInput = (e) => {
        const { name, value } = e.target;

        let values = { ...this.state.values, [name]: value };

        this.setState({
            values: values
        }, () => { this.validateField(name, value) });

    }
    validateField(name, value) {

        let formValid = false;
        switch (name) {
            case 'profilePhoto': {
                break;
            }
            case 'profileName': {
                break;
            }
            case 'profileEmailAddress': {
                break;
            }
            default: {
                return;
            }

        }

        this.setState({
            formValid: formValid
        }, this.validateForm);

    }
    validateForm() {

    }
    render() {
        return (
            <Row className="Account-widget Account-profile">
                <Col sm="12" md="3">
                    <h4>Profile</h4>
                    <p>
                        {JSON.stringify(this.state.values, null, 2)}

                    </p>
                </Col>
                <Col sm="12" md="9">
                    <Form>
                        <FormGroup>
                            <Label for="profilePhoto">Upload Profile Photo</Label>
                            <Input
                                onChange={(event) => this.handleUserInput(event)}
                                type="file"
                                name="profilePhoto"
                                id="profilePhoto"
                                placeholder="Choose file" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileName">Name</Label>
                            <Input
                                onChange={(event) => this.handleUserInput(event)}
                                type="text"
                                name="profileName"
                                id="profileName"
                                placeholder="Enter Name" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="profileEmailAddress">Email address</Label>
                            <Input
                                onChange={(event) => this.handleUserInput(event)}
                                type="text"
                                name="profileEmailAddress"
                                id="profileEmailAddress"
                                placeholder="email@address.com" />
                        </FormGroup>
                        <FormGroup>
                            <Link to="/admin/reset-password">Reset Password</Link>
                        </FormGroup>


                        <Button>Save Profile</Button>
                    </Form>
                </Col>
            </Row>
        );
    }

}

export default Profile;