import React from "react";
import { Image, Button } from "react-bootstrap";
import WInput from "./common/WInput";
import { Formik, Form } from "formik";


function CustomerReg() {
    return (
        <>
            <div className="d-flex flex-column align-items-center">
                <div className="login-img-sec">
                    <Image className="login-image" src='/images/LoginGroup.png' alt="LoginImage" />
                </div>
                <h1 className="headingReg">Registration</h1>
            </div>
            <p className="text2">Personal Information</p>
            <Formik>
                <Form className="login-form d-flex flex-column align-items-center">
                    <WInput placeholder="First Name" name="fname" />
                    <WInput placeholder="Last Name" name="lname" />
                    <WInput placeholder="Contact Number" name="contact" />
                </Form>
            </Formik>
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