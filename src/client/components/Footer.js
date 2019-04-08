import * as React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Footer extends React.Component {
  render() {
    return (
      <div>
     <div className="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3">
                <div className="single-widget-home mb-5 mb-lg-0">
                  <h3 className="mb-4">Refer Yes</h3>
                  <ul>
                    <li className="mb-2">
                      <a href="#">Home</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Features</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Getting Started</a>
                    </li>
                    <li>
                      <a href="#">Plans & Prices</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <span>
                  Copyright &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  ReferYes <i className="fa fa-heart-o" aria-hidden="true" />
                </span>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="social-icons">
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
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
          
      </div>
      
    );
  }

  /*
   <div classNameName="footer-widget">
          <div className="container">
            <div className="row">
              <div className="col-xl-2 col-lg-3">
                <div className="single-widget-home mb-5 mb-lg-0">
                  <h3 className="mb-4">Refer Yes</h3>
                  <ul>
                    <li className="mb-2">
                      <a href="#">Home</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Features</a>
                    </li>
                    <li className="mb-2">
                      <a href="#">Getting Started</a>
                    </li>
                    <li>
                      <a href="#">Plans & Prices</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-6">
                <span>
                  Copyright &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  ReferYes <i className="fa fa-heart-o" aria-hidden="true" />
                </span>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="social-icons">
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
                        <i className="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa fa-behance" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
  */
}
