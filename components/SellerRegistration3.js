
import React from "react";
import { Formik, Form } from "formik";
import { Image } from "react-bootstrap";
import WButton from "./common/WButton";
import WInput from "./common/WInput";


function SellerRegistration3() {
    return (
        <>
        <div className="grey-bg d-flex flex-column align-items-center">
                <div className="login-img-sec">
                    <Image className="login-image" src='/images/LoginGroup.png' alt="LoginImage" />
                </div>
                <h1 className="headingReg">Center Login Details</h1>


            <Formik>
                 <Form className="login-form d-flex flex-column align-items-center">
                 <p className="text2">Login Information</p>
                    <WInput placeholder="Center Email" name="centeremail" />
                    <WInput placeholder="Center Password" name="centerpassword" />
                    <WInput placeholder="Confirm Password" name="centerconfirmpass" />
            </Form>
            </Formik>
            <div className="d-grid gap-2">
            <WButton text="REGISTER" onClick={() => { }} />
            </div>
            </div>
            </>
    )
}

export default SellerRegistration3;