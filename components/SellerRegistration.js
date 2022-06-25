import { Formik, Form } from "formik";
import React from "react";
import { Image } from "react-bootstrap";
import WButton from "./common/WButton";
import WInput from "./common/WInput";

function SellerRegistration() {
  return (
    <>
      <div className="grey-bg d-flex flex-column align-items-center">
        <div className="login-img-sec">
          <Image
            className="login-image"
            src="/images/LoginGroup.png"
            alt="LoginImage"
          />
        </div>

        <h1 className="text3">Apply for a center</h1>

        <Formik>
          <Form className="login-form d-flex flex-column align-items-center">
            <p className="text2">Center Details</p>

            <WInput placeholder="Center Name" type="text" name="selleremail" />
            <WInput
              placeholder="Center Contact Number"
              type="text"
              name="selleremail"
            />
            <div className="mt-2">
              <p className="text2">Center Location</p>
            </div>

            <WInput placeholder="Center Name" type="text" name="Street" />
            <WInput placeholder="Center Name" type="text" name="City" />
            <WInput placeholder="Center Name" type="text" name="District" />

            <div className="d-grid gap-2">
              <WButton text="NEXT" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default SellerRegistration;
