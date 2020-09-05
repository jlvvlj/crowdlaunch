import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons
import * as Unicons from '@iconscout/react-unicons';
import FeatherIcon from 'feather-icons-react';

class Features extends Component {
    render() {
        return (
            <React.Fragment>
            <Container>
                <Row>
                    <Col lg={4} md={6} xs={12}>
                        <Card className="features px-md-3 border-0 text-center">
                            <div className="icons rounded h1 text-primary">
                                <i className="uim uim-flip-v"><Unicons.UilFlipV size="39" /></i>
                            </div>

                            <CardBody className="p-0 content mt-3">
                                <h5 className="mt-4"><Link to="#" className="title text-dark">High-End Anaylizing</Link></h5>
                                <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>

                                <Link to="#" className="text-primary">Read More <i><FeatherIcon icon="chevron-right" className="fea icon-sm" /></i></Link>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} xs={12} className="mt-4 mt-sm-0 pt-4 pt-sm-0">
                        <Card className="features px-md-3 border-0 text-center">
                            <div className="icons rounded h1 text-primary">
                                <i className="uim uim-layer-group"><Unicons.UilLayerGroup size="39" /></i>
                            </div>

                            <CardBody className="p-0 content mt-3">
                                <h5 className="mt-4"><Link to="#" className="title text-dark">Excellence Track Record</Link></h5>
                                <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>

                                <Link to="#" className="text-primary">Read More <i><FeatherIcon icon="chevron-right" className="fea icon-sm" /></i></Link>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col lg={4} md={6} xs={12} className="mt-4 mt-lg-0 pt-4 pt-lg-0">
                        <Card className="features px-md-3 border-0 text-center">
                            <div className="icons rounded h1 text-primary">
                                <i className="uim uim-object-group"><Unicons.UilObjectGroup size="39" /></i>
                            </div>

                            <CardBody className="p-0 content mt-3">
                                <h5 className="mt-4"><Link to="#" className="title text-dark">Our Dedicated Support</Link></h5>
                                <p className="text-muted">The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated</p>

                                <Link to="#" className="text-primary">Read More <i><FeatherIcon icon="chevron-right" className="fea icon-sm" /></i></Link>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>  
            </React.Fragment>
        );
    }
}

export default Features;