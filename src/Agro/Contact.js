import React, { useState } from 'react';
import NavBar from './NavBar';
import HeaderRight from './HeaderRight';
import Footer from './Footer';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.css';
import './style.css';

function Contact() {
  const [formData, setFormData] = useState({
    Name: '',
    Email: '',
    Telephone: '',
    Message: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/api/submitForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };
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
              <HeaderRight />
              <div className="clearfix"> </div>
            </div>
          </div>
          <NavBar />
        </div>

        <div className="about-heading">
          <div className="container">
            <h2>Contact</h2>
          </div>
        </div>

        {/* Contact */}
        <div className="contact">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="agile-contact-form-left">
                  <div className="w3layouts-contact-form-top">
                    <h3>Get in touch</h3>
                    <p>
                      Pellentesque eget mi nec est tincidunt accumsan. Proin
                      fermentum dignissim justo, vel euismod justo sodales vel.
                      In non condimentum mauris. Maecenas condimentum interdum
                      lacus, ac varius nisl dignissim ac. Vestibulum euismod est
                      risus, quis convallis nisi tincidunt eget. Sed ultricies
                      congue lacus at fringilla.
                    </p>
                  </div>
                  <div className="agileits-contact-address">
                    <ul>
                      <li>
                        <i className="fa fa-phone" aria-hidden="true" />{" "}
                        <span>+1 234 567 8901</span>
                      </li>
                      <li>
                        <i className="fa fa-envelope" aria-hidden="true" />{" "}
                        <span>
                          <a href="mailto:example@email.com">mail@example.com</a>
                        </span>
                      </li>
                      <li>
                        <i className="fa fa-map-marker" aria-hidden="true" />{" "}
                        <span>Eiusmod Tempor inclore Place, Kingsport 56777.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="agile-contact-form-right">
                  <div className="contact-form-top">
                    <h3>Send us a message</h3>
                  </div>
                  <div className="agileinfo-contact-form-grid">
                <form method="post" onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="Name"
                    placeholder="Name"
                    required=""
                    value={formData.Name}
                    onChange={handleChange}
                  />
                  <input
                    type="email"
                    name="Email"
                    placeholder="Email"
                    required=""
                    value={formData.Email}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    name="Telephone"
                    placeholder="Telephone"
                    required=""
                    value={formData.Telephone}
                    onChange={handleChange}
                  />
                  <textarea
                    name="Message"
                    placeholder="Message"
                    required=""
                    value={formData.Message}
                    onChange={handleChange}
                  />
                  <button type="submit" className="btn1">
                    Submit
                  </button>
                </form>
              </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="w3agile-map">
          <h3>Find us here</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448312.0970247169!2d76.97708615091521!3d28.616624347904988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc1e055d148a1%3A0x9f5207f7f0bc8f63!2sNoida%20Institute%20of%20Engineering%20and%20Technology%20(NIET%2C%20Greater%20Noida)!5e0!3m2!1sen!2sin!4v1694678737577!5m2!1sen!2sin"
            width={600}
            height={450}
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <Footer />
      </>
    </div>
  );
}

export default Contact;