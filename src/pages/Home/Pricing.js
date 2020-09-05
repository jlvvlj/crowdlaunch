// React Basic and Bootstrap
import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';

class Pricing extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <React.Fragment>
                 <section className="section">
            <Container>
                <Row className="mt-lg-4 align-items-center">
                    <Col lg={5} md={12} className="text-center text-lg-left">
                        <div className="section-title mb-4 mb-lg-0 pb-2 pb-lg-0">
                            <h4 className="title mb-4">Our Comfortable Rates</h4>
                            <p className="text-muted para-desc mx-auto mb-0">Start working with <span className="text-primary font-weight-bold">Landrick</span> that can provide everything you need to generate awareness, drive traffic, connect.</p>
                            <a href="https://1.envato.market/landrickreactjs" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">Buy Now <Badge color="danger" pill className="ml-2">v2.2</Badge></a>
                        </div>
                    </Col>

                    <Col lg={7} md={12}>
                        <Row className="align-items-center ml-lg-5">
                            <Col md={6} xs={12} className="mt-4 pt-4 pl-md-0 pr-md-0">
                                <Card className="pricing-rates starter-plan text-center shadow rounded border-0">
                                    <CardBody className="py-5">
                                        <h2 className="title text-uppercase text-primary mb-4">Starter</h2>
                                        <div className="d-flex justify-content-center mb-4">
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">39</span>
                                            <span className="h4 align-self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="feature list-unstyled pl-0">
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Full Access</li>
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Source Files</li>
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Free Appointments</li>
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Enhanced Security</li>
                                        </ul>
                                        <Link to="#" className="btn btn-primary mt-4">Get Started</Link>
                                    </CardBody>
                                </Card>
                            </Col>

                            <Col md={6} xs={12} className=" mt-4 pt-2 pt-md-4 pl-md-0 pr-md-0">
                                <Card className="pricing-rates bg-light text-center shadow rounded border-0">
                                    <CardBody className="py-5">
                                        <h2 className="title text-uppercase text-primary mb-4">Professional</h2>
                                        <div className="d-flex justify-content-center mb-4">
                                            <span className="h4 mb-0 mt-2">$</span>
                                            <span className="price h1 mb-0">59</span>
                                            <span className="h4 align-self-end mb-1">/mo</span>
                                        </div>

                                        <ul className="feature list-unstyled pl-0">
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Full Access</li>
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Source Files</li>
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Free Appointments</li>
                                            <li className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>Enhanced Security</li>
                                        </ul>
                                        <Link to="#" className="btn btn-primary mt-4">Try it now</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}
export default Pricing;