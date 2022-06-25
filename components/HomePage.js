import React from "react";
import WInput from "./common/WInput";
import { Formik, Form } from "formik";
import { Image } from "react-bootstrap";

function HomePage() {
  return (
    <>
      <div className=".grey-bg d-flex flex-column align-items-center">
        <h1 className="heading10">Woof-Link</h1>
        <h2 className="heading2">grooming. boarding. clinic</h2>
        <Formik>
          <Form>
            <p className="text7">I&apos;m looking around</p>
            <WInput placeholder="Chose Location" name="location" />
            <Image className="sos-image" src="/images/sosimg.png" alt="sos" />
            <hr></hr>
            <h6 className="services1">OUR SERVICES</h6>
            {/* <Image
              className="grooming-img"
              src="/images/groomingimage.png"
              alt="grooming"
            />
            <Image
              className="boarding-img"
              src="/images/boardingimage.png"
              alt="boarding"
            />
            <Image
              className="clinic-img"
              src="/images/clinicimage.png"
              alt="clinic"
            /> */} 
            <input className="groombtn" type="button" value="Grooming"></input>
            <input className="boardingbtn" type="button" value="Boarding"></input>
            <input className="clinicbtn" type="button" value="Clinic"></input>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default HomePage;
