import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import Link from "next/link";
import WButton from "./common/WButton";
import WInput from "./common/WInput";
import { Formik, Form } from "formik";


function SellerLoginPage() {
    return (
        <>
            <div className="cus-log-pg d-flex flex-column align-items-center">
            <div className="login-img-sec">
                    <Image className="login-image" src="/images/imga.png" alt="LoginImage" />
                </div>
                <h1 className="heading">Woof-Link</h1>
                <h2 className="heading2">grooming. boarding. clinic</h2>
            <Formik>
                    <Form>
                        <div className="login-form d-flex flex-column align-items-center">
                                <WInput
                                placeholder="Email"
                                type="text"
                                name="email"
                            />
                            <WInput placeholder="Password"
                                type="text"
                                name="password" />
                        </div>

                        <div className="d-flex d-grid gap-2 flex-column align-items-center">
                            <p className="forgot-password"> <Link href="#" >Forgot Password?</Link></p>
                            <WButton text="LOGIN AS A PROVIDER" />
                        <Row>
                            <Col><hr /></Col>
                            Or
                            <Col><hr /></Col>
                        </Row>
                            <WButton text="LOGIN AS A MODERATOR"/>
                        </div>
                        </Form>
                </Formik>
                <h2 className="seller">Want to join as a seller? <a href="/seller-registration">Register</a></h2>
                <div className="line2"></div> <hr/>
            </div>
        </>
    )
}
export default SellerLoginPage;