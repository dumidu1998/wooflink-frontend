
import React from "react";
import { Formik, Form } from "formik";
import { Image } from "react-bootstrap";
import WButton from "./common/WButton";
import WInput from "./common/WInput";


function CustomerRegPage2() {
    return (
        <>
        <div className="yellow-bg d-flex flex-column align-items-center">
                <div className="login-img-sec">
                    <Image className="login-image" src='/images/LoginGroup.png' alt="LoginImage" />
                </div>
                <h1 className="headingReg">Registration</h1>


            <Formik>
                 <Form className="login-form d-flex flex-column align-items-center">
                 <p className="text2">Login Information</p>
                    <WInput placeholder="Email" name="email" />
                    <WInput placeholder="Password" name="password" />
                    <WInput placeholder="Confirm Password" name="confirmpass" />
            </Form>
            </Formik>
            <div className="d-grid gap-2">
            <WButton text="Register" onClick={() => { }} />
            </div>
            </div>
            </>
    )
}

export default CustomerRegPage2;