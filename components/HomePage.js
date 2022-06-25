import React from "react";
import { Image} from "react-bootstrap";
import WInput from "./common/WInput";
import { Formik, Form } from "formik";

function HomePage() {
    return (
        <>
        <div className="d-flex flex-column align-items-center">
            <h1 className="heading">Woof-Link</h1>
            <h2 className="heading2">Grooming. Boarding. Clinic</h2>
            
            <Formik>
                <Form className="login-form d-flex flex-column align-items-center">

                    <h3 className="text6">I&apos;m looking around</h3>

                    <WInput placeholder="Center Location" name="location" />
                </Form>
            </Formik>
            </div>
        </>
        
    )
}

export default HomePage;