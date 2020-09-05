import React, { Component } from 'react';
import { Container, Row, Col, Card, CardBody } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from 'feather-icons-react';

import Lightbox from 'react-image-lightbox';
import '../../../node_modules/react-image-lightbox/style.css';

//Import Components
import SectionTitle from "../../components/Shared/SectionTitle";

//Import images
import book1 from "../../assets/images/book/book-1.png";

//creating array of images
const images = [
    book1,book1,book1
];

class OtherBooks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books : [
                { id : 1, img : book1, name : "Iphone mockup", price : "$ 16" },
                { id : 2, img : book1, name : "Iphone mockup", price : "$ 16" },
                { id : 3, img : book1, name : "Iphone mockup", price : "$ 16" },
            ],
            isOpen: false,
            photoIndex: 0,
        }
    }
    
    render() {
        const { photoIndex, isOpen } = this.state;
        return (
            <React.Fragment>
            <Container className="mt-100 mt-60 pb-md-5 mb-md-5">
                {/* render Section title */}
                <SectionTitle title="Other Books" desc=" that can provide everything you need to generate awareness, drive traffic, connect."/>

                <Row className="align-items-center">
                    {
                       this.state.books.map((book, key) =>
                        <Col lg={3} md={4} key={key} className="mt-4 pt-2">
                            <Card className="border-0 work-container work-grid position-relative d-block overflow-hidden rounded shadow-lg">
                                <CardBody className="p-0">
                                    <Link className="mfp-image d-inline-block" to="#" onClick={(event) => {event.preventDefault(); this.setState({ isOpen: true, photoIndex : key })}}>
                                        <img src={book.img} className="img-fluid" alt="work"/>
                                    </Link>
                                    <div className="content bg-white p-3">
                                        <h5 className="mb-0"><Link to="#" className="text-dark title">{book.name}</Link></h5>
                                        <h6 className="text-muted tag mb-0">{book.price}</h6>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                       ) 
                    }
                    
                    <Col lg={3} md={6} className="mt-4 pt-2 pt-lg-0 mt-lg-0">
                        <Link to="#" className="btn btn-primary">See More <i><FeatherIcon icon="arrow-right" className="fea icon-sm" /></i></Link>
                    </Col>
                </Row>

                                    {/* lightbox for book images */}
                                    { isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        imagePadding={100}
                                        onCloseRequest={() => this.setState({ isOpen: false })}
                                        onMovePrevRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + images.length - 1) % images.length,
                                        })
                                        }
                                        onMoveNextRequest={() =>
                                        this.setState({
                                            photoIndex: (photoIndex + 1) % images.length,
                                        })
                                        }
                                    />
                                    ) }
            </Container>
            </React.Fragment>
        );
    }
}

export default OtherBooks;