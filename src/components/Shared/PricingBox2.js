import React, { Component } from 'react';
import { Col, Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';

//Import Icons
import FeatherIcon from 'feather-icons-react';

class PricingBox2 extends Component {
    render() {
        return (
            <React.Fragment>
                {
                    this.props.pricings.map((pricing, key) =>
                            <Col md="4" xs="12" key={key} className="mt-4 pt-2">
                                <Card className={ pricing.isActive ? "pricing-rates starter-plan bg-light py-5 border-0 rounded text-center" : "pricing-rates bg-light py-5 border-0 rounded text-center"}>
                                    <CardBody>
                                    <h2 className={pricing.isActive ? "title text-uppercase text-primary mb-4" : "title text-uppercase mb-4"}>{pricing.title}</h2>
                                    <div className="d-flex justify-content-center mb-4">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">{pricing.price}</span>
                                        <span className="h4 align-self-end mb-1">/{pricing.duration}</span>
                                    </div>
                                    <ul className="feature list-unstyled pl-0">
                                        {
                                            pricing.features.map((feature, key) =>
                                                <li key={key} className="feature-list text-muted"><i><FeatherIcon icon="check"  className="fea icon-sm text-success mr-2" /></i>{feature.title}</li>
                                            )
                                        }
                                    </ul>
                                    <Link to="#" className="btn btn-primary mt-4">{pricing.buttonText}</Link>
                                    </CardBody>
                                </Card>
                            </Col>
                    )
                }
            </React.Fragment>
        );
    }
}

export default PricingBox2;