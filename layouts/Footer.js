import React, { Fragment } from 'react'
import Link from 'next/link'

export const Footer = () => {
    return (
        <Fragment>
            <script src="/js/jquery.min.js"></script>
            <script src="/js/tether.min.js"></script>
            <script src="/js/bootstrap.min.js"></script>
            <script src="/js/color-switcher.js"></script>
            <script src="/js/jquery.easing.js"></script>
            <script src="/js/jquery-waypoints.js"></script>
            <script src="/js/jquery-validate.js"></script>
            <script src="/js/jquery.prettyPhoto.js"></script>
            <script src="/js/moment.min.js"></script>


            <script src="/revolution/js/jquery.themepunch.tools.min.js"></script>
            <script src="/revolution/js/jquery.themepunch.revolution.min.js"></script>

            <script src="/revolution/js/extensions/revolution.extension.actions.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.carousel.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.kenburn.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.layeranimation.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.migration.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.navigation.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.parallax.min.js"></script>
            <script src="/revolution/js/extensions/revolution.extension.slideanims.min.js"></script>
            <footer className="footer widget-footer clearfix">
                <div id="footer" className="second-footer cmt-textcolor-white">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 widget-area">
                                <div className="widget widget_contact clearfix">
                                    <h3 className="widget-title upper"> Холбоо барих</h3>
                                    <ul className="font-16" style={{ columns: 2 }}>
                                        <li>
                                            <i className="fa fa-map-marker"></i>Улаанбаатар хот, Сүхбаатар дүүрэг, 1-р хороо, Олимпийн гудамж, Шангри-Ла оффис, 1204 тоот
                                        </li>
                                        <li>
                                            <i className="fa fa-phone"></i>77115009
                                        </li>
                                        <li>
                                            <i className="fa fa-envelope"></i>info@zac.mn
                                        </li>
                                        <li>
                                            <i className="fa fa-globe"></i>https://www.zac.mn/
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                                <div className="widget widget_contact clearfix">
                                    
                                    <ul className="font-16">


                                    </ul>
                                </div>
                            </div> */}
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3 widget-area">
                                <div className="widget widget_text clearfix">
                                    {/* <h3 className="widget-title">Get Free Estimate</h3> */}
                                    <div className="text-right">
                                        {/* <h3 className="widget_text_title cmt-textcolor-skincolor">123-456-78910</h3> */}
                                        <Link href="/hr">
                                            <a className="cmt-btn cmt-btn-size-md cmt-btn-shape-square cmt-btn-style-border cmt-btn-color-skincolor mt-15 mb-20">Ажлын байр</a>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer-text cmt-bgcolor-darkgrey cmt-textcolor-white">
                    <div className="container">
                        <div className="row copyright">
                            <div className="col-md-12 cmt-footer2-right">
                                <span>© 2020&nbsp;<a href="#">Zac.mn</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    )
}
