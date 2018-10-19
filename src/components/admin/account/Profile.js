import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

function Profile(props) {

    return (
        <Row className="Account-widget Account-profile">
            <Col sm="12" md="3">
                <h4>Profile</h4>
            </Col>
            <Col sm="12" md="9">
                <Form>
                    <FormGroup>
                        <Label for="profile-photo">Upload Profile Photo</Label>
                        <Input type="file" name="profile-photo" id="profile-photo" placeholder="Choose file" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="profile-name">Name</Label>
                        <Input type="text" name="profile-name" id="profile-name" placeholder="Enter Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="profile-email-address">Email address</Label>
                        <Input type="text" name="profile-email-address" id="profile-email-address" placeholder="email@address.com" />
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

export default Profile;