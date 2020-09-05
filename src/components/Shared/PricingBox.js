import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Col, Card, CardBody } from "reactstrap";

//Import Icons
import FeatherIcon from 'feather-icons-react';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                    {
                        this.props.pricings.map((pricing, key) =>
                            <Col name="pricing" lg="3" md="6" xs="12" key={key} className="mt-4 pt-2">
                                <Card name="pricingbox" className={ pricing.isActive ? "pricing-rates business-rate shadow bg-white border-0 rounded" : "pricing-rates business-rate shadow bg-light border-0 rounded"}>
                                    <CardBody>
                                    <h2 className={pricing.isActive ? "title text-uppercase text-primary mb-4" : "title text-uppercase mb-4"}>{pricing.title}</h2>
                                    <div className="d-flex mb-4" name="pricingsection">
                                        <span className="h4 mb-0 mt-2">$</span>
                                        <span className="price h1 mb-0">{pricing.price}</span>
                                        <span className="h4 align-self-end mb-1">/{pricing.duration}</span>
                                    </div>
                                    
                                    <ul className="feature list-unstyled pl-0">
                                        {
                                            pricing.features.map((feature, key) =>
                                                <li key={key} className="feature-list text-muted"><i><FeatherIcon icon="check" className="fea icon-sm text-success mr-2" /></i>{feature.title}</li>
                                            )
                                        }
                                    </ul>
                                    <Link to="" className="btn btn-primary mt-4">{pricing.buttonText}</Link>
                                    </CardBody>
                                </Card>
                            </Col>                        
                        )
                    }
            </React.Fragment>

        );
    }
}

export default Pricing;