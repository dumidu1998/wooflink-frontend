import React from "react";
import { Image, Form, Row, Col } from "react-bootstrap";
import FacebookIcon from "../svg/FacebookIcon";
import WButton from "./common/WButton";

function Header() {
    return (
        <>
            <div className="cus-log-pg">
                <div className="login-img-sec">
                    <Image className="login-image" src="/images/LoginGroup.png" alt="LoginImage" />
                </div>
                <h1 className="heading">Woof-Link</h1>
                <h2 className="heading2">grooming. boarding. clinic</h2>
                <Form className="login-form">
                    <Form.Control className="text-box form-text" type="text" placeholder="Email" />
                    <Form.Control className="text-box form-text" type="text" placeholder="Password" />
                </Form>
                <p className="forgot-password">Forgot Password</p>
                <div className="d-grid gap-2">

                    <WButton text="Sign Up" />
                </div>
                <h2 className="dnthaccount">Don&apos;t have an account? <a href="/customer-registration">Sign Up</a></h2>
                <Row>
                    <Col><hr /></Col>
                    Or
                    <Col><hr /></Col>
                </Row>

                <div className="d-grid gap-2">
                    <WButton text=" Signup using Google" icon={<FacebookIcon />} />
                    <WButton text="Signup using Intagram" />
                    <WButton text="Signup using Facebook" />
                </div>
                <h2 className="dnthaccount">Are you a provider? <a href="/seller-login">Click here</a></h2>
            </div>
        </>
    )
}

export default Header;