import React, { Component } from 'react';
import { Container, Row, Col, Table, Card, CardBody, Media } from 'reactstrap';
import { Link } from "react-router-dom";

//Import Icons
import FeatherIcon from 'feather-icons-react';

//Import Slick Slider
import Slider from "react-slick";

//Import Slick Slider CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import components
import PageBreadcrumb from "../../../components/Shared/PageBreadcrumb";

//Import Images
import client01 from "../../../assets/images/client/01.jpg";


import product1 from "../../../assets/images/shop/product/s1.jpg";
import product2 from "../../../assets/images/shop/product/s2.jpg";
import product3 from "../../../assets/images/shop/product/s3.jpg";
import product4 from "../../../assets/images/shop/product/s4.jpg";
import product5 from "../../../assets/images/shop/product/s5.jpg";
import product6 from "../../../assets/images/shop/product/s6.jpg";
import product7 from "../../../assets/images/shop/product/s7.jpg";
import product8 from "../../../assets/images/shop/product/s8.jpg";

import prodtctOverlay1 from "../../../assets/images/shop/product/s-1.jpg";
import prodtctOverlay2 from "../../../assets/images/shop/product/s-2.jpg";
import prodtctOverlay3 from "../../../assets/images/shop/product/s-3.jpg";
import prodtctOverlay4 from "../../../assets/images/shop/product/s-4.jpg";
import prodtctOverlay5 from "../../../assets/images/shop/product/s-5.jpg";
import prodtctOverlay6 from "../../../assets/images/shop/product/s-6.jpg";
import prodtctOverlay7 from "../../../assets/images/shop/product/s-7.jpg";
import prodtctOverlay8 from "../../../assets/images/shop/product/s-8.jpg";

class ShopMyAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pathItems : [
                //id must required
                { id : 1, name : "Landrick", link : "/index" },
                { id : 2, name : "Shop", link : "#" },
                { id : 3, name : "My Account" },
            ],
            products : [
                { id : 1, image : product1, imgOverlay : prodtctOverlay1, name : "Branded T-Shirt", price : "16.00", oldPrice : "21.00" },
                { id : 2, image : product2, imgOverlay : prodtctOverlay2, name : "Shopping Bag", price : "21.00", oldPrice : "25.00" },
                { id : 3, image : product3, imgOverlay : prodtctOverlay3, name : "Elegent Watch", price : "5.00", desc : "30% off" },
                { id : 4, image : product4, imgOverlay : prodtctOverlay4, name : "Casual Shoes", price : "18.00" , oldPrice : "22.00" },
                { id : 5, image : product5, imgOverlay : prodtctOverlay5, name : "Earphones", price : "3.00"  },
                { id : 6, image : product6, imgOverlay : prodtctOverlay6, name : "Elegent Mug", price : "4.50" , oldPrice : "6.50"},
                { id : 7, image : product7, imgOverlay : prodtctOverlay7, name : "Sony Headphones", price : "9.99", desc : "20% off" },
                { id : 8, image : product8, imgOverlay : prodtctOverlay8, name : "Wooden Stools", price : "22.00" , oldPrice : "25.00" },
            ],
            orderedItems : [
                { image : product1, name : "T-Shirt", date : "15/05/2018", qty : 2, amount : "$380.00" },
                { image : product2, name : "Shopping Bag", date : "10/07/2018", qty : 1, amount : "$210.00" },
                { image : product3, name : "Watch", date : "08/12/2018", qty : 1, amount : "$124.00" },
                { image : product4, name : "Shoes", date : "05/03/2019", qty : 1, amount : "$452.00" },
                { image : product1, name : "T-Shirt", date : "15/05/2020", qty : 3, amount : "$450.00" },
            ],
            responsive: {
                0:{
                    items:1
                },
                600:{
                    items:2
                },
                1000:{
                    items:4
                }
            },
        }
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scrollNavigation, true);
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    // Make sure to remove the DOM listener when the component is unmounted.
    componentWillUnmount() {
        window.removeEventListener("scroll",this.scrollNavigation, true);
    }

    scrollNavigation = () => {
        var doc = document.documentElement;
        var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        if (top > 80) {
            document.getElementById('topnav').classList.add('nav-sticky');
        }
        else {
            document.getElementById('topnav').classList.remove('nav-sticky');
        }
    }

    render() {
        const settings2 = {
            dots: false,
            infinite: true,
            autoplaySpeed: 1500,
            autoplay:true,
            slidesToShow: 4,
            slidesToScroll: 4,
            
          };
        return (
            <React.Fragment>
                {/* breadcrumb */}
                <PageBreadcrumb title="My Profile / Account" pathItems = {this.state.pathItems} />
                 <div className="position-relative">
                    <div className="shape overflow-hidden text-white">
                        <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                        </svg>
                    </div>
                </div>

                <section className="section">
            <Container>
                <Row>
                    <Col lg={4} md={5}>
                        <div className="rounded p-4 border shadow">
                            <img src={client01} className="avatar avatar-small rounded-pill" alt="Landrick" />
                            <h6 className="mt-3">Calvin Carlo</h6>

                            <Media className="align-items-center mt-3">
                                <i><FeatherIcon icon="mail" className="fea icon-ex-md text-muted mr-3" /></i>
                                <Media body>
                                    <h6 className="text-primary mb-0">Email :</h6>
                                    <Link to="#" className="text-muted">calvincarlo0203@mail.com</Link>
                                </Media>
                            </Media>
                            <div className="media align-items-center mt-3">
                            <i><FeatherIcon icon="map-pin" className="fea icon-ex-md text-muted mr-3" /></i>
                                <Media body>
                                    <h6 className="text-primary mb-0">Location :</h6>
                                    <Link to="#" className="text-muted">Beijing, China</Link>
                                </Media>
                            </div>
                            <div className="media align-items-center mt-3">
                            <i><FeatherIcon icon="phone" className="fea icon-ex-md text-muted mr-3" /></i>
                                <Media body>
                                    <h6 className="text-primary mb-0">Cell No :</h6>
                                    <Link to="#" className="text-muted">(+12) 1254-56-4896</Link>
                                </Media>
                            </div>

                            <ul className="list-unstyled mt-4 mb-0">
                                <li><i><FeatherIcon icon="lock" className="fea icon-sm" /></i><Link to="#" className="text-primary h6 ml-2">Change your password</Link></li>
                                <li className="mt-2"><i><FeatherIcon icon="settings" className="fea icon-sm" /></i><Link to="#" className="text-primary h6 ml-2">Change profile settings</Link></li>
                            </ul>
                        </div>
                    </Col>

                    
                    <Col lg={8} md={7} className="mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <h5 className="mb-0">Order History</h5>
                        <div className="table-responsive mt-4 bg-white rounded shadow">
                            <Table className="table-center table-padding mb-0">
                                <thead>
                                    <tr>
                                        <th className="py-3" style={{minWidth:"20px"}}></th>
                                        <th className="py-3" style={{minWidth:"200px"}}>Product</th>
                                        <th className="text-center py-3" style={{minWidth:"160px"}}>Date</th>
                                        <th className="text-center py-3" style={{minWidth:"40px"}}>Qty</th>
                                        <th className="text-center py-3" style={{minWidth:"100px"}}>Amount</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {
                                        this.state.orderedItems.map((item, key) =>
                                            <tr key={key}>
                                                <td className="h6">{key + 1}</td>
                                                <td>
                                                    <div className="d-flex align-items-center">
                                                        <img src={item.image} className="img-fluid avatar avatar-small rounded shadow" style={{height:"auto"}} alt="Landrick" />
                                                        <h6 className="mb-0 ml-3">{item.name}</h6>
                                                    </div>
                                                </td>
                                                <td className="text-center">{item.date}</td>
                                                <td className="text-center">{item.qty}</td>
                                                <td className="text-center font-weight-bold">{item.amount}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>

            <Container className="mt-100 mt-60">
                <Row>
                    <Col xs={12}>
                        <h5 className="mb-0">Trending Products</h5>
                    </Col>

                    <Col xs={12} className="mt-4">
                    <Slider {...settings2} className="owl-carousel owl-theme">
                            {
                                this.state.products.map((product, key) =>
                                <div key={key} style={{marginLeft:5, marginRight:5}}>
                                    <Card className="shop-list border-0 position-relative overflow-hidden m-2">
                                        <div className="shop-image position-relative overflow-hidden rounded shadow">
                                            <Link to="shop-product-detail"><img src={product.image} className="img-fluid" alt="Landrick" /></Link>
                                            <Link to="shop-product-detail" className="overlay-work">
                                                <img src={product.imgOverlay} className="img-fluid" alt="Landrick" />
                                            </Link>
                                            <ul className="list-unstyled shop-icons">
                                                <li><Link to="#" className="btn btn-icon btn-pills btn-soft-danger"><i><FeatherIcon icon="heart" className="icons" /></i></Link></li>
                                                <li className="mt-2"><Link to="shop-product-detail" className="btn btn-icon btn-pills btn-soft-primary"><i><FeatherIcon icon="eye" className="icons" /></i></Link></li>
                                                <li className="mt-2"><Link to="shop-cart" className="btn btn-icon btn-pills btn-soft-warning"><i><FeatherIcon icon="shopping-cart" className="icons" /></i></Link></li>
                                            </ul>
                                        </div>
                                        <CardBody className="content pt-4 p-2">
                                            <Link to="shop-product-detail" className="text-dark product-name h6">{product.name}</Link>
                                            <div className="d-flex justify-content-between mt-1">
                                                <h6 className="text-muted small font-italic mb-0 mt-1">
                                                ${product.price}{" "}
                                                    {
                                                        product.oldPrice ? <del className="text-danger ml-2">${product.oldPrice}</del> : null
                                                    }
                                                    {
                                                        product.desc ? <span className="text-success ml-1">{product.desc}</span> : null
                                                    }    
                                                </h6>
                                                <ul className="list-unstyled text-warning mb-0">
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                    <li className="list-inline-item mr-1"><i className="mdi mdi-star"></i></li>
                                                </ul>
                                            </div>
                                        </CardBody>
                                    </Card>
                                    </div>
                                )
                            }
                            
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
            </React.Fragment>
        );
    }
}

export default ShopMyAccount;