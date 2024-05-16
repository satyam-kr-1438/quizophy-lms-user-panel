import { Fragment } from 'react';
import type { NextPage } from 'next';
import PageProgress from 'components/common/PageProgress';
import Carousel from 'components/reuseable/Carousel';
import { useRouter } from 'next/router';
const Home: NextPage = () => {
    const Router=useRouter()
  return (
    <Fragment>
      <PageProgress />
      <main className="content-wrapper" >
        {/* ========== hero section ========== */}
        <section className="wrapper overflow-hidden">
          <div className="mb-10" style={{height:"70vh"}}>
            <Carousel
              loop
              updateOnWindowResize
              speed={5000}
              spaceBetween={40}
              navigation={false}
              pagination={false}
              slidesPerView="auto"
              autoplay={{ delay: 5000 }}
            //   wrapperClass="swiper-wrapper ticker"
            //   className="overflow-visible pe-none"
            >
                <div className="slider_item_custom">
                  <img src={`/img/festro/splash-1.jpg`}  alt="Index" />
                </div>
                <div className="slider_item_custom">
                  <img src={`/img/festro/splash-2.jpg`}  alt="Index" />
                </div>
                <div className="slider_item_custom">
                 <img src={`/img/festro/splash-3.jpg`}  alt="Index" />
                </div>
                
            </Carousel>
          </div>
          <div className="festro_text_btn_container_landing">
                <div className="content_btn_container_festro">
                    <div>
                        <h4 className="h4_tag_festro">Find the best consultants</h4>
                    </div>
                    <div>
                        <p className="p_tag_festro">Choose the best cunsultant you want, for your event</p>
                    </div>
                </div>
                <div className="festron_btn_container text-center mx-auto py-2">
                    <button className='btn_dark_festro' onClick={()=>{
                        Router.push("/login")
                    }}>Get Started</button>
                </div>
          </div>
         
          {/* <div className="swiper-container swiper-auto swiper-auto-xs mb-10 mb-md-12">
            <Carousel
              loop
              updateOnWindowResize
              speed={7000}
              spaceBetween={40}
              navigation={false}
              pagination={false}
              slidesPerView="auto"
              autoplay={{ delay: 1 }}
              wrapperClass="swiper-wrapper ticker"
              className="overflow-visible pe-none"
              dir="rtl"
            >
              {[1, 2, 3, 4, 5, 6, 7].map((num) => (
                <figure className="rounded-xl shadow-xl" key={num}>
                  <img src={`/img/photos/ma${num}.jpg`} srcSet={`/img/photos/ma${num}@2x.jpg 2x`} alt="Index" />
                </figure>
              ))}
            </Carousel>
          </div> */}
        </section>

        {/* <section className="wrapper bg-soft-primary" id="demos">
          <div className="container pt-16 pt-mb-18">
            <div className="row mb-10">
              <div className="col-md-9 col-lg-8 col-xl-7 col-xxl-6 mx-auto">
                <div className="counter-wrapper">
                  <h3 className="fs-70 mb-3 text-primary text-center counter">34</h3>
                </div>

                <h2 className="display-2 mb-3 text-center mb-0 px-xxl-8">
                  Functional, impressive and rich demos to start with
                </h2>
              </div>
            </div>

            <div className="demos-wrapper text-center mb-16 mb-md-18">
              <h2 className="fs-17 text-uppercase text-muted mb-6">New Demos</h2>

              <div className="row mb-10 gx-md-8 gy-12">
                {[18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34].map((item) => (
                  <div className="col-md-6 col-lg-4" key={item}>
                    <figure className="lift rounded-xl mb-6" title="Click to see the demo">
                      <a href={`/demo-${item}`} target="_blank">
                        <img
                          alt="Index"
                          className="shadow-xl"
                          src={`/img/demos/d${item}.jpg`}
                          srcSet={`/img/demos/d${item}@2x.jpg 2x`}
                        />
                      </a>
                    </figure>

                    <h2 className="fs-22 mb-0">
                      <NextLink title={`Layout ${item}`} href={`/demo-${item}`} className="link-dark" />
                    </h2>
                  </div>
                ))}

                <div className="col-md-6 col-lg-4 d-none d-md-flex align-items-center justify-content-center flex-column">
                  <Layers />

                  <h3 className="fs-17 text-uppercase text-muted mb-4">Scroll for more</h3>

                  <a href="#prev-demos" className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl mx-1 scroll">
                    Previous Demos <i className="uil uil-arrow-down-right" />
                  </a>
                </div>
              </div>

              <h2 className="fs-17 text-uppercase text-muted pt-16 mt-n8 mb-6" id="prev-demos">
                Previous Demos
              </h2>

              <div className="row mb-10 gx-md-8 gy-12">
                {Array.from({ length: 17 }).map((_, i) => {
                  const num = i + 1;

                  return (
                    <div className="col-md-6 col-lg-4" key={num}>
                      <figure className="lift rounded-xl mb-6" title="Click to see the demo">
                        <a href={`/demo-${num}`} target="_blank">
                          <img
                            alt="Index"
                            className="shadow-xl"
                            src={`/img/demos/d${num}.jpg`}
                            srcSet={`/img/demos/d${num}@2x.jpg 2x`}
                          />
                        </a>
                      </figure>

                      <h2 className="fs-22 mb-0">
                        <NextLink title={`Layout ${num}`} href={`/demo-${num}`} className="link-dark" />
                      </h2>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="row mb-8 text-center">
              <div className="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <h2 className="display-2 mt-3 mb-3 mb-0 px-lg-10 px-xl-0">
                  Save your time and money by choosing Sandbox for your website.
                </h2>
              </div>
            </div>

            <div className="row mb-12 mb-md-14">
              <div className="col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <div className="row align-items-center counter-wrapper gy-6 text-center">
                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={250} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">UI elements</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={130} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">Pre-made blocks</p>
                  </div>

                  <div className="col-md-4">
                    <h3 className="counter fs-50 text-primary mb-1">
                      <CountUp end={100} suffix="+" />
                    </h3>
                    <p className="fs-18 mb-0">Neatly coded pages</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gx-lg-0 gy-10 align-items-center mb-16 mb-md-18">
              <div className="col-lg-7 position-relative">
                <div
                  className="position-absolute"
                  style={{
                    zIndex: 0,
                    top: '50%',
                    left: '50%',
                    width: '140%',
                    height: 'auto',
                    transform: 'translate(-50%,-50%)'
                  }}
                >
                  <img className="w-100" src="/img/photos/blurry.png" alt="Index" />
                </div>

                <figure className="position-relative" style={{ zIndex: 2 }}>
                  <img src="/img/photos/mi1.png" srcSet="/img/photos/mi1@2x.png 2x" alt="Index" />
                </figure>
              </div>

              <div className="col-lg-4 ms-auto">
                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Puzzle className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Color and Font Options</h4>
                    <p className="mb-0">Easily customize colors and fonts, or choose from provided options.</p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <PenTool className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Cool Features & Elements</h4>
                    <p className="mb-0">Equipped with stunning features and elements for designing appealing pages.</p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Share className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Modern Portfolio Layouts</h4>
                    <p className="mb-0">
                      Effortlessly create and maintain a visually stunning and impactful portfolio.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row gx-lg-0 gy-10 align-items-center">
              <div className="col-lg-7 position-relative order-lg-2">
                <div
                  className="position-absolute"
                  style={{
                    zIndex: 0,
                    top: '50%',
                    left: '50%',
                    width: '140%',
                    height: 'auto',
                    transform: 'translate(-50%,-50%)'
                  }}
                >
                  <img className="w-100" src="/img/photos/blurry.png" alt="Index" />
                </div>

                <figure className="position-relative" style={{ zIndex: 2 }}>
                  <img src="/img/photos/mi2.png" srcSet="/img/photos/mi2@2x.png 2x" alt="Index" />
                </figure>
              </div>

              <div className="col-lg-4 me-auto">
                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Devices className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Well-Written Code</h4>
                    <p className="mb-0">Pixel-perfect and easily editable code with comprehensive comments.</p>
                  </div>
                </div>

                <div className="d-flex flex-row mb-6">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <Safe className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Gorgeous Shop Layouts</h4>
                    <p className="mb-0">
                      Present your products to your visitors in an efficient and visually appealing manner.
                    </p>
                  </div>
                </div>

                <div className="d-flex flex-row">
                  <div>
                    <div className="svg-bg bg-white rounded-xl shadow-xl me-5">
                      <GlobeTwo className="solid-duo text-grape-fuchsia" />
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-1">Fully Responsive Layouts</h4>
                    <p className="mb-0">
                      Adjusts to varying screen sizes, ensuring seamless compatibility across all devices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mb-8 text-center mt-17 mt-md-19 mb-9 mb-md-11">
              <div className="col-md-11 col-lg-10 col-xl-8 col-xxl-7 mx-auto">
                <h2 className="display-2 mb-0 px-lg-10 px-xl-0">
                  Build your website using the powerful features of Sandbox
                </h2>
              </div>
            </div>
          </div>

          <div className="container-fluid px-xl-0 pb-16 pb-md-18">
            <div className="swiper-container swiper-auto">
              <Carousel
                loop
                grabCursor
                spaceBetween={40}
                pagination={false}
                navigation={false}
                slidesPerView="auto"
                className="overflow-visible"
              >
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <figure className="rounded-xl shadow-xl" key={item}>
                    <img src={`/img/photos/bp${item}.jpg`} srcSet={`/img/photos/bp${item}@2x.jpg 2x`} alt="Index" />
                  </figure>
                ))}
              </Carousel>
            </div>
          </div>

          <div className="container pb-6 pb-md-8">
            <div className="row row-cols-2 row-cols-md-4 row-cols-lg-5 gx-md-8 gy-10 text-center justify-content-center pb-16 pb-md-18">
              <div className="col">
                <img className="mb-4" src="/img/svg/next.js-circle.svg" alt="Index" />
                <h4>
                  Built with Next.js <br /> & React
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi1.png" srcSet="/img/demos/fi1@2x.png 2x" alt="Index" />
                <h4>
                  Bootstrap 5 <br /> & Sass
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/svg/typescript.svg" alt="Index" />
                <h4>
                  Typescript <br /> Clean & Organized
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi11.png" srcSet="/img/demos/fi11@2x.png 2x" alt="Index" />
                <h4>
                  Server side <br /> Rendered
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi2.png" srcSet="/img/demos/fi2@2x.png 2x" alt="Index" />
                <h4>
                  SEO-friendly <br /> Coding
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi4.png" srcSet="/img/demos/fi4@2x.png 2x" alt="Index" />
                <h4>
                  Retina-ready <br /> Graphics
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi5.png" srcSet="/img/demos/fi5@2x.png 2x" alt="Index" />
                <h4>
                  One-page <br /> Layout Option
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi6.png" srcSet="/img/demos/fi6@2x.png 2x" alt="Index" />
                <h4>
                  Isotope <br /> Filterable Gallery
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi8.png" srcSet="/img/demos/fi8@2x.png 2x" alt="Index" />
                <h4>
                  Contact Form <br /> w/o Page Refresh
                </h4>
              </div>

              <div className="col">
                <img className="mb-4" src="/img/demos/fi10.png" srcSet="/img/demos/fi10@2x.png 2x" alt="Index" />
                <h4>
                  Top-Notch Support <br /> & Free Updates
                </h4>
              </div>
            </div>

            <div className="row gx-lg-8 gx-xl-12 gy-10 align-items-center">
              <div className="col-lg-7 position-relative">
                <div
                  className="position-absolute"
                  style={{
                    top: '50%',
                    left: '50%',
                    width: '130%',
                    height: 'auto',
                    transform: 'translate(-50%,-50%)'
                  }}
                >
                  <img className="w-100" src="/img/photos/blurry.png" alt="Index" />
                </div>

                <div className="row gx-md-5 gy-5">
                  <div className="col-md-6 col-xl-5 align-self-end">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “Sandbox is really attractive and it saves my time. The support team is really amazing.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">stevenstrange</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 align-self-end">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “This is just next level stuff in terms of quality, docs and features. I don't think I'm
                            going to need or tolerate any other template from now on.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">70656e6973</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 col-xl-5 offset-xl-1">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “I've been a Themeforest user for almost 10 years and I have purchased well over 100 themes
                            during my time. This theme is amongst the best here.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">bmwe92m3</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6 align-self-start">
                    <div className="card shadow-xl rounded-xl">
                      <div className="card-body">
                        <blockquote className="icon mb-0">
                          <p>
                            “Simply the best templates that I have bought so far. Super clean code, intuitive
                            documentations, and most important of all the best design.”
                          </p>
                          <div className="blockquote-details">
                            <div className="info p-0">
                              <h5 className="mb-0">oziuji</h5>
                            </div>
                          </div>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <h2 className="display-2 mb-4 mt-lg-n6">Our top priority is ensuring customer satisfaction.</h2>
                <p className="lead fs-22 mb-6">Don't take our word for it. Hear from customers about Sandbox.</p>
                <a
                  href="https://1.envato.market/Rygn0y"
                  className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl"
                  target="_blank"
                >
                  All Reviews <i className="uil uil-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </section> */}

        {/* ========== think unique and make section ========== */}
        {/* <section className="wrapper overflow-hidden">
          <div className="container pt-16 pt-md-18 text-center position-relative">
            <div className="position-absolute" style={{ top: '-7%', left: '50%', transform: 'translateX(-50%)' }}>
              <img src="/img/photos/blurry.png" alt="Index" />
            </div>

            <div className="row position-relative mb-9 mb-md-11">
              <div className="col-lg-10 col-xl-9 col-xxl-7 mx-auto">
                <div>
                  <img src="/img/demos/icon-grape.png" srcSet="/img/demos/icon-grape@2x.png 2x" alt="Index" />
                  <h1 className="display-1 fs-64 mt-5 mb-5">Think unique and make a difference with Sandbox.</h1>
                  <p className="lead fs-24 mb-8 px-lg-12 px-xl-14 px-xxl-10">
                    We are trusted by thousands of clients. Join them now and easily create your stunning website in no
                    time.
                  </p>
                </div>

                <div className="d-flex justify-content-center">
                  <span>
                    <a
                      href="https://cutt.ly/P4rW6e4"
                      className="btn btn-lg btn-primary btn-icon btn-icon-end rounded-xl"
                      target="_blank"
                    >
                      Buy Sandbox <i className="uil uil-arrow-up-right" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="container text-center">
            <img
              className="img-fluid position-relative"
              style={{ zIndex: 2 }}
              src="/img/demos/f1.png"
              srcSet="/img/demos/f1@2x.png 2x"
              alt="Index"
            />
          </div>
        </section> */}
      </main>
    </Fragment>
  );
};

export default Home;