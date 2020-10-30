import React, { Fragment } from 'react'
import Link from 'next/link'

export const Service = () => {
    return (
        <Fragment>
            <section className="cmt-row service-section bg-white clearfix">
                <div className="container">
                    <div className="row">
                        <div className="col-1 col-md-2 col-lg-3"></div>
                        <div className="col-10 col-md-8 col-lg-6">

                            <div className="section-title with-desc text-center clearfix">
                                <div className="title-header">
                                    {/* <h5>WORKING WITH EXCELLENT</h5> */}
                                    <h2 className="title upper">Үйл ажиллагаа</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-1 col-md-2 col-lg-3"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">

                            <div className="featured-icon-box style1 left-icon icon-align-top">
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-border cmt-icon_element-color-skincolor cmt-icon_element-size-md cmt-icon_element-style-square">
                                        <i className="flaticon flaticon-tractor"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">

                                        <Link href="mining">
                                            <a aria-label="mining"><h5>Олборлолт</h5></a>
                                        </Link>

                                    </div>
                                    <div className="separator">
                                        <div className="sep-line mt-10 mb-15"></div>
                                    </div>
                                    <div className="featured-desc font-16">
                                        <p>
                                            ЗАК МАЙНИНГ ХХК нь Дорноговь аймгийн Даланжаргалан сумын нутаг дэвсгэрт орших Далангийн уурхайд хөрс хуулалт, нүүрс олборлолтын ажил гүйцэтгэж байна.
                                        </p>
                                    </div>
                                    <Link href="mining">
                                        <a aria-label="mining" className="cmt-icon cmt-icon_element-border cmt-icon_element-color-white cmt-icon_element-size-xs cmt-icon_element-style-round">
                                            <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="featured-icon-box style1 left-icon icon-align-top">
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-border cmt-icon_element-color-skincolor cmt-icon_element-size-md cmt-icon_element-style-square">
                                        <i className="flaticon-truck"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">

                                        <Link href="transport">
                                            <a aria-label="transport"><h5>Тээвэрлэлт</h5></a>
                                        </Link>

                                    </div>
                                    <div className="separator">
                                        <div className="sep-line mt-10 mb-15"></div>
                                    </div>
                                    <div className="featured-desc font-16">
                                        <p>
                                            ЗАК МАЙНИНГ ХХК нь Дорноговь аймгийн Даланжаргал сумын нутаг дэвсгэрт байрлах Далангийн уурхайгаас БНХАУлсын Эрээн хот хүртэлх нүүрс тээвэрлэлтийн ажлыг хийж гүйцэтгэдэг.
                                        </p>
                                    </div>
                                    <Link href="transport">
                                        <a aria-label="transport" className="cmt-icon cmt-icon_element-border cmt-icon_element-color-white cmt-icon_element-size-xs cmt-icon_element-style-round">
                                            <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>


                        </div>
                        <div className="col-lg-4">
                            <div className="featured-icon-box text-center style2 box-shadow">
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-bgcolor-skincolor cmt-icon_element-size-md cmt-icon_element-style-round">
                                        <i className="flaticon flaticon-pick-mattock"></i>
                                    </div>
                                </div>
                                <div className="featured-content mt-25">
                                    <div className="featured-title">
                                        <h5></h5>
                                    </div>
                                    <div className="highlight-box cmt-textcolor-white cmt-bgcolor-darkgrey">
                                        <p></p>
                                        <h5>ЗАК МАЙНИНГ ХХК</h5>
                                    </div>
                                    <a href="#" className="cmt-textcolor-skincolor" aria-label="Zac mining"></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="featured-icon-box style1 left-icon icon-align-top">
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-border cmt-icon_element-color-skincolor cmt-icon_element-size-md cmt-icon_element-style-square">
                                        <i className="flaticon flaticon-tripod"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">

                                        <Link href="#">
                                            <a aria-label="#"> <h5>Баяжуулалт</h5></a>
                                        </Link>

                                    </div>
                                    <div className="separator">
                                        <div className="sep-line mt-10 mb-15"></div>
                                    </div>
                                    <div className="featured-desc font-16">
                                        <p>2020 оны эхний хагаст нийт 300.000тн нүүрсийг баяжуулсан байна.</p>
                                        <p>&nbsp;</p>

                                    </div>
                                    <Link href="#">
                                        <a aria-label="#" className="cmt-icon cmt-icon_element-border cmt-icon_element-color-white cmt-icon_element-size-xs cmt-icon_element-style-round">
                                            <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="featured-icon-box style1 left-icon icon-align-top">
                                <div className="featured-icon">
                                    <div className="cmt-icon cmt-icon_element-border cmt-icon_element-color-skincolor cmt-icon_element-size-md cmt-icon_element-style-square">
                                        <i className="flaticon flaticon-engineer-working"></i>
                                    </div>
                                </div>
                                <div className="featured-content">
                                    <div className="featured-title">

                                        <Link href="sales">
                                            <a aria-label="sales"><h5>Борлуулалт</h5></a>
                                        </Link>

                                    </div>
                                    <div className="separator">
                                        <div className="sep-line mt-10 mb-15"></div>
                                    </div>
                                    <div className="featured-desc font-16">
                                        <p>
                                            Далангийн уурхайгаас нүүрс олборлон БНХАУлсын зах зээлрүү нүүрс экспортын үйл ажиллагааг хийж гүйцэтгэж байна.
                                        </p>
                                    </div>
                                    <Link href="sales">
                                        <a aria-label="sales" className="cmt-icon cmt-icon_element-border cmt-icon_element-color-white cmt-icon_element-size-xs cmt-icon_element-style-round">
                                            <i className="fa fa-angle-double-right"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}
