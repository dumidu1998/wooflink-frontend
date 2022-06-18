import React from "react";
import { Form, Button } from "react-bootstrap";
import Link from "next/link";

function SellerLoginPage() {
    return (
        <>
            <div >
                <Form className="login-form">
                    <Form.Control className="text-box form-text" type="text" placeholder="Email" />
                    <Form.Control className="text-box form-text" type="text" placeholder="Password" />
                </Form>

                <p className="forgot-password">Forgot Password?</p>
                <div className="d-grid gap-2">

                    <Button className="btn3" variant="primary" size="lg">
                        LOGIN AS A PROVIDER
                    </Button>
                    <Button className="btn3" variant="primary" size="lg">
                        LOGIN AS A MODERATOR
                    </Button>
                </div>
                <h2 className="seller">Want to join as a seller? <Link href="/seller-registration">Register</Link></h2>
                <div><hr></hr></div>
                <p className="text">Once you are done with the registration, <br></br>Contact one of our agents from below.</p>
                <p className="contact">011-2883295</p>
            </div>
        </>
    )
}

export default SellerLoginPage;