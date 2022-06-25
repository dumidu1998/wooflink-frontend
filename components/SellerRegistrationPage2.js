import { Formik, Form } from "formik";
import React from "react";
import { Image} from "react-bootstrap";
import WButton from "./common/WButton";
import WInput from "./common/WInput";
function Header() {
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
            <WInput
              placeholder="Center Location"
              type="text"
              name="centerlocation"
            />
            <dev className="mt-2">
              <p>SPACE RESERVED FOR GOOGLE MAPS API</p>
            </dev>

            <div className="d-grid gap-4">
              <WButton text="NEXT" />
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}
export default Header;
