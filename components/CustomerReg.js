import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import LoginImage from '../images/LoginGroup.png';


function CustomerReg() {
    return (
        <>
            <div>
                <div className="login-img-sec">
                    <Image className="login-image" src={LoginImage} alt="LoginImage" />
                </div>
                <h1 className="headingReg">Registration</h1>
            </div>
            <p className="text2">Personal Information</p>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="First Name" />
                <Form.Control className="text-box form-text" type="text" placeholder="Last Name" />
                <Form.Control className="text-box form-text" type="text" placeholder="Contact Number" />
            </Form>
            <p className="text2">Address</p>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="Street" />
                <Form.Control className="text-box form-text" type="text" placeholder="City" />
                <Form.Control className="text-box form-text" type="text" placeholder="District" />
            </Form>
            <div className="d-grid gap-2">

                <Button className="btn4" variant="primary" size="lg" href="/customer-registration2" >
                    NEXT
                </Button>
            </div>
        </>
    )
}

export default CustomerReg;