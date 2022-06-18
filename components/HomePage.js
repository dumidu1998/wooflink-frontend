import React from "react";
import { Container, Navbar } from "react-bootstrap";
import WInput from "./common/WInput";
import { Formik, Form } from "formik";

function HomePage() {
    return (
        <>
            <Container className="navbar">
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="##">60,000</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
            <h1 className="heading">Woof-Link</h1>
            <h2 className="heading2">Grooming. Boarding. Clinic</h2>
            <h3 className="text6">I&apos;m looking around</h3>
            <Formik>
                <Form className="login-form">
                    <WInput placeholder="Center Location" />
                </Form>
            </Formik>
        </>
    )
}

export default HomePage;