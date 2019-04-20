import React, { Component } from 'react';
import './App.css';

 
export class SplashPage extends Component {
    onSignIn(){
        console.log('hi')
        return true;
    }

    render() {
        return (
            <div className="wrapper">
                <div className="top-menu">
                    <div className="g-signin2" onClick={this.onSignIn}></div>
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