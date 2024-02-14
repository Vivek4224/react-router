import React from "react";
import "./Login.css";
import fb from "../Img/icon_fb.svg";
import google from "../Img/icon_google.svg";
import apple from "../Img/icon_apple.svg";
import micro from "../Img/icon_microsoft.svg";
import {
    Cog,
    Laptop,
    MonitorDown,
    Newspaper,
    ShoppingCart,
    TicketPercent,
} from "lucide-react";
import { Button, Input } from "reactstrap";
import { NavLink } from "react-router-dom";

export default function Login() {
    return (
        <>
            <div className="login_container">
                <div className="left_container">
                    <h1
                        className="title"
                        style={{ fontWeight: "600", fontSize: "2.3rem" }}
                    >
                        One Account, All ASUS
                    </h1>
                    <h3 className="dis" style={{ fontSize: "1.1rem" }}>
                        Sign in your ASUS account and get everything you need from one
                        portal!
                    </h3>
                    <div className="details">
                        <li>
                            <Laptop style={{ margin: "5px 5px 5px 0", color: "#E50007" }} />
                            Manage the warranties of your ASUS products
                        </li>
                        <li>
                            <Cog style={{ margin: "5px 5px 5px 0", color: "#E50007" }} />
                            Download drivers and software for your products
                        </li>
                        <li>
                            <MonitorDown
                                style={{ margin: "5px 5px 5px 0", color: "#E50007" }}
                            />
                            Get technical support and keep track of your repair status
                        </li>
                        <li>
                            <ShoppingCart
                                style={{ margin: "5px 5px 5px 0", color: "#E50007" }}
                            />
                            Quick checkout and easy order tracking
                        </li>
                        <li>
                            <TicketPercent
                                style={{ margin: "5px 5px 5px 0", color: "#E50007" }}
                            />
                            Get exclusive offers and discounts
                        </li>
                        <li>
                            <Newspaper
                                style={{ margin: "5px 5px 5px 0", color: "#E50007" }}
                            />
                            Stay up to date with the latest news and events
                        </li>
                    </div>
                </div>
                <div className="right_container">
                    <h2
                        className="login"
                        style={{
                            marginTop: "1rem",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Account Login
                    </h2>
                    <form action="#" className="form">
                        <label>Account</label>
                        <Input type="text" />
                        <label>Password</label>
                        <Input type="password" />
                    </form>
                    <div className="check mb-2">
                        <input type="checkbox" /> Remember Me
                    </div>
                    <div className="button">
                        <Button>Sign In</Button>
                    </div>
                    <p>
                        Don't Have ASUS Account?
                        <NavLink
                            to="/register"
                            style={{ color: "red", marginLeft: "0.5rem" }}
                        >
                            Register Now
                        </NavLink>
                    </p>
                    <div className="signIn">
                        <hr />
                        <p>Or Sign In With</p>
                        <hr />
                    </div>
                    <div className="social">
                        <div className="facebook">
                            <img src={fb} alt="" />
                        </div>
                        <div className="google">
                            <img src={google} alt="" />
                        </div>
                        <div className="apple">
                            <img src={apple} alt="" />
                        </div>
                        <div className="micro">
                            <img src={micro} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
