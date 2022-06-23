import React from "react";
import { Image } from "react-bootstrap";
import WInput from "./common/WInput";
import { Formik, Form } from "formik";
import WButton from "./common/WButton";

function CustomerReg() {
    return (
        <>
            <div className="yellow-bg d-flex flex-column align-items-center">
                <div className="login-img-sec">
                    <Image className="login-image" src='/images/LoginGroup.png' alt="LoginImage" />
                </div>
                <h1 className="headingReg">Registration</h1>
       
            <Formik>
                <Form className="login-form d-flex flex-column align-items-center">
                    <p className="text2">Personal Information</p>
                    <WInput placeholder="First Name" name="fname" />
                    <WInput placeholder="Last Name" name="lname" />
                    <WInput placeholder="Contact Number" name="contact" />

                    <p className="text2">Address</p>
                    <WInput placeholder="Street" name="street" />
                    <WInput placeholder="City" name="city" />
                    <WInput placeholder="District" name="district" />

                    <div className="d-grid gap-2">
                <WButton text="Next" onClick={() => { }} />
                    </div>
                </Form>
            </Formik>
            </div>
        </>
    )
}
export default CustomerReg;