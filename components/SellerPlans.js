import React from "react";
import { Image } from "react-bootstrap";
import WButton from "./common/WButton";

function SellerPlans() {
    return (
        <>
            <div>
                <div className="login-img-sec">
                    <Image className="login-image" src='/images/LoginGroup.png' alt="LoginImage" />
                </div>
                <h1 className="text5">View Payment Plans</h1>
            </div>
            <div className="d-flex ">
                <WButton text="Register" />
            </div>
        </>
    )
}

export default SellerPlans;