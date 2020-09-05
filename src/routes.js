import React from 'react';

// Root Include
const Root = React.lazy(() => import('./pages/Home/indexRoot'));

//Main Index
const Main = React.lazy(() => import('./pages/Home/indexMain'));

//Special
const PageComingSoon = React.lazy(() => import('./pages/Pages/Special/PageComingSoon'));
const PageComingSoon2 = React.lazy(() => import('./pages/Pages/Special/PageComingSoon2'));
const PageError = React.lazy(() => import('./pages/Pages/Special/PageError'));
const PageMaintenance = React.lazy(() => import('./pages/Pages/Special/PageMaintenance'));

//Auth Pages
const PageLogin = React.lazy(() => import('./pages/Pages/AuthPages/PageLogin'));
const PageCoverLogin = React.lazy(() => import('./pages/Pages/AuthPages/PageCoverLogin'));
const PageLoginThree = React.lazy(() => import('./pages/Pages/AuthPages/PageLoginThree'));

const PageSignup = React.lazy(() => import('./pages/Pages/AuthPages/PageSignup'));
const PageCoverSignup = React.lazy(() => import('./pages/Pages/AuthPages/PageCoverSignup'));
const PageSignupThree = React.lazy(() => import('./pages/Pages/AuthPages/PageSignupThree'));

const PageCoverRePassword = React.lazy(() => import('./pages/Pages/AuthPages/PageCoverRePassword'));
const PageRecoveryPassword = React.lazy(() => import('./pages/Pages/AuthPages/PageRecoveryPassword'));
const PageRePasswordThree = React.lazy(() => import('./pages/Pages/AuthPages/PageRePasswordThree'));

// Import all components
const SaasOnepage = React.lazy(() => import('./pages/Saas Onepage/index'));
const Customer = React.lazy(() => import('./pages/Customer/index'));
const Job = React.lazy(() => import('./pages/Job/index'));
const Software = React.lazy(() => import('./pages/Software/index'));
const Cryptocurrency = React.lazy(() => import('./pages/Cryptocurrency/index'));
const Payments = React.lazy(() => import('./pages/Payments/index'));
const IndexCarRiding = React.lazy(() => import('./pages/Car Ride/index'));
const IndexclassicSaas = React.lazy(() => import('./pages/Classic Saas/index'));
const ClassicApp = React.lazy(() => import('./pages/Classic Application/index'));
const Agency = React.lazy(() => import('./pages/Agency/index'));
const Saas = React.lazy(() => import('./pages/Saas/index'));
const Apps = React.lazy(() => import('./pages/Apps/index'));
const Studio = React.lazy(() => import('./pages/Studio/index'));
const Business = React.lazy(() => import('./pages/Business/index'));
const Marketing = React.lazy(() => import('./pages/Marketing/index'));
const Hotel = React.lazy(() => import('./pages/Hotel/index'));
const ModernBusiness = React.lazy(() => import('./pages/ModernBusiness/index'));
const Coworking = React.lazy(() => import('./pages/Coworking/index'));
const CloudHosting = React.lazy(() => import('./pages/CloudHosting/index'));
const Event = React.lazy(() => import('./pages/Event/index'));
const Course = React.lazy(() => import('./pages/Course/index'));
const Personal = React.lazy(() => import('./pages/Personal/index'));
const SingleProduct = React.lazy(() => import('./pages/SingleProduct/index'));
const Enterprise = React.lazy(() => import('./pages/Enterprise/index'));
const Portfolio = React.lazy(() => import('./pages/Portfolio/index'));
const Services = React.lazy(() => import('./pages/Services/index'));
const Shop = React.lazy(() => import('./pages/Shop/index'));
const Insurance = React.lazy(() => import('./pages/Insurance/index'));
const Ebook = React.lazy(() => import('./pages/Ebook/index'));
const SocialMarketing = React.lazy(() => import('./pages/SocialMarketing/index'));
const DigitalAgency = React.lazy(() => import('./pages/DigitalAgency/index'));
const OnlineLearning = React.lazy(() => import('./pages/OnlineLearning/index'));

//Docs
const ChangeLog = React.lazy(() => import('./pages/Docs/ChangeLog'));
const Components = React.lazy(() => import('./pages/Docs/Components'));
const Documentation = React.lazy(() => import('./pages/Docs/Documentation'));
const Widget = React.lazy(() => import('./pages/Docs/widget'));

const PageAboutUs = React.lazy(() => import('./pages/Pages/PageAboutUs'));
const PagePricing = React.lazy(() => import('./pages/Pages/PagePricing'));
const PageServices = React.lazy(() => import('./pages/Pages/PageServices'));
const PageTeam = React.lazy(() => import('./pages/Pages/PageTeam'));

//Account
const PageProfile = React.lazy(() => import('./pages/Pages/Account/PageProfile'));
const PageProfileEdit = React.lazy(() => import('./pages/Pages/Account/PageProfileEdit'));
const PageInvoice = React.lazy(() => import('./pages/Pages/Account/PageInvoice'));

