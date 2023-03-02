import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

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
                            <Link to="/"><img src={require("../../assets/images/logo/logo2.png")} alt="logo" style={{width:120}} /></Link>
                        </div>
                        <div className="menu-area">
                            <div className="menu">
                                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Home</a>
                                        <a href="#" role="button">Home</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/">Home One</NavLink></li>
                                            <li><NavLink to="/index-2">Home Two</NavLink></li>
                                            <li><NavLink to="/index-3">Home Three</NavLink></li>
                                            <li><NavLink to="/index-4">Home Four</NavLink></li>
                                            <li><NavLink to="/index-5">Home Five</NavLink></li>
                                            <li><NavLink to="/index-6">Home Six</NavLink></li>
                                            <li><NavLink to="/index-7">Home Seven</NavLink></li>
                                        </ul>
                                    </li> */}
                                    <li><NavLink to="/">Home</NavLink></li>
                                     <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Products</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/course">Easy Convert</NavLink></li>
                                            <li><NavLink to="/course-single">Imathica</NavLink></li>
                                            <li><NavLink to="/course-view">Alt text generator</NavLink></li>
                                            <li><NavLink to="/course-view">Document validator</NavLink></li>
                                            <li><NavLink to="/course-view">content comparison</NavLink></li>
                                            <li><NavLink to="/course-view">comic smart panel creator</NavLink></li>

                                        </ul>
                                    </li>
                                    <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Services</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/course">pdf manipulation</NavLink></li>
                                            <li><NavLink to="/course-single">ebook conversion</NavLink></li>
                                            <li><NavLink to="/course-view">pdf/epub/web accessibility</NavLink></li>
                                            <li><NavLink to="/course-view">content ingestion</NavLink></li>
                                            <li><NavLink to="/course-view">math conversion</NavLink></li>
                                            <li><NavLink to="/course-view">read aloud solution</NavLink></li>

                                        </ul>
                                    </li>
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Courses</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/course">Course</NavLink></li>
                                            <li><NavLink to="/course-single">Course Details</NavLink></li>
                                            <li><NavLink to="/course-view">Course View</NavLink></li>

                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Blog</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/blog">Blog Grid</NavLink></li>
                                            <li><NavLink to="/blog-2">Blog Style 2</NavLink></li>
                                            <li><NavLink to="/blog-3">Blog Style 3</NavLink></li>
                                            <li><NavLink to="/blog-single">Blog Single</NavLink></li>
                                        </ul>
                                    </li> */}
                                    {/* <li className="menu-item-has-children">
                                        <a href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-bs-offset="0,0">Pages</a>
                                        <ul className="lab-ul dropdown-menu">
                                            <li><NavLink to="/about">About</NavLink></li>
                                            <li><NavLink to="/team">Team</NavLink></li>
                                            <li><NavLink to="/instructor">Instructor</NavLink></li>
                                            <li><NavLink to="/shop">Shop Page</NavLink></li>
                                            <li><NavLink to="/shop-single">Shop Details Page</NavLink></li>
                                            <li><NavLink to="/cart-page">Shop Cart Page</NavLink></li>
                                            <li><NavLink to="/search-page">Search Page</NavLink></li>
                                            <li><NavLink to="/search-none">Search None</NavLink></li>
                                            <li><NavLink to="/404">404</NavLink></li>
                                        </ul>
                                    </li> */}
                                    <li><NavLink to="/contact">Contact</NavLink></li>
                                </ul>
                            </div>

                            {/* <Link to="/login" className="login"><i className="icofont-user"></i> <span>LOG IN</span> </Link>
                            <Link to="/signup" className="signup"><i className="icofont-users"></i> <span>SIGN UP</span> </Link> */}

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