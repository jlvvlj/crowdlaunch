import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// Import images
import homeShape from '../../assets/images/saas/home-shape.png';
import homeImg from '../../assets/images/saas/home.png';

class Section extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="bg-home d-flex align-items-center" style={{ background: `url(${homeShape})`, backgroundPosition : "center center", height : "auto" }} id="home"> 
                            <Container>
                                <Row className="justify-content-center">
                                    <Col lg="12" className="text-center mt-0 mt-md-5 pt-0 pt-md-5">
                                        <div className="title-heading margin-top-100">
                                            <h1 className="heading mb-3">Launch your product in Japan</h1>
                                            <p className="para-desc mx-auto text-muted">We launch your crowdfunding campaign and distribution in the Japanese Market.</p>
                                            <div className="mt-4 pt-2">
                                                <Link to="#about" className="btn btn-primary">Get in touch<i className="mdi mdi-chevron-right"></i></Link>
                                            </div>
                                        </div>
                                        <div className="home-dashboard">
                                            <img src={homeImg} alt="" className="img-fluid" />
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;