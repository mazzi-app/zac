import React, { Fragment } from 'react'
import Head from 'next/head'
import { Header } from '../layouts/Header'
import { Footer } from '../layouts/Footer'

class About extends React.Component {

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
                                            <h1 className="title upper">Бидний тухай</h1>
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
                                            <img className="img-fluid" src="images/section-image/about.jpg" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-sm-12">
                                        <div className="res-991-mt-30">

                                            <div className="section-title clearfix">
                                                <div className="title-header">
                                                    <h5>Бидний тухай</h5>
                                                    <h2 className="title">Компанийн мэдээлэл</h2>
                                                </div>
                                            </div>
                                            <p>
                                                ЗАК МАЙНИНГ ХХК нь 2019 оноос уул уурхайн техникийн түрээс, хөрс хуулалт, олборлолт, нүүрс баяжуулалт, тээвэр ложистик, гадаад худалдааны чиглэлээр үйл ажиллагаа явуулахаар үүсгэн байгуулагдаж одоогоор 1 сард 2 сая м.куб хөрс хуулах хүчин чадал бүхий ИТА техник тоног төхөөрөмжийн бүрэлдэхүүнтэй ажиллаж байна.
                                        </p>
                                            <p>
                                                Дорноговь аймгийн Даланжаргалан сумын нутаг дэвсгэрт орших Далангийн уурхайд хөрс хуулалт, нүүрс олборлолт, баяжуулалт, тээвэр, борлуулалтын ажлыг гүйцэтгэж байгаа ба
                                                2020 оны эхний хагаст нийт 800.000тн нүүрс олборлож үүнээс 300.000тн нүүрсийг баяжуулан БНХАУ-ын зах зээлд борлуулалт хийсэн байна.
                                        </p>
                                            <p>
                                                2020 оны 5-р сараас эхлэн Төв аймгийн Заамар, Булган аймгийн Бүрэгхангай сумын нутаг дэвсгэрт байрлах Туулын Дэнж гэх талбайд хөрс хуулалт, олборлолтын ажлыг эхлүүлэн ажиллаж байна.
                                        </p>
                                            <p>
                                                Манай хамт олон үндэсний бүтээн байгуулалтын төслүүдэд гар бие оролцож, дотоодын болон олон улсын нэр хүндтэй компаниудаас суралцан адил стандарт норм, дүрэм журмыг баримтлан ажиллаж, эх орныхоо хөгжилд хувь нэмэр оруулан ҮНДЭСНИЙ ТОП ОЛБОРЛОГЧ компани болох зорилго эрмэлзэлтэй ажиллаж байна
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

export default About
