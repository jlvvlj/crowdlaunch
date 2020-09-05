import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

//Import images
import book1 from "../../assets/images/book/book-1.png";

class UpComing extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="section bg-primary">
                    
                    <Container className="position-relative">
                        <Row>
                            <Col lg={5} md={6}>
                                <div className="app-subscribe text-center text-md-left">
                                    <img src={book1} className="img-fluid" alt="Landrick" />
                                </div>
                            </Col>

                            <Col lg={7} md={6} className="mt-4 pt-2 mt-sm-0 pt-sm-0">
                                <div className="section-title text-center text-md-left">
                                    <h1 className="font-weight-bold text-white title-dark mb-3">Upcoming Book</h1>
                                    <p className="text-white-50 para-dark">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect.</p>
                                    
                                    <div className="mt-4 pt-2">
                                        <Link to="#" className="btn btn-warning">Pre-order Now</Link>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default UpComing;