//Career
const PageJobsSidebar = React.lazy(() => import('./pages/Pages/Careers/PageJobsSidebar'));
const PageJobDetail = React.lazy(() => import('./pages/Pages/Careers/PageJobDetail'));
const PageJob = React.lazy(() => import('./pages/Pages/Careers/PageJob'));
const PageJobApply = React.lazy(() => import('./pages/Pages/Careers/PageJobApply'));
const PageJobCompany = React.lazy(() => import('./pages/Pages/Careers/PageJobCompany'));
const PageJobCandidate = React.lazy(() => import('./pages/Pages/Careers/PageJobCandidate'));

//Blog
const PageBlog = React.lazy(() => import('./pages/Pages/Blog/PageBlog'));
const PageBlogDetail = React.lazy(() => import('./pages/Pages/Blog/PageBlogDetail'));
const PageBlogSidebar = React.lazy(() => import('./pages/Pages/Blog/PageBlogSidebar'));
const PageBlogList = React.lazy(() => import('./pages/Pages/Blog/PageBlogList'));
const PageBlogListSidebar = React.lazy(() => import('./pages/Pages/Blog/PageBlogListSidebar'));

//Work
const PageWorkModern = React.lazy(() => import('./pages/Pages/Work/PageWorkModern'));
const PageWorkDetail = React.lazy(() => import('./pages/Pages/Work/PageWorkDetail'));
const PageWorkClassic = React.lazy(() => import('./pages/Pages/Work/PageWorkClassic'));
const PageWorkGrid = React.lazy(() => import('./pages/Pages/Work/PageWorkGrid'));
const PageWorkMasonry = React.lazy(() => import('./pages/Pages/Work/PageWorkMasonry'));

//Utility
const PagePrivacy = React.lazy(() => import('./pages/Pages/Utility/PagePrivacy'));
const PageTerms = React.lazy(() => import('./pages/Pages/Utility/PageTerms'));

//Contact
const PageContactDetail = React.lazy(() => import('./pages/Pages/Contact/PageContactDetail'));
const PageContactOne = React.lazy(() => import('./pages/Pages/Contact/PageContactOne'));
const PageContactThree = React.lazy(() => import('./pages/Pages/Contact/PageContactThree'));
const PageContactTwo = React.lazy(() => import('./pages/Pages/Contact/PageContactTwo'));

//Email
const EmailAlert = React.lazy(() => import('./pages/Pages/EmailTemplate/EmailAlert'));
const EmailPasswordReset = React.lazy(() => import('./pages/Pages/EmailTemplate/EmailPasswordReset'));
const EmailConfirmation = React.lazy(() => import('./pages/Pages/EmailTemplate/EmailConfirmation'));
const EmailInvoice = React.lazy(() => import('./pages/Pages/EmailTemplate/EmailInvoice'));

//Help Center
const HelpCenterOverview = React.lazy(() => import('./pages/Pages/HelpCenter/HelpCenterOverview'));
const HelpCenterFaqs = React.lazy(() => import('./pages/Pages/HelpCenter/HelpCenterFaqs'));
const HelpCenterGuides = React.lazy(() => import('./pages/Pages/HelpCenter/HelpCenterGuides'));
const HelpCenterSupportRequest = React.lazy(() => import('./pages/Pages/HelpCenter/HelpCenterSupportRequest'));

//Shop
const ShopProducts = React.lazy(() => import('./pages/Pages/Shop/ShopProducts'));
const ShopProductDetail = React.lazy(() => import('./pages/Pages/Shop/ShopProductDetail'));
const ShopCart = React.lazy(() => import('./pages/Pages/Shop/ShopCart'));
const ShopCheckouts = React.lazy(() => import('./pages/Pages/Shop/ShopCheckouts'));
const ShopMyAccount = React.lazy(() => import('./pages/Pages/Shop/ShopMyAccount'));

