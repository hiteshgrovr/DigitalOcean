import { useState } from "react";
// import { Link, a } from "react-router-dom";

const phoneNumber = "+XXXX-XXX-XXX";
const address = "Address, India";
const email = "info@digitaloceanpub.com";


let socialList = [
    // {
    //     iconName: 'icofont-facebook-messenger',
    //     siteLink: '#',
    // },
    {
        iconName: 'icofont-linkedin',
        siteLink: '#',
    },
    {
        iconName: 'icofont-twitter',
        siteLink: '#',
    },
    {
        iconName: 'icofont-skype',
        siteLink: '#',
    }
    // {
    //     iconName: 'icofont-vimeo',
    //     siteLink: '#',
    // },
    // 
    // {
    //     iconName: 'icofont-rss-feed',
    //     siteLink: '#',
    // },
]

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const [socialToggle, setSocialToggle] = useState(false);
    const [headerFiexd, setHeaderFiexd] = useState(false);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            setHeaderFiexd(true);
        } else {
            setHeaderFiexd(false);
        }
    });

    return (
        <header className={`header-section ${headerFiexd ? "header-fixed fadeInUp" : ""}`}>
            <div className={`header-top ${socialToggle ? "open" : ""}`}>
                <div className="container">
                    <div className="header-top-area">
                        <ul className="lab-ul left">
                            <li><i className="icofont-ui-call"></i> <span>{phoneNumber}</span></li>
                            <li><i className="icofont-location-pin"></i> {address}</li>
                            <li><i className="icofont-location-mail"></i> {email}</li>
                        </ul>
                        <ul className="lab-ul social-icons d-flex align-items-center">
                            <li><p>Find us on : </p></li>
                            {socialList.map((val, i) => (
                                <li key={i}><a href={val.siteLink}><i className={val.iconName}></i></a></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header-bottom">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="logo">
                            
                            <a href="#"><img src={require("../../assets/images/logo/logo2.png")} alt="logo" style={{width:120}} /></a>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Home</a>
                                        <a href="#" role="button">Home</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="/">Home One</a></li>
                                            <li><a href="/index-2">Home Two</a></li>
                                            <li><a href="/index-3">Home Three</a></li>
                                            <li><a href="/index-4">Home Four</a></li>
                                            <li><a href="/index-5">Home Five</a></li>
                                            <li><a href="/index-6">Home Six</a></li>
                                            <li><a href="/index-7">Home Seven</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="#">Home</a></li>
                                     <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Products</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="/course">Easy Convert</a></li>
                                            <li><a href="/course-single">Imathica</a></li>
                                            <li><a href="/course-view">Alt text generator</a></li>
                                            <li><a href="/course-view">Document validator</a></li>
                                            <li><a href="/course-view">content comparison</a></li>
                                            <li><a href="/course-view">comic smart panel creator</a></li>

                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Services</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="/course">pdf manipulation</a></li>
                                            <li><a href="/course-single">ebook conversion</a></li>
                                            <li><a href="/course-view">pdf/epub/web accessibility</a></li>
                                            <li><a href="/course-view">content ingestion</a></li>
                                            <li><a href="/course-view">math conversion</a></li>
                                            <li><a href="/course-view">read aloud solution</a></li>

                                        </ul>
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Courses</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="/course">Course</a></li>
                                            <li><a href="/course-single">Course Details</a></li>
                                            <li><a href="/course-view">Course View</a></li>

                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blog</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="/blog">Blog Grid</a></li>
                                            <li><a href="/blog-2">Blog Style 2</a></li>
                                            <li><a href="/blog-3">Blog Style 3</a></li>
                                            <li><a href="/blog-single">Blog Single</a></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Pages</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><a href="/about">About</a></li>
                                            <li><a href="/team">Team</a></li>
                                            <li><a href="/instructor">Instructor</a></li>
                                            <li><a href="/shop">Shop Page</a></li>
                                            <li><a href="/shop-single">Shop Details Page</a></li>
                                            <li><a href="/cart-page">Shop Cart Page</a></li>
                                            <li><a href="/search-page">Search Page</a></li>
                                            <li><a href="/search-none">Search None</a></li>
                                            <li><a href="/404">404</a></li>
                                        </ul>
                                    </li> */}
                                    <li><a href="/contact">Contact</a></li>
                                </ul>
                            </div>

                            {/* <Link href="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link href="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link> */}

                            <div className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`} onClick={() => setMenuToggle(!menuToggle)}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <div className="ellepsis-bar d-lg-none" onClick={() => setSocialToggle(!socialToggle)}>
                                <i className="icofont-info-square"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;