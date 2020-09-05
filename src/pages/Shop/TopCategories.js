import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

class TopCategories extends Component {
    render() {
        return (
           <React.Fragment>
            <Container className="mt-100 mt-60">
                <Row>
                    <Col xs={12}>
                        <h5 className="mb-0">Top Categories</h5>
                    </Col>
                </Row>

                <Row>
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-user-md"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Fashion</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-tennis-ball"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Sports</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-headphones"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Music</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-bed-double"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Furniture</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-airplay"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Electronics</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    
                    <Col lg={2} md={4} xs={6} className="mt-4 pt-2">
                        <Card className="explore-feature border-0 rounded text-center bg-white">
                            <CardBody>
                                <div className="icon rounded-circle shadow-lg d-inline-block h2">
                                    <i className="uil uil-car-sideview"></i>
                                </div>
                                <div className="content mt-3">
                                    <h6 className="mb-0"><Link to="#" className="title text-dark">Motors</Link></h6>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
           </React.Fragment>
        );
    }
}

export default TopCategories;