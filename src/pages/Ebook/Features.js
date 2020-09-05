import React, { Component } from 'react';
import { Container, Row, Col, Media } from 'reactstrap';
import { Link } from "react-router-dom";

import FeatherIcon from 'feather-icons-react';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import Images
import book1 from "../../assets/images/book/book-1.png";
import book2 from "../../assets/images/book/book-2.png";

class Features extends Component {
    render() {
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60">
                {/* render Section title */}
                <SectionTitle title="Features & Pricing" desc=" that can provide everything you need to generate awareness, drive traffic, connect."/>

                <Row className="align-items-center">
                    <Col lg={5} md={6} xs={12} className="mt-4 pt-2">
                        <img src={book2} className="img-fluid" alt="Landrick" />
                    </Col>

                    <Col lg={7} md={6} xs={12} className="mt-4 pt-2">
                        <div className="ml-lg-5">
                            <ul className="list-unstyled feature-list text-muted">
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces.</li>
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces.</li>
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces.</li>
                                <li><i><FeatherIcon icon="check-circle" className="fea icon-sm text-success mr-2" /></i>This prevents repetitive patterns from impairing the overall visual impression and facilitates the comparison of different typefaces.</li>
                            </ul>

                            <Row className="mt-4">
                                <Col lg={8}>
                                    <div className="bg-soft-primary p-4 rounded shadow">
                                        <Media className="justify-content-between align-items-center">
                                            <img src={book1} className="avatar avatar-md-md" style={{height: "auto"}} alt="Landrick" />
                                            <div className="mx-3">
                                                <h5 className="mb-0">Reguler Price</h5>
                                            </div>
                                            <div className="d-flex justify-content-center">
                                                <span className="h4 mb-0 mt-2">$</span>
                                                <span className="price h1 mb-0">16</span>
                                            </div>
                                        </Media>
                                    </div>
                                </Col>
                            </Row>
                            <div className="mt-4 pt-2">
                                <Link to="#" className="btn btn-primary">Buy Now</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            </React.Fragment>
        );
    }
}

export default Features;