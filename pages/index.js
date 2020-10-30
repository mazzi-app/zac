import Head from 'next/head'
import { Header } from '../layouts/Header'
import { Slider } from '../components/Slider'
import { Fragment } from 'react'
import { About } from '../components/About'
import { Service } from '../components/Service'
import { Footer } from '../layouts/Footer'

class Home extends React.Component {

  componentDidMount() {
    $("#rev_slider_5_1").show().revolution({
      sliderType: "standard",
      sliderLayout: "auto",
      dottedOverlay: "none",
      delay: 9000,
      navigation: {
        keyboardNavigation: "off",
        keyboard_direction: "horizontal",
        mouseScrollNavigation: "off",
        mouseScrollReverse: "default",
        onHoverStop: "off",
        touch: {
          touchenabled: "on",
          swipe_threshold: 75,
          swipe_min_touches: 1,
          swipe_direction: "horizontal",
          drag_block_vertical: false
        }
        ,
        arrows: {
          style: "zeus",
          enable: true,
          hide_under: 991,
          hide_onleave: true,
          tmp: '',
          left: {
            h_align: "left",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          },
          right: {
            h_align: "right",
            v_align: "center",
            h_offset: 20,
            v_offset: 0
          }
        }
      },
      viewPort: {
        enable: true,
        outof: "pause",
        visible_area: "100%",
        presize: false
      },
      responsiveLevels: [1240, 1024, 778, 480],
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1240, 1024, 778, 480],
      gridheight: [700, 700, 480, 360],
      lazyType: "none",
      parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 2000,
        levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50, 46, 47, 48, 49, 50, 55],
        type: "mouse",
      },
      shadow: 0,
      spinner: "off",
      stopLoop: "off",
      stopAfterLoops: -1,
      stopAtSlide: -1,
      shuffle: "off",
      autoHeight: "off",
      disableProgressBar: "on",
      hideThumbsOnMobile: "off",
      hideSliderAtLimit: 0,
      hideCaptionAtLimit: 0,
      hideAllCaptionAtLilmit: 0,
      debugMode: false,
      fallbacks: {
        simplifyAll: "off",
        nextSlideOnWindowFocus: "off",
        disableFocusListener: false,
      }
    });

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
          <Slider />
          <main className="site-main">
            <About />
            <Service />
          </main>
          <Footer />
        </div>


      </Fragment>
    )
  }
}

export default Home;
