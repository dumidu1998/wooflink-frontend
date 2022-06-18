import React from "react";
import { Form, Container, Navbar } from "react-bootstrap";
import WInput from "./common/WInput";

function HomePage() {
    return (
        <>
            <Container className="navbar">
                <Navbar expand="lg" variant="light" bg="light">
                    <Container>
                        <Navbar.Brand href="#">60,000</Navbar.Brand>
                    </Container>
                </Navbar>
            </Container>
            <h1 className="heading">Woof-Link</h1>
            <h2 className="heading2">grooming. boarding. clinic</h2>
            <h3 className="text6">I&apos;m looking around</h3>
            <Form className="login-form">
                <WInput placeholder="Center Location" />
                <Form.Control className="text-box form-text" type="text" placeholder="Center Location" />
            </Form>
        </>
    )
}

export default HomePage;