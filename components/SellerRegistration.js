import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import LoginImage from '../images/LoginGroup.png';


function SellerRegistration() {
    return (
        <>
            <div>
                <div className="login-img-sec">
                    <Image className="login-image" src={LoginImage} alt="LoginImage" />
                </div>
                <h1 className="text3">Apply for a center</h1>
            </div>
            <p className="text2">Center Details</p>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="Center Name" />
                <Form.Control className="text-box form-text" type="text" placeholder="Center Contact Number" />
                <Form.Control className="text-box form-text" type="text" placeholder="Center Operator Phone" />
            </Form>
            <p className="text2">Center Location</p>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="Street" />
                <Form.Control className="text-box form-text" type="text" placeholder="City" />
                <Form.Control className="text-box form-text" type="text" placeholder="District" />
            </Form>
            <div className="d-grid gap-2">

                <Button className="btn4" variant="primary" size="lg" href="/seller-registration2" >
                    NEXT
                </Button>
            </div>


        </>
    )
}

export default SellerRegistration;