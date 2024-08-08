import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import './home.css';


const Home = () => (
    <Fragment>
        <Helmet><title>Quiz-ChatGPT - Home</title></Helmet>
        <div id="home">
            <section>
                <div style={{ textAlign: 'center' }}>
                    <span className="mdi mdi-cube-outline cube"></span>
                </div>
                <h1>Quiz for ChatGPT for Beginners</h1>
                <div className="play-button-container">
                    <div>  
                    <Link to="/play/instructions"  className="play-button">Attempt Quiz</Link>
                    </div>
                </div>
                <div className="auth-container">
                    <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
                    <Link to="/register" className="auth-buttons" id="signup-button">Sign Up</Link>
                </div>
            </section>
        </div>
    </Fragment>
);


export default Home;