import React from 'react';
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

function DeleteAccount(props) {

    return (
        <Row className="Account-widget Account-delete-account">
            <Col sm="12" md="3">
                <h4>Delete Account</h4>
            </Col>
            <Col sm="12" md="9">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Type "DELETE" to delete your account</Label>
                        <Input type="text" name="email" id="exampleEmail" placeholder="Type DELETE" />
                    </FormGroup>
                </Form>
            </Col>
        </Row>
    );

}

export default DeleteAccount;