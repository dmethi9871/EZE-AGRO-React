import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import 'lightbox2/dist/css/lightbox.css';
import './style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Slider from 'react-slick';
import Footer from './Footer';
import NavBar from './NavBar';
import HeaderRight from './HeaderRight';

function Home() {
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <>
      <div className="banner-top">
        <div className="slider">
          <Slider {...sliderSettings}>
            <div className="w3layouts-banner-top">
              <div className="container">
                <div className="agileits-banner-info">
                  <h3>
                    Ezebuddies Presents: <span>Ezeagro</span>
                  </h3>
                  <p>
                    Ezeagro uses IoT technology to monitor and manage farming
                    activities in real-time, giving farmers critical information
                    on soil conditions and facilitating informed
                    decision-making.
                  </p>
                  <div className="w3-button">
                    <Link to="/about">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3layouts-banner-top w3layouts-banner-top1">
              <div className="container">
                <div className="agileits-banner-info">
                  <h3>
                    EzeAgro Presents: <span>Ezeagro</span>
                  </h3>
                  <p>
                    The use of IoT enables remote administration of agricultural
                    equipment, addressing issues like low crop yields and crop
                    diseases, and optimizing resource usage.
                  </p>
                  <div className="w3-button">
                    <Link to="/about">More</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="w3layouts-banner-top w3layouts-banner-top2">
              <div className="container">
                <div className="agileits-banner-info">
                  <h3>
                    EzeAgro Presents: <span>Ezeagro</span>
                  </h3>
                  <p>
                    The use of IoT enables remote administration of agricultural
                    equipment, addressing issues like low crop yields and crop
                    diseases, and optimizing resource usage.
                  </p>
                  <div className="w3-button">
                    <Link to="/about">More</Link>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
          <div className="clearfix"> </div>
        </div>
      </div>

      <div className="banner">
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

      </div >

      <div className="welcome">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-md-5 w3l-welcome-left">
              <h2>
                Welcome <span>to Ezeagro</span>
              </h2>
              <p>
                Ezeagro uses IoT technology to monitor and manage farming activities
                in real-time, giving farmers critical information on soil conditions
                and facilitating informed decision-making.
              </p>
              <div className="w3ls-button">
                <a href="/single">More</a>
              </div>
            </div>
            <div className="col-md-7 w3l-welcome-right">
              <div className="w3l-welcome-right-grids">
                <div className="col-sm-5 w3l-welcome-right-img">
                  <img src="/4.jpg" alt="" className="img-responsive" style={{ marginBottom: '-30px', marginRight: '-20px' }} />
                </div>
                <div className="col-sm-7 w3l-welcome-right-img1" style={{ position: 'relative', zIndex: '1' }}>
                  <img src="/5.jpg" alt="" className="img-responsive" style={{ marginLeft: '-20px', marginTop: '-30px' }} />
                </div>
                <div className="clearfix"></div>
              </div>
            </div>



          </div>
        </div>
      </div>


      <div className="services">
  <div className="container">
    <div className="agileits-services-grids">
      <div className="col-lg-4 col-md-6 agileinfo-services-left">
        <h3>
          Benefit of <span> IoT in Smart Farming</span>
        </h3>
      </div>
      <div className="col-lg-8 col-md-6 agileinfo-services-right">
        <div className="row">

          <div className="col-lg-6 col-sm-6">
            <div className="w3-agileits-services-grid text-center">
              <i className="fa fa-cogs" aria-hidden="true" />
              <h4>Comprehensive Data Collection:</h4>
              <p>
                EzeAgro collects real-time data from IoT sensors monitoring soil
                conditions, weather, and livestock health, enhancing farm
                management.
              </p>
            </div>
          </div>

          <div className="col-lg-6 col-sm-6">
            <div className="w3-agileits-services-grid text-center">
              <i className="fa fa-comments" aria-hidden="true" />
              <h4>Cloud-Powered Insights:</h4>
              <p>
                Sensor data is wirelessly transmitted to the cloud for processing,
                where machine learning algorithms analyze it to provide actionable
                insights for optimized practices.
              </p>
            </div>
          </div>

          {/* Third Content */}
          <div className="col-lg-6 col-sm-6">
            <div className="w3-agileits-services-grid text-center">
              <i className="fa fa-plane" aria-hidden="true" />
              <h4>Cutting-Edge Agriculture:</h4>
              <p>
                The platform continually evolves with IoT advancements, supporting
                modern farming methods like hydroponics and benefiting
                manufacturers, exporters, and distributors with data-driven
                precision agriculture insights.
              </p>
            </div>
          </div>

          {/* Fourth Content */}
          <div className="col-lg-6 col-sm-6">
            <div className="w3-agileits-services-grid text-center">
              <i className="fa fa-heart" aria-hidden="true" />
              <h4>User-Friendly Access:</h4>
              <p>
                EzeAgro offers an intuitive web and mobile app interface, making
                it easy for farmers and agribusiness stakeholders to access and
                utilize data-driven insights.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div className="clearfix"> </div>
  </div>
  <Footer />
</div>

    </>

  )
}

export default Home
