import React from "react";
import { Form, Button } from "react-bootstrap";



function CustomerRegPage2() {
    return (
        <>
            <p className="text2">Login Details</p>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="First Name" />
                <Form.Control className="text-box form-text" type="text" placeholder="Last Name" />
                <Form.Control className="text-box form-text" type="text" placeholder="Confirm Password" />
            </Form>
            <div className="d-grid gap-2">

                <Button className="btn1" variant="primary" size="lg">
                    REGISTER
                </Button>

            </div>

        </>
    )
}

export default CustomerRegPage2;