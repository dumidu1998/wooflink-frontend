import React from "react";
import { Image, Form, Button, Row, Col } from "react-bootstrap";
import LoginImage from '../images/LoginGroup.png';

function SellerPlans() {
    return (
        <>
            <div>
                <div className="login-img-sec">
                    <Image className="login-image" src={LoginImage} alt="LoginImage" />
                </div>
                <h1 className="text5">View Payment Plans</h1>
            </div>
            <div className="d-grid gap-2">
                <Button className="btn1" variant="primary" size="lg">
                    Register
                </Button>
            </div>
        </>
    )
}

export default SellerPlans;