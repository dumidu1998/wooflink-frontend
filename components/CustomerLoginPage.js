import React from "react";
import { Image, Form, Row, Col } from "react-bootstrap";
import FacebookIcon from "../svg/FacebookIcon";
import WButton from "./common/WButton";
import WInput from "./common/WInput";

function Header() {
    return (
        <>
            <div className="cus-log-pg">
                <div className="login-img-sec">
                    <Image className="login-image" src="/images/LoginGroup.png" alt="LoginImage" />
                </div>
                <h1 className="heading">Woof-Link</h1>
                <h2 className="heading2">Grooming. Boarding. Clinic</h2>
                <Form className="login-form d-flex flex-column align-items-center">
                    <WInput placeholder="Email" />
                    <WInput placeholder="Password" />
                </Form>
                <div className="d-flex flex-column align-items-center">
                    <p className="forgot-password">Forgot Password</p>
                    <WButton text="Sign In" />
                    <h2 className="dnthaccount">Don&apos;t have an account? <a href="/customer-registration">Sign Up</a></h2>
                </div>
                <Row>
                    <Col><hr /></Col>
                    Or
                    <Col><hr /></Col>
                </Row>

                <div className="d-flex d-grid gap-2 flex-column align-items-center">
                    <WButton text=" SignUp using Google" icon={<FacebookIcon />} />
                    <WButton text="SignUp using Intagram" />
                    <WButton text="SignUp using Facebook" />
                    <h2 className="dnthaccount">Are you a provider? <a href="/seller-login">Click here</a></h2>
                </div>
            </div >
        </>
    )
}

export default Header;