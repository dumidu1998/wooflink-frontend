import React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";
import { Formik, Form } from "formik";
import WButton from "./common/WButton";
import WInput from "./common/WInput";
import AdminIcon from "../svg/AdminIcon";
import CenterIcon from "../svg/CenterIcon";

function SellerLoginPage() {
  return (
    <>
      <div className="grey-bg d-flex flex-column align-items-center">
        <div className="login-img-sec">
          <Image className="login-image2" src="/images/imga.png" alt="img" />
        </div>

        <h1 className="heading">Woof-Link</h1>
        <h2 className="heading2">grooming. boarding. clinic</h2>

        <Formik>
          <Form>
            <div className="login-form d-flex flex-column align-items-center">
              <WInput placeholder="Email" type="text" name="selleremail" />

              <WInput
                placeholder="Password"
                type="password"
                name="sellerpass"
              />
            </div>

            <div className="d-flex flex-column align-items-center">
              <dev className="mt-2">
                <p className="forgot-password">
                  {" "}
                  <Link href="#">Forgot Password?</Link>
                </p>
              </dev>
            </div>
            <dev className="login-form d-flex flex-column align-items-center">
              <dev className="mt-1">
                <WButton text="LOGIN AS CENTER" icon={<CenterIcon />}/>
              </dev>
              <dev className="mt-2">
                <WButton text="LOGIN AS MODERATOR"  icon={<AdminIcon />} />
              </dev>
            </dev>

            <h2 className="seller mt-2">
              Want to join as a seller?{" "}
              <Link href="/seller-registration">Register</Link>
            </h2>
          </Form>
        </Formik>
      </div>
    </>
  );
}
export default SellerLoginPage;
