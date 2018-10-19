import React from 'react';
import { Button, Form, Row, Col, FormGroup, Label, Input } from 'reactstrap';

function Payment(props) {

    return (
        <Row className="Account-widget Account-payment">
            <Col sm="12" md="3">
                <h4>Payment</h4>
            </Col>
            <Col sm="12" md="9">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Card Number</Label>
                        <Input type="text" name="email" id="exampleEmail" placeholder="Insert Credit Card Number" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Name</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="Enter Name" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Email address</Label>
                        <Input type="text" name="password" id="examplePassword" placeholder="email@address.com" />
                    </FormGroup>

                    <Button>Save Payment Information</Button>
                </Form>
            </Col>
        </Row>
    );

}

export default Payment;