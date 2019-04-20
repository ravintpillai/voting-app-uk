import React, { Component } from 'react';
import './App.css';
 
export class SplashPage extends Component {
  render () {

    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
      }

    return (
        <div className="wrapper">
        <div class="top-menu">
            <div className="g-signin2" data-onsuccess="onSignIn"></div>
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