import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.css';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Footer from './Footer';
import NavBar from './NavBar';
import HeaderRight from './HeaderRight';
function About() {
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
                                            Signodes{" "}
                                            <span>
                                                <sup>Ezebudies</sup>
                                            </span>
                                        </a>
                                    </h1>
                                </div>
                            </div>
                            <HeaderRight/>
                            <div className="clearfix"> </div>
                        </div>
                    </div>
                    <NavBar/>                </div>
                <div className="a-grid">
                    <div className="w3l-about-heading">
                        <h2>
                            About <span>Us</span>
                        </h2>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7  agileits-a-about-right">
                                <h3>A few words about us</h3>

                                <h7>
                                    <b>Precision Agriculture: </b> EzeAgro's sensor network, powered by IoT, ML, and telemetry, facilitates rapid, data-driven decisions on irrigation and fertilization, enhancing agricultural efficiency.
                                </h7>
                                <h5>
                                    <b>Real-time Precision Farming:</b> Leveraging IoT, ML, and
                                    telemetry, EzeAgro's sensor network empowers farmers with rapid,
                                    data-driven decisions on irrigation and fertilization, enhancing
                                    agricultural efficiency.
                                </h5>
                                <h5>
                                    <b>Comprehensive Agricultural Management: </b>Through IoT, ML, AI,
                                    and cloud-edge computing, EzeAgro offers holistic farm management.
                                    It includes crop health monitoring, livestock tracking, and
                                    real-time data capture, optimizing production.
                                </h5>
                                <h5>
                                    <b>NPK Detection via IoT and Image Processing:</b> Employing IoT
                                    sensors and image analysis enhanced by ML and AI, we aim to develop
                                    a sustainable solution for real-time NPK detection in fields,
                                    optimizing traditional agriculture with computer vision and deep
                                    learning.
                                </h5>
                                <h5>
                                    <b>Data-Driven Decisions: </b> Leveraging the prowess of Power BI
                                    and advanced technologies like ML, AI, and Deep Learning, we aim to
                                    analyze and derive actionable insights from the copious data
                                    generated by farm field.
                                </h5>
                                <h5>
                                    <b>AgriTech Monitoring Platform: </b>This user-friendly web and
                                    mobile app, powered by HTML5, CSS, JavaScript, React, SQL, and
                                    Node.js, offers real-time field data visualization. Integrated with
                                    IoT sensors via RESTful APIs, it ensures accessibility. ML analytics
                                    optimize farming practices, and it supports 32 languages for user
                                    convenience.
                                </h5>
                            </div>

                            <div className="col-md-5 agileits-a-about-left">
                                <img src="./a1.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="jarallax different">
                    <div className="container">
                        <div className="w3-different-heading">
                            <h3>
                                Why we are <span>different</span>
                            </h3>
                            <p />
                        </div>
                        <div className="w3agile-different-info">
                            <p style={{ fontSize: 20, color: "#fff" }}>
                                EzeAgro pioneers precision agriculture with IoT, ML, and real-time
                                data insights. Our sensor network empowers farmers for efficient
                                irrigation and fertilization. Comprehensive farm management optimizes
                                crop health and livestock tracking. We're innovators, holding patents,
                                winning three hackathons, and leading the field with our user-friendly
                                AgriTech platform.
                            </p>
                            <div className="w3agile-button">
                                <a href="/single">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>

               

                <Footer />

            </>

        </div>
    )
}

export default About
