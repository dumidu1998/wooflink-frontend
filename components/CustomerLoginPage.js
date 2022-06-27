import { Formik, Form } from "formik";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import WButton from "./common/WButton";
import WInput from "./common/WInput";

function Header() {
    return (
        <>
            <div className="grey-bg cus-log-pg d-flex flex-column align-items-center">
                <div className="login-img-sec">
                    <Image className="login-image" src="/images/LoginGroup.png" alt="LoginImage" />
                </div>
                <h1 className="heading">Woof-Link</h1>
                <h2 className="heading2">Grooming. Boarding. Clinic</h2>
                <Formik
                    initialValues={{
                        email: "",
                        password: ""
                    }}
                    onSubmit={() => { }}
                >
                    <Form>
                        <div className="login-form d-flex flex-column align-items-center">
                            <WInput
                                placeholder="Email"
                                type="text"
                                name="email"
                            />
                            <WInput placeholder="Password"
                                type="text"
                                name="password" />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <dev className='mt-2'>
                                <p className="forgot-password"> <Link href="#" >Forgot Password?</Link></p>
                            </dev>

                            <dev className='mt-2'>
                                <WButton text="Sign In" />
                            </dev>

                            <dev className='mt-4'>
                                <h2 className="dnthaccount">Don&apos;t have an account? <Link href="/cusregistration">Sign Up</Link></h2>
                            </dev>
                        </div>
                    </Form>
                </Formik>
            </div >
        </>
    )
}

export default Header;

 // initialValues={{ email: 'sss', password: '' }}
                    // validationSchema={Yup.object({
                    //     email: Yup.string()
                    //         .email('Invalid email address')
                    //         .required('Required'),
                    //     password: Yup.string()
                    //         .required('Required')
                    // // })}
                    // onSubmit={(values) => {
                    //     alert(JSON.stringify(values, null, 2));
                    // }}