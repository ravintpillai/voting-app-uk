import React, { Component } from 'react';
import { MDBBtn } from "mdbreact";
import './App.css';

 
export class SplashPage extends Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};
    }

    onSignIn(){
        console.log('hi')
        return true;
    }

    onClick(){
        console.log("Oh Crap!")
    }
    render() {
        return (
            <div className="wrapper">
                <div class="top-menu">
                    <div className="g-signin2" data-onsuccess={this.onSignIn} data-onclick={this.onClick}></div>
                    <MDBBtn className="button" onclick={this.onClick}></MDBBtn>
                </div>
                <div className="hero-image">
                        <div className="hero-text">
                        <h1>How Britain Thinks</h1>
                        <p>Up to date information on what British people care about</p>
                    </div>
                </div>
                <br />
                <div className="exposition">
                    <p><img src={require("./images/propogate-security.svg")} />Securely express your opinion on the issues that matter to you</p>
                    <p><img src={require("./images/protect-production.svg")} />Get insights into which areas and groups of Britons think what</p>
                    <p><img src={require("./images/track-versions.svg")} />Get organized! Connect with others trying to make the world better!</p>
                </div>
            </div>
        );
    }

};