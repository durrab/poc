import * as React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

export default class Footer extends React.Component {
  render() {
    return (
      <Container>
        <Row>
        <footer className="footer-area">
       <section><p>Footer Area</p></section>
      </footer>
        </Row>
          
      </Container>
      
    );
  }

  /*
   <div class="footer-widget">
          <div class="container">
            <div class="row">
              <div class="col-xl-2 col-lg-3">
                <div class="single-widget-home mb-5 mb-lg-0">
                  <h3 class="mb-4">Refer Yes</h3>
                  <ul>
                    <li class="mb-2">
                      <a href="#">Home</a>
                    </li>
                    <li class="mb-2">
                      <a href="#">Features</a>
                    </li>
                    <li class="mb-2">
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
        <div class="footer-copyright">
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-6">
                <span>
                  Copyright &copy;
                  <script>
                    document.write(new Date().getFullYear());
                  </script>{" "}
                  ReferYes <i class="fa fa-heart-o" aria-hidden="true" />
                </span>
              </div>
              <div class="col-lg-4 col-md-6">
                <div class="social-icons">
                  <ul>
                    <li>
                      <a href="#">
                        <i class="fa fa-facebook" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-twitter" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-dribbble" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="fa fa-behance" />
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
