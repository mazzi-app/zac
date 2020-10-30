import React, { Fragment } from 'react'
import Head from 'next/head'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'

class Sales extends React.Component {

    componentDidMount() {
        this.addMainjs()
    }

    addMainjs() {
        const script = document.createElement("script");
        script.src = "js/main.js"
        script.async = true;
        document.body.appendChild(script);
    }

    render() {
        return (
            <Fragment>
                <Head>
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="viewport" content="height=device-height,  width=device-width, initial-scale=1,  minimum-scale=1" />
                    <meta name="description" content="ZAC MINING, Уул уурхайн үндэсний олборлогч" />
                    <meta name="msapplication-TileColor" content="#0a0a0a" />
                    <meta name="theme-color" content="#fe982f" />
                    <link rel="manifest" href="manifest.json" />
                    <meta charSet="utf-8" />
                    <meta property="og:url" content="https://zac.mn/" />

                    <title> Zac.mn - Уул уурхайн үндэсний олборлогч </title>

                    <link rel="shortcut icon" href="images/favicon.png" />

                    <link rel="stylesheet" type="text/css" href="css/fontello.css" media="all" />
                    <link rel="stylesheet" type="text/css" href="revolution/css/layers.css" media="all" />
                    <link rel="stylesheet" type="text/css" href="revolution/css/settings.css" media="all" />

                </Head>
                <div className="page">
                    <Header />
                    <div className="cmt-page-title-row">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="title-box">
                                        <div className="page-title-heading">
                                            <h1 className="title upper">Үйл ажиллагаа</h1>
                                        </div>
                                        {/* <div className="breadcrumb-wrapper">
                                        <span>
                                            <a title="Homepage" href="index.html"><i className="ti ti-home"></i> Home</a>
                                        </span>
                                        <span className="cmt-bread-sep"><i className="fa fa-angle-double-right" aria-hidden="true"></i></span>
                                        <span><span>About Us 1</span></span>
                                    </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <main className="site-main">

                        <section className="cmt-row about-section bg-img1 clearfix">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-sm-12">

                                        <div className="cmt_single_image-wrapper">
                                            <img className="img-fluid" src="images/section-image/sales.jpg" alt="" />
                                        </div>

                                        <div className="cmt-play-icon cmt-center-video-icon style1" style={{ top: "38%", marginLeft: 0 }}>
                                            <div className="cmt-play-icon-animation">
                                                <div className="cmt-icon cmt-icon_element-fill cmt-icon_element-color-skincolor cmt-icon_element-background-color-white cmt-icon_element-size-md cmt-icon_element-style-round">
                                                    <i className="flaticon flaticon-engineer-working"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="res-991-mt-30">

                                            <div className="section-title clearfix">
                                                <div className="title-header">
                                                    <h5>Үйл ажиллагаа</h5>
                                                    <h2 className="title">Борлуулалт</h2>
                                                </div>
                                            </div>
                                            <p>
                                                ЗАК МАЙНИНГ ХХК нь Дорноговь аймгийн Даланжаргалан сумын нутагт байрлах Далангийн уурхайгаас нүүрс олборлон БНХАУлсын зах зээлрүү нүүрс экспортын үйл ажиллагааг хийж гүйцэтгэж байна.
                                        </p>
                                            <p>
                                                2020 оны эхний хагасын байдлаар нийт 800.000тн нүүрс борлуулснаас 300.000тн нь баяжуулсан нүүрс байна.
                                        </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                    </main>
                    <Footer />
                </div>

            </Fragment>
        )
    }
}

export default Sales
