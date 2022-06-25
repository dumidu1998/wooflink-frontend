import React from "react";
import { Image, Form, Button } from "react-bootstrap";
import LoginImage from '../images/LoginGroup.png';
function Header() {
    return (
        <>
            <div>
                <div className="login-img-sec">
                    <Image className="login-image" src={LoginImage} alt="LoginImage" />
                </div>
                <h1 className="text3">Apply for a center</h1>
            </div>
            <Form className="login-form">
                <Form.Control className="text-box form-text" type="text" placeholder="Center Location" />

            </Form>
            <div className="d-grid gap-2">

                <Button className="btn4" variant="primary" size="lg" href="/seller-registration3" >
                    NEXT
                </Button>
            </div>
        </>
    )
}
export default Header;