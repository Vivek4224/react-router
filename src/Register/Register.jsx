import React from 'react';
import "./Register.css";
import fb from "../Img/icon_fb.svg";
import google from "../Img/icon_google.svg";
import apple from "../Img/icon_apple.svg";
import microsoft from "../Img/icon_microsoft.svg";
import { Button, Input } from 'reactstrap';

export default function Register() {
    return (
        <>
            <div className="sign_container">
                <h1 className="title" style={{ textAlign: "center", margin: "1rem", fontSize: "2rem", fontWeight: "700" }}>Sign Up Now</h1>
                <p className="dis">Please note that ASUS account is same as ROG account. If you have either account, you can log in directly without registering a new one.</p>
                <div className="buttons d-flex">
                    <a href="#">Sign up with <img src={fb} alt="" /></a>
                    <a href="#">Sign up with <img src={google} alt="" /></a>
                    <a href="#">Sign up with <img src={apple} alt="" /></a>
                    <a href="#">Sign up with <img src={microsoft} alt="" /></a>
                </div>
                <div className="sign">
                    <hr style={{ margin: "12px" }} />
                    <p>Or Sign In With</p>
                    <hr style={{ margin: "12px" }} />
                </div>
                <div className="form">
                    <label style={{ fontWeight: "bold" }}> Account</label>
                    <Input type='text' />
                    <label style={{ fontWeight: "bold" }}>Password</label>
                    <Input type='password' />
                    <label style={{ fontWeight: "bold" }}>Re-enter Password</label>
                    <Input type='password' />
                    <label style={{ fontWeight: "bold" }}>Date of Birth</label>
                    <Input type='date' />
                </div>
                <div className="privacy">
                    <Input type="checkbox" style={{ border: "1px solid black" }} /> I agree to all the following items and Privacy Policy. <br />
                    <Input type="checkbox" style={{ border: "1px solid black" }} />  I acknowledge and agree to ASUS"Privacy Policy" <br />
                    <Input type="checkbox" style={{ border: "1px solid black" }} />  I acknowledge and agree to ASUS Cloud"Privacy Policy" <br />
                    <Input type="checkbox" style={{ border: "1px solid black" }} /> Keep me up to date by eDMs and notice with ASUS news, latest product and service information. <br />
                    <Input type="checkbox" style={{ border: "1px solid black" }} /> Keep me up to date by eDMs with ASUS Cloud news, latest product and service information. <br />
                </div>
                <hr style={{ width: "80%", margin: "auto", marginBottom: "1rem" }} />
                <p style={{ width: "80%", margin: "auto", marginBottom: "2rem" }}>
                    * Please rest assured the information collected will only be used for the purpose of registering and managing your accounts.
                    Once your member is registered successfully, we will also assist you in registering as an ASUS Cloud Member owned by ASUS Cloud Corporation with the same account and password.
                </p>
                <div className="button1" style={{ textAlign: "center", marginBottom: "2rem" }}>
                    <Button style={{ width: "40%", backgroundColor: "#E50007", border: "none" }} >Sign Up</Button>
                </div>
            </div>
        </>
    )
}