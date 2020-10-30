import React, { Fragment } from 'react'
import Link from 'next/link'

export const Header = () => {
    return (
        <Fragment>
            <header id="masthead" className="header cmt-header-style-01">

                <div className="cmt-header-wrap">

                    <div id="cmt-stickable-header-w" className="cmt-stickable-header-w clearfix">
                        <div id="site-header-menu" className="site-header-menu">
                            <div className="site-header-menu-inner cmt-stickable-header visible-title">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">

                                            <div className="cmt-topbar-wrapper cmt-bgcolor-darkgrey cmt-textcolor-white clearfix">
                                                <div className="cmt-topbar-content">
                                                    <div className="topbar-right text-right">
                                                        <ul className="top-contact">
                                                            {/* <li><span className="tel-no"> Your Trusted 24 Hours Service Provider!</span></li> */}
                                                            <li><i className="fa fa-envelope-o"></i><a href="mailto:info@example.com.com">info@zac.mn</a></li>
                                                            <li><i className="fa fa-phone"></i>77115009</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="site-branding">
                                                <Link href="/">
                                                    <a className="home-link" title="Zac mining" rel="home">
                                                        <img id="logo-img" className="img-center" src="images/logo.png" srcSet={"images/logo-3x.png 3x, images/logo-2x.png 2x, images/logo.png 1x"} alt="logo-img" />
                                                    </a>
                                                </Link>
                                            </div>
                                            <div id="site-navigation" className="site-navigation cmt-textcolor-white">
                                                {/* 
                                                <div className="cmt-social-links-wrapper list-inline">
                                                    <ul className="social-icons square">
                                                        <li><a href="#"><i className="ti ti-facebook"></i></a>
                                                        </li>
                                                        <li><a href="#"><i className="ti ti-twitter"></i></a>
                                                        </li>
                                                        <li><a href="#"><i className="ti ti-google"></i></a>
                                                        </li>
                                                        <li><a href="#"><i className="ti ti-linkedin"></i></a>
                                                        </li>
                                                    </ul>
                                                </div> */}

                                                {/* <div className="cmt-header-icons ">
                                                    <div className="cmt-header-icon cmt-header-search-link">
                                                        <a href="#"><i className="fa fa-search"></i></a>
                                                        <div className="cmt-search-overlay">
                                                            <form method="get" className="cmt-site-searchform" action="#">
                                                                <div className="w-search-form-h">
                                                                    <div className="w-search-form-row">
                                                                        <div className="w-search-input">
                                                                            <input type="search" className="field searchform-s" name="s" placeholder="Type Word Then Enter..." />
                                                                            <button type="submit">
                                                                                <i className="ti ti-search"></i>
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    </div>
                                                </div> */}


                                                <div className="cmt-menu-toggle">
                                                    <input type="checkbox" id="menu-toggle-form" />
                                                    <label htmlFor="menu-toggle-form" className="cmt-menu-toggle-block">
                                                        <span className="toggle-block toggle-blocks-1"></span>
                                                        <span className="toggle-block toggle-blocks-2"></span>
                                                        <span className="toggle-block toggle-blocks-3"></span>
                                                    </label>
                                                </div>

                                                <nav id="menu" className="menu">
                                                    <ul className="dropdown">
                                                        <li>
                                                            <Link href="/">
                                                                <a>Нүүр хуудас</a>
                                                            </Link>
                                                        </li>
                                                        <li><a href="#">Бидний тухай</a>
                                                            <ul>
                                                                <li>
                                                                    {/* <a href="/about">Компанийн мэдээлэл</a> */}
                                                                    <Link href="/about">
                                                                        <a>Компанийн мэдээлэл</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/about-us">
                                                                        <a>Эрхэм зорилго, Алсын хараа</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Үйл ажиллагаа</a>
                                                            <ul>
                                                                <li>
                                                                    <Link href="/mining">
                                                                        <a>Олборлолт</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/#">
                                                                        <a>Баяжуулалт</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/transport">
                                                                        <a>Тээвэрлэлт</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/sales">
                                                                        <a>Борлуулалт</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>
                                                        <li><a href="#">Ажил мэргэжил</a>
                                                            <ul>
                                                                {/* <li><a href="portfolio-style-1.html">Хүний нөөц</a></li>
                                                                <li><a href="portfolio-style-2.html">Сургалт судалгаа</a></li> */}
                                                                <li>
                                                                    <Link href="/hr">
                                                                        <a>Ажлын байр</a>
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link href="/#">
                                                                        <a>Анкет</a>
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </li>

                                                        <li><a href="#footer">Холбоо барих</a></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </Fragment>
    )
}
