import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';

//Import Images
import about from "../../assets/images/book/about.png";
import sign from "../../assets/images/book/sign.png";
import client05 from "../../assets/images/client/05.jpg";
import client01 from "../../assets/images/client/01.jpg";
import facebook from "../../assets/images/social/facebook.jpg";
import instagram from "../../assets/images/social/instagram.jpg";
import twitter from "../../assets/images/social/twitter.jpg";


class AboutBook extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    
    render() {
        return (
            <React.Fragment>
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <div className="mr-lg-5">
                            <img src={about} className="img-fluid" alt="Landrick" />
                        </div>
                    </Col>

                    <Col md={6} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <div className="section-title">
                            <h4 className="title mb-4">About the Book</h4>
                            <p className="text-muted">It is said that song composers of the past used dummy texts as lyrics when writing melodies in order to have a 'ready-made' text to sing with the melody.</p>
                            <p className="text-muted">One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others - which creates a distinct visual impression. Moreover, in Latin only words at the beginning of sentences are capitalized.</p>
                            <img src={sign} className="img-fluid" alt="Landrick" />
                            <div className="media align-items-center mt-4">
                                <img src={client05} className="avatar avatar-md-md rounded-circle shadow-lg" alt="Landrick" />
                                <div className="content ml-3">
                                    <h5 className="mb-0">Cristina Murphy</h5>
                                    <p className="text-muted mb-0">Auther</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-100 mt-60">
                <Row className="justify-content-center">
                    <Col lg={4} md={6}>
                        <Media className="bg-light align-items-center p-3 shadow rounded-pill">
                            <img src={client01} className="avatar avatar-small rounded-circle shadow" alt="Landrick" />
                            <Media body className="ml-3">
                                <p className="mb-0">Composers of the past used dummy texts as lyrics melodies. <span className="text-muted h6">- Calvin Carlo</span></p>
                            </Media>
                        </Media>
                    </Col>
                    
                    <Col lg={4} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                        <Media className="bg-soft-warning align-items-center p-3 shadow rounded-pill">
                            <img src={facebook} className="avatar avatar-small rounded-circle shadow" alt="Landrick" />
                            <Media body className="ml-3">
                                <p className="mb-0">Composers of the past used dummy texts as lyrics melodies. <span className="h6">- Calvin Carlo</span></p>
                            </Media>
                        </Media>
                    </Col>
                    
                    <Col lg={4} md={6} className="mt-4 pt-2 mt-lg-0 pt-lg-0">
                        <Media className="bg-soft-primary align-items-center p-3 shadow rounded-pill">
                            <img src={client05} className="avatar avatar-small rounded-circle shadow" alt="Landrick" />
                            <Media body className="ml-3">
                                <p className="mb-0">Composers of the past used dummy texts as lyrics melodies. <span className="h6">- Calvin Carlo</span></p>
                            </Media>
                        </Media>
                    </Col>
                    
                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <Media className="bg-soft-success align-items-center p-3 shadow rounded-pill">
                            <img src={instagram} className="avatar avatar-small rounded-circle shadow" alt="Landrick" />
                            <Media body className="ml-3">
                                <p className="mb-0">Composers of the past used dummy texts as lyrics melodies. <span className="text-muted h6">- Calvin Carlo</span></p>
                            </Media>
                        </Media>
                    </Col>

                    <Col lg={4} md={6} className="mt-4 pt-2">
                        <Media className="bg-soft-info align-items-center p-3 shadow rounded-pill">
                            <img src={twitter} className="avatar avatar-small rounded-circle shadow" alt="Landrick" />
                            <Media body className="ml-3">
                                <p className="mb-0">Composers of the past used dummy texts as lyrics melodies. <span className="h6">- Calvin Carlo</span></p>
                            </Media>
                        </Media>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default AboutBook;