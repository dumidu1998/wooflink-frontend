import { Formik, Form } from "formik";
import Link from "next/link";
import React from "react";
import { Image, Row, Col } from "react-bootstrap";
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
                <Formik
                    onSubmit={() => { }}
                >
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
                        <div className="d-flex flex-column align-items-center">
                            <p className="forgot-password"> <Link href="#" >Forgot Password?</Link></p>
                            <WButton text="Sign In" />
                            <h2 className="dnthaccount">Don&apos;t have an account? <Link href="/cusregistration">Sign Up</Link></h2>
                        </div>
                    </Form>
                </Formik>
                <Row>
                    <Col><hr /></Col>
                    Or
                    <Col><hr /></Col>
                </Row>

                <div className="d-flex d-grid gap-2 flex-column align-items-center">
                    <WButton text=" SignUp using Google" icon={<FacebookIcon />} />
                    <WButton text="SignUp using Intagram" />
                    <WButton text="SignUp using Facebook" />
                    <h2 className="dnthaccount">Are you a provider? <Link href="/sellerlogin">Click here</Link></h2>
                </div>
            </div >
        </>
    )
}

export default Header;

 // initialValues={{ email: 'sss', password: '' }}
                    // validationSchema={Yup.object({
                    //     email: Yup.string()
                    //         .email('Invalid email address')
                    //         .required('Required'),
                    //     password: Yup.string()
                    //         .required('Required')
                    // // })}
                    // onSubmit={(values) => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }}