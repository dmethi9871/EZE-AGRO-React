import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.css';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
function Gallery() {
    return (
        <div>
            <>
                <meta httpEquiv="content-type" content="text/html;charset=UTF-8" />
                <title>
                    Harvest Life an agriculture Category Bootstrap responsive Website Template |
                    About{" "}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta charSet="utf-8" />
                <meta
                    name="keywords"
                    content="Harvest Life Responsive web template, Bootstrap Web Templates, Flat Web Templates, Android Compatible web template, 
Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyEricsson, Motorola web design"
                />


                <link
                    href="http://fonts.googleapis.com/css?family=Playball&subset=latin-ext"
                    rel="stylesheet"
                />
                
                <link
                    href="http://fonts.googleapis.com/css?family=Raleway:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i"
                    rel="stylesheet"
                />
                <link
                    href="http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700italic,700,400italic,300italic,300"
                    rel="stylesheet"
                    type="text/css"
                />

                <style
                    dangerouslySetInnerHTML={{
                        __html:
                            "\n.agileinfo-team-grid img {\n    width: 100%;\n    height: 400px; /* Adjust the height as needed */\n    object-fit: fill;\n}\n/* Style for the team member container */\n.agileinfo-team-grid {\n    float: left;\n    width: 16.666%; /* 100% divided by 6 members */\n    padding: 10px;\n    text-align: center;\n    box-sizing: border-box;}\n\n/* Adjust the width based on how many members you want per row */\n@media (max-width: 768px) {\n    .agileinfo-team-grid {\n        width: 33.33%; /* Show 3 members per row on smaller screens */\n    }\n}\n\n/* Add additional styles as needed for spacing and responsiveness */\n\n"
                    }}
                />


                <div className="banner about-banner">
                    <div className="header">
                        <div className="container">
                            <div className="header-left">
                                <div className="w3layouts-logo">
                                    <h1>
                                        <a href="/">
                                            EzeAgro{" "}
                                            <span>
                                                <sup>Ezebudies</sup>
                                            </span>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                            <div className="header-right">
                                <div className="agileinfo-social-grids">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-facebook" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-rss" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="fa fa-vk" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <NavBar />
                </div>
                
                <div className="about-heading">
                    <div className="container">
                        <h2>Gallery</h2>
                    </div>
                </div>
                
                <div className="gallery">
                    <div className="container">
                        <div className="gallery-grids">
                            <div className="col-md-4 gallery-grid">
                                <div className="grid">
                                    <figure className="effect-roxy">
                                        <a
                                            className="example-image-link"
                                            href="./g6.jpg"
                                            data-lightbox="example-set"
                                            data-title=""
                                        >
                                            <img src="./g6.jpg" alt="" />
                                            <figcaption></figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-4 gallery-grid">
                                <div className="grid">
                                    <figure className="effect-roxy">
                                        <a
                                            className="example-image-link"
                                            href="./g1.jpg"
                                            data-lightbox="example-set"
                                            data-title=""
                                        >
                                            <img src="./g1.jpg" alt="" />
                                            <figcaption></figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-4 gallery-grid">
                                <div className="grid">
                                    <figure className="effect-roxy">
                                        <a
                                            className="example-image-link"
                                            href="./g2.jpg"
                                            data-lightbox="example-set"
                                            data-title=""
                                        >
                                            <img src="./g2.jpg" alt="" />
                                            <figcaption></figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            {/*-728x90-*/}
                            <div className="col-md-4 gallery-grid">
                                <div className="grid">
                                    <figure className="effect-roxy">
                                        <a
                                            className="example-image-link"
                                            href="./g3.jpg"
                                            data-lightbox="example-set"
                                            data-title=""
                                        >
                                            <img src="./g3.jpg" alt="" />
                                            <figcaption></figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-4 gallery-grid">
                                <div className="grid">
                                    <figure className="effect-roxy">
                                        <a
                                            className="example-image-link"
                                            href="./g4.jpg"
                                            data-lightbox="example-set"
                                            data-title=""
                                        >
                                            <img src="./g4.jpg" alt="" />
                                            <figcaption></figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="col-md-4 gallery-grid">
                                <div className="grid">
                                    <figure className="effect-roxy">
                                        <a
                                            className="example-image-link"
                                            href="./g5.jpg"
                                            data-lightbox="example-set"
                                            data-title=""
                                        >
                                            <img src="./g5.jpg" alt="" />
                                            <figcaption></figcaption>
                                        </a>
                                    </figure>
                                </div>
                            </div>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                </div>
                
                <Footer/>
                </>

        </div>
    )
}

export default Gallery