const routes = [
    //routes without Layout

    //Contct without layout
    { path: '/page-contact-detail', component: PageContactDetail, isWithoutLayout : true },

    //Email Pages
    { path: '/email-alert', component: EmailAlert, isWithoutLayout : true },
    { path: '/email-password-reset', component: EmailPasswordReset, isWithoutLayout : true },
    { path: '/email-confirmation', component: EmailConfirmation, isWithoutLayout : true },
    { path: '/email-invoice', component: EmailInvoice, isWithoutLayout : true },

    //Special Pages
    { path: '/page-comingsoon', component: PageComingSoon, isWithoutLayout : true },
    { path: '/page-comingsoon2', component: PageComingSoon2, isWithoutLayout : true },
    { path: '/page-error', component: PageError, isWithoutLayout : true },
    { path: '/page-maintenance', component: PageMaintenance, isWithoutLayout : true },

    //User Pages
    { path: '/auth-login', component: PageLogin, isWithoutLayout : true },
    { path: '/auth-cover-login', component: PageCoverLogin, isWithoutLayout : true },
    { path: '/auth-login-three', component: PageLoginThree, isWithoutLayout : true },

    { path: '/auth-signup', component: PageSignup, isWithoutLayout : true },
    { path: '/auth-cover-signup', component: PageCoverSignup, isWithoutLayout : true },
    { path: '/auth-signup-three', component: PageSignupThree, isWithoutLayout : true },
    
    { path: '/auth-re-password', component: PageRecoveryPassword, isWithoutLayout : true },
    { path: '/auth-cover-re-password', component: PageCoverRePassword, isWithoutLayout : true},
    { path: '/auth-re-password-three', component: PageRePasswordThree, isWithoutLayout : true },
    
    
    // Landings
    { path: '/index-onepage', component: SaasOnepage },
    { path: '/index-customer', component: Customer },
    { path: '/index-job', component: Job },
    { path: '/index-software', component: Software },
    { path: '/index-crypto', component: Cryptocurrency },
    { path: '/index-payments', component: Payments },
    { path: '/index-car-riding', component: IndexCarRiding },
    { path: '/index-classic-saas', component: IndexclassicSaas },
    { path: '/index-classic-app', component: ClassicApp },
    { path: '/index-saas', component: Saas },
    { path: '/index-apps', component: Apps },
    { path: '/index-agency', component: Agency },
    { path: '/index-studio', component: Studio },
    { path: '/index-business', component: Business },
    { path: '/index-marketing', component: Marketing },
    { path: '/index-hotel', component: Hotel },
    { path: '/index-modern-business', component: ModernBusiness },
    { path: '/index-coworking', component: Coworking },
    { path: '/index-hosting', component: CloudHosting },
    { path: '/index-event', component: Event },
    { path: '/index-course', component: Course },
    { path: '/index-personal', component: Personal },
    { path: '/index-single', component: SingleProduct },
    { path: '/index-enterprise', component: Enterprise },
    { path: '/index-portfolio', component: Portfolio },
    { path: '/index-services', component: Services },
    { path: '/index-shop', component: Shop },
    { path: '/index-insurance', component: Insurance },
    { path: '/index-ebook', component: Ebook },
    { path: '/index-social-marketing', component: SocialMarketing },
    { path: '/index-digital-agency', component: DigitalAgency },
    { path: '/index-online-learning', component: OnlineLearning },

    { path: '/page-aboutus', component: PageAboutUs },
    { path: '/page-pricing', component: PagePricing },
    { path: '/page-services', component: PageServices },
    { path: '/page-team', component: PageTeam },

    //Help Center
    { path: '/helpcenter-overview', component: HelpCenterOverview },
    { path: '/helpcenter-faqs', component: HelpCenterFaqs },
    { path: '/helpcenter-guides', component: HelpCenterGuides },
    { path: '/helpcenter-support-request', component: HelpCenterSupportRequest },

    //Shop
    { path: '/shop-products', component: ShopProducts },
    { path: '/shop-product-detail', component: ShopProductDetail },
    { path: '/shop-cart', component: ShopCart },
    { path: '/shop-checkouts', component: ShopCheckouts },
    { path: '/shop-myaccount', component: ShopMyAccount },

    //Utility
    { path: '/page-terms', component: PageTerms },
    { path: '/page-privacy', component: PagePrivacy },

    //Page Work
    { path: '/page-work-modern', component: PageWorkModern },
    { path: '/page-work-detail', component: PageWorkDetail },
    { path: '/page-work-classic', component: PageWorkClassic },
    { path: '/page-work-grid', component: PageWorkGrid },
    { path: '/page-work-masonry', component: PageWorkMasonry },
    
    //Page Profile
    { path: '/page-profile', component: PageProfile },
    { path: '/page-profile-edit', component: PageProfileEdit },
    { path: '/page-invoice', component: PageInvoice },

    //Page Job
    { path: '/page-job', component: PageJob },
    { path: '/page-job-apply', component: PageJobApply },
    { path: '/page-job-detail', component: PageJobDetail },
    { path: '/page-jobs-sidebar', component: PageJobsSidebar },
    { path: '/page-job-company', component: PageJobCompany },
    { path: '/page-job-candidate', component: PageJobCandidate },

    //Page Blog
    { path: '/page-blog-grid', component: PageBlog },
    { path: '/page-blog-detail', component: PageBlogDetail },
    { path: '/page-blog-sidebar', component: PageBlogSidebar },
    { path: '/page-blog-list', component: PageBlogList },
    { path: '/page-blog-list-sidebar', component: PageBlogListSidebar },

    //Page Contact
    { path: '/page-contact-one', component: PageContactOne },
    { path: '/page-contact-three', component: PageContactThree },
    { path: '/page-contact-two', component: PageContactTwo },

    //Docs
    { path: '/changelog', component: ChangeLog },
    { path: '/components', component: Components },
    { path: '/documentation', component: Documentation },
    { path: '/widget', component: Widget },
    
    //Index Main
    { path: '/index', component: Main },

    //Index root
    
    { path: '/', component: Root, isWithoutLayout : true, exact : true }, 
    { component: PageError, isWithoutLayout : true, exact : false },
    
];

export default routes;