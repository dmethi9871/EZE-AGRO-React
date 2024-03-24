import React from 'react'

function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container">
          <div className="agile-footer-grids">
            <div className="row">
              {/* Problem Statement */}
              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Problem Statement</h3>
                <p>
                  Traditional agriculture practices lack real-time monitoring and
                  efficient operation on fields. This leads to inefficiencies and low
                  production levels.
                </p>
              </div>

              {/* Team Members */}
              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Team Members</h3>
                <ul>
                  <li>Prashant Kumar Singh</li>
                  <li>Amiya Krishna Gupta</li>
                  <li>Deepanshu Methi</li>
                  <li>Pranav Chaturvedi</li>
                  {/* <li>Avadhesh Chandra Tewari</li>
            <li>Aditi Gupta</li> */}
                </ul>
              </div>

              {/* Navigation Links */}
              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Navigation</h3>
                <ul>
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/typography">DATA</a>
                  </li>
                  <li>
                    <a href="/icons">Icons</a>
                  </li>
                  <li>
                    <a href="/gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="/blog">SCHEME</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </div>

              {/* Newsletter */}
              <div className="col-md-3 w3-agile-footer-grid">
                <h3>Newsletter</h3>
                <form action="#" method="post">
                  <input
                    type="email"
                    id="mc4wp_email"
                    name="EMAIL"
                    placeholder="Enter your email here"
                    required=""
                  />
                  <input type="submit" value="Subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Footer
