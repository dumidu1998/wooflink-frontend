import React from "react";
import { Image, Form, Button, Row, Col, InputGroup } from "react-bootstrap";
import LoginImage from '../images/LoginGroup.png';

function SellerRegistration3() {
    return (
        <>
            <div>
                <div className="login-img-sec">
                    <Image className="login-image" src={LoginImage} alt="LoginImage" />
                </div>
                <h1 className="text3">Apply for a center</h1>
            </div>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Form.Control aria-label="Text input with checkbox" />
            </InputGroup>
            <p className="text2">Login Details</p>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="Center Email" />
                <Form.Control className="text-box form-text" type="text" placeholder="Password" />
                <Form.Control className="text-box form-text" type="text" placeholder="Confirm Password" />
            </Form>
            <div className="d-grid gap-2">

                <Button className="btn4" variant="primary" size="lg" href="/seller-plans" >
                    NEXT
                </Button>
            </div>

        </>
    )
}

export default SellerRegistration3;