import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { Container } from "reactstrap";

//Import images
import logodark from "../../assets/images/logo-light.png";

class Topbar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            isOpen : false, 
            navLinks : [
                //Note : each child and nested child must have unique id
                { id : 1, title : "Home", link : "/index" },
                { id : 2, title : "Landing", link : "/#", isMegaMenu : true, isOpenSubMenu : false,
                    child : [
                        { id : 1, title : "Saas", link : "/index-saas" },
                        { id : 2, title : "Classic Saas", link : "/index-classic-saas" },
                        { id : 3, title : "Agency", link : "/index-agency" },
                        { id : 4, title : "Application", link : "/index-apps" },
                        { id : 5, title : "Classic Application", link : "/index-classic-app" },
                        { id : 6, title : "Studio", link : "/index-studio" },
                        { id : 7, title : "Business", link : "/index-business" },
                        { id : 8, title : "Modern Business", link : "/index-modern-business" },
                        { id : 9, title : "Hotel", link : "/index-hotel" },
                        { id : 10, title : "Marketing", link : "/index-marketing" },
                        { id : 11, title : "Enterprise", link : "/index-enterprise" },

                        { id : 12, title : "Insurance", link : "/index-insurance", isNew : true },
                        { id : 13, title : "Shop", link : "/index-shop", isNew : true },
                        { id : 14, title : "E-Book", link : "/index-ebook", isNew : true },
                        { id : 15, title : "Coworking", link : "/index-coworking" },
                        { id : 16, title : "Personal", link : "/index-personal" },
                        { id : 17, title : "Service", link : "/index-services" },
                        { id : 18, title : "Payments", link : "/index-payments" },
                        { id : 19, title : "Cryptocurrency", link : "/index-crypto" },
                        { id : 20, title : "Software", link : "/index-software" },
                        { id : 21, title : "Car Ride", link : "/index-car-riding" },
                        
                        { id : 22, title : "Hosting & Domain", link : "/index-hosting" },
                        { id : 23, title : "Event", link : "/index-event" },
                        { id : 24, title : "Course", link : "/index-course" },
                        { id : 25, title : "Online Learning", link : "/index-online-learning" },
                        { id : 26, title : "Product", link : "/index-single" },
                        { id : 27, title : "Portfolio", link : "/index-portfolio" },
                        { id : 28, title : "Job", link : "/index-job" },
                        { id : 29, title : "Customer", link : "/index-customer" },
                        { id : 30, title : "Social Media", link : "/index-social-marketing" },
                        { id : 31, title : "Digital Agency", link : "/index-digital-agency" },
                        { id : 32, title : "Saas", link : "/index-onepage", isOnePage : true }, 
                    ],
                },
                { id : 3, title : "Pages", link : "/#", isOpenSubMenu : false,
                    child : [
                        { id : 1, title : "About Us", link : "/page-aboutus"},
                        { id : 2, title : "Services", link : "page-services"},
                        { id : 3, title : "Pricing", link : "/page-pricing"},
                        { id : 4, title : "Team", link : "/page-team"},
                        { id : 5, title : "Account", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Profile", link : "/page-profile"},
                                { title : "Account Setting", link : "/page-profile-edit"},
                                { title : "Invoice", link : "/page-invoice"},
                            ]
                        },
                        { id : 6, title : "Shop", link : "/#", isOpenNestedSubMenu : false, isNew : true,
                            nestedChild : [
                                { title : "All Products", link : "/shop-products", isNewPage : true },
                                { title : "Product Details", link : "/shop-product-detail", isNewPage : true },
                                { title : "Shop Cart", link : "/shop-cart", isNewPage : true },
                                { title : "Checkouts", link : "/shop-checkouts", isNewPage : true },
                                { title : "My Account", link : "/shop-myaccount", isNewPage : true },
                                
                            ]
                        },
                        { id : 7, title : "Help center", link : "/#", isOpenNestedSubMenu : false, isNew : true,
                            nestedChild : [
                                { title : "Helpcenter", link : "/helpcenter-overview", isNewPage : true },
                                { title : "Faqs", link : "/helpcenter-faqs", isNewPage : true },
                                { title : "Guides", link : "/helpcenter-guides", isNewPage : true },
                                { title : "Support Call", link : "/helpcenter-support-request", isNewPage : true },
                                
                            ]
                        },
                        { id : 8, title : "Email Template", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Confirmation", link : "/email-confirmation"},
                                { title : "Reset Password", link : "/email-password-reset" },
                                { title : "Alert", link : "/email-alert"},
                                { title : "Invoice", link : "/email-invoice"},
                            ]
                        },
                        { id : 9, title : "Careers", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Jobs", link : "/page-job"},
                                { title : "Jobs - Sidebar", link : "/page-jobs-sidebar" },
                                { title : "Job Detail", link : "/page-job-detail"},
                                { title : "Job Apply", link : "/page-job-apply"},
                                { title : "Company", link : "/page-job-company"},
                                { title : "Candidate", link : "/page-job-candidate"},
                            ]
                        },
                        { id : 10, title : "Blog", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Blog Grid", link : "/page-blog-grid"},
                                { title : "Blog with Sidebar", link : "/page-blog-sidebar"},
                                { title : "Blog Listing", link : "/page-blog-list"},
                                { title : "Blog List & Sidebar", link : "/page-blog-list-sidebar"},
                                { title : "Blog Detail", link : "/page-blog-detail"},
                            ]
                        },
                        { id : 11, title : "Works", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Works Modern", link : "/page-work-modern"},
                                { title : "Works Classic", link : "/page-work-classic"},
                                { title : "Works Grid", link : "/page-work-grid"},
                                { title : "Works Masonry", link : "/page-work-masonry"},
                                { title : "Work Detail", link : "/page-work-detail"},
                            ]
                        },
                        { id : 12, title : "Auth Pages", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Login", link : "/auth-login"},
                                { title : "Login Cover", link : "/auth-cover-login"},
                                { title : "Login Simple", link : "/auth-login-three"},
                                { title : "Signup", link : "/auth-signup"},
                                { title : "Signup Cover", link : "/auth-cover-signup"},
                                { title : "Signup Simple", link : "/auth-signup-three"},
                                { title : "Reset Password", link : "/auth-re-password"},
                                { title : "Reset Password Cover", link : "/auth-cover-re-password"},
                                { title : "Reset Password Simple", link : "/auth-re-password-three"},
                            ]
                        },
                        { id : 13, title : "Utility", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Terms of Services", link : "/page-terms"},
                                { title : "Privacy Policy", link : "/page-privacy"},
                            ]
                        },
                        { id : 14, title : "Special", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Coming Soon", link : "/page-comingsoon"},
                                { title : "Coming Soon Two", link : "/page-comingsoon2"},
                                { title : "Maintenance", link : "/page-maintenance"},
                                { title : "Error", link : "/page-error"},
                            ]
                        },
                        { id : 15, title : "Contact", link : "/#", isOpenNestedSubMenu : false,
                            nestedChild : [
                                { title : "Contact Detail", link : "/page-contact-detail"},
                                { title : "Contact One", link : "/page-contact-one"},
                                { title : "Contact Two", link : "/page-contact-two"},
                                { title : "Contact Three", link : "/page-contact-three"},
                            ]
                        },
                    ]
                },
                { id : 4, title : "Docs", link : "/#", isOpenSubMenu : false,
                child : [
                    { title : "Documentations", link : "/documentation"},
                    { title : "Changelog", link : "/changelog"},
                    { title : "Components", link : "/components"},
                    { title : "Widget", link : "/widget"},
                    ]
                },
            ]
         };
        this.toggleLine = this.toggleLine.bind(this);
        this.openBlock.bind(this);
        this.openNestedBlock.bind(this);
        
    }

    toggleLine() {
        this.setState(prevState => ({  isOpen: !prevState.isOpen }));
    }

    componentDidMount() {
         var matchingMenuItem = null;
         var ul = document.getElementById("top-menu");
         var items = ul.getElementsByTagName("a");
         for (var i = 0; i < items.length; ++i) {
             if (this.props.location.pathname === items[i].pathname) {
                 matchingMenuItem = items[i];
                 break;
             }
         }
         if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
         }
     }
 
    activateParentDropdown = (item) => {
          const parent = item.parentElement;
          if (parent) {
              parent.classList.add('active'); // li
              const parent1 = parent.parentElement;
              parent1.classList.add('active'); // li
              if (parent1) {
                  const parent2 = parent1.parentElement;
                  parent2.classList.add('active'); // li
                  if (parent2) {
                    const parent3 = parent2.parentElement;
                    parent3.classList.add('active'); // li
                    if (parent3) {
                        const parent4 = parent3.parentElement;
                        parent4.classList.add('active'); // li
                 }
             }
         }
    }
    }

    openBlock = (level2_id) => {
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink) =>
        //Match level 2 id
           tmpLink.id === level2_id ?
                tmpLink.isOpenSubMenu = !tmpLink.isOpenSubMenu
            :
                false 
            
        )
        this.setState({navLinks : tmpLinks});
    }

    openNestedBlock = (level2_id, level3_id) => {
        var tmpLinks = this.state.navLinks;
        tmpLinks.map((tmpLink) =>
        //Match level 2 id
           tmpLink.id === level2_id ?
                tmpLink.child.map((tmpchild) =>
                    //if level1 id is matched then match level 3 id
                    tmpchild.id === level3_id ?
                        //if id is matched then update status(level 3 sub menu will be open)
                        tmpchild.isOpenNestedSubMenu = !tmpchild.isOpenNestedSubMenu
                    :
                        tmpchild.isOpenNestedSubMenu = false
                )
            :
                false 
            
        )
        this.setState({navLinks : tmpLinks});
    }

    render() {
        return (
            <React.Fragment>
                <header id="topnav" className="defaultscroll sticky">
                    <Container>
                        <div>
                            <Link className="logo" to="/index">
                                <img src={logodark} id="brandLogo" height="24" alt=""/>
                            </Link>
                        </div> 
                        <div className="buy-button">
                        <a href="https://1.envato.market/landrickreactjs" target="_blank" rel="noopener noreferrer" id="buyButton" className="btn btn-primary">Buy Now</a>
                        </div>
                        <div className="menu-extras">
                            <div className="menu-item">
                                <Link to="#" onClick={ this.toggleLine } className={this.state.isOpen ? "navbar-toggle open" : "navbar-toggle" } >
                                    <div className="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div id="navigation" style={{ display : this.state.isOpen ? "block" : "none" }}>
                            <ul className="navigation-menu" id="top-menu">
                                {
                                    this.state.navLinks.map((navLink, key) => 
                                    navLink.child ?
                                        <li className="has-submenu" key={key}>
                                            {/* child item(menu Item) - Level 1 */}
                                            <Link to={navLink.link} onClick={(event) => {  event.preventDefault(); this.openBlock(navLink.id) } } >{navLink.title}</Link>
                                            <span className="menu-arrow"></span>
                                                {
                                                    navLink.isMegaMenu ?
                                                    // if menu is mega menu(2 columns grid)
                                                    <ul className={ navLink.isOpenSubMenu ? "submenu megamenu open" : "submenu megamenu" }  >
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                        item.id < 12 ?
                                                                        <li key={childKey}>
                                                                            <Link to={item.link}>{item.title}</Link>
                                                                        </li>
                                                                        : null
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                    item.id < 22 && item.id > 11 ?
                                                                        <li key={childKey}>
                                                                            <Link to={item.link}>{item.title}{item.isNew ? <span className="badge badge-danger rounded ml-2">v 2.2</span> : null}</Link>
                                                                        </li>
                                                                        : null
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <ul>
                                                                {
                                                                    navLink.child.map((item, childKey) =>
                                                                    item.id > 21 ?
                                                                        <li key={childKey}>
                                                                            <Link to={item.link}>{item.title}{item.isOnePage ? <span className="badge badge-warning rounded ml-2">Onepage</span> : null}</Link>
                                                                        </li>
                                                                        : null
                                                                    )
                                                                }
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                :
                                                    // if menu is not mega menu(1grid)
                                                    <ul  className={ navLink.isOpenSubMenu ? "submenu open" : "submenu" }  >
                                                            {
                                                                navLink.child.map((childArray, childKey) =>
                                                                    childArray.nestedChild ?
                                                                    // sub menu item - Level 2
                                                                        <li className="has-submenu" key={childKey}>
                                                                            <Link to={childArray.link} onClick={(event) => {  event.preventDefault(); this.openNestedBlock(navLink.id, childArray.id) } }> {childArray.title}{" "}{childArray.isNew ? <span className="badge badge-danger rounded">V 2.2</span> : null }</Link>
                                                                            <span className="submenu-arrow"></span>
                                                                            <ul className={ childArray.isOpenNestedSubMenu ? "submenu open" : "submenu" }>
                                                                                {
                                                                                    childArray.nestedChild.map((nestedChildArray, nestedKey) =>
                                                                                        // nested sub menu item - Level 3
                                                                                        <li key={nestedKey}><Link to={nestedChildArray.link}>{nestedChildArray.title}{" "}{nestedChildArray.isNewPage ? <span className="badge badge-primary rounded">NEW</span> : null }</Link></li>
                                                                                    )
                                                                                }
                                                                            </ul>
                                                                        </li>
                                                                    :
                                                                        <li key={childKey}><Link to={childArray.link}>{childArray.title}</Link></li>
                                                                )
                                                            }
                                                    </ul>
                                                }
                                                
                                        </li>
                                    :
                                        <li key={key}><Link to={navLink.link}>{navLink.title}</Link></li>
                                    )
                                }
                            </ul>
                            <div className="buy-menu-btn d-none">
                            <a href="https://1.envato.market/landrickreactjs" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Buy Now</a>
                            </div>
                        </div>
                    </Container>
                </header>
            </React.Fragment>
        );
    }
}

export default withRouter(Topbar);