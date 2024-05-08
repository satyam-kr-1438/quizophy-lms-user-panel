import { NextPage } from 'next';
import { Fragment } from 'react';
// -------- custom component -------- //
import Breadcrumb from 'components/reuseable/Breadcrumb';
import ContactForm from 'components/common/ContactForm';
import Footer from 'components/blocks/footer/Footer';
import Testimonial from 'components/blocks/testimonial/Testimonial';
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
// -------- data -------- //
const breadcrumb = [
  { id: 1, title: 'Home', url: '/' },
  { id: 2, title: 'Contact', url: '#' }
];

const Contact: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
      <AuthNavbar
          // info
          navOtherClass="navbar-other ms-lg-4"
          navClassName="navbar navbar-expand-lg classic transparent navbar-light"
          button={
            <a
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#modal-signin"
              className="btn btn-sm btn-primary py-1 px-2"
              style={{fontWeight:"400",fontSize:"14px"}}
            >
              Sign In
            </a>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image bg-overlay bg-overlay-400 text-white"
          style={{ backgroundImage: 'url(/img/photos/bg3.jpg)' }}
        >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 mb-3 text-white">Get in Touch</h1>
                <Breadcrumb className="text-white" data={breadcrumb} />
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container pb-11">
            {/* ========== contact info section ========== */}
            <div className="row mb-14 mb-md-16">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe
                          allowFullScreen
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.2664983590325!2d75.77718077489223!3d26.831474763577962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db53ec539d1a9%3A0xaa99c6cc4d336ebe!2sQuizophy%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1706078092898!5m2!1sen!2sin"
                          style={{ width: '100%', height: '100%', border: 0 }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1">Address</h5>
                            <address>
                            RIICO Industrial Area, Mansarovar, <br className="d-none d-md-block" />
                            Jaipur, Rajasthan 302020
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">Phone</h5>
                            <p className="mb-0">
                              <a href="tel:+91 9672858858" className="link-body">
                                +91 9672858858
                              </a>
                            </p>
                            <p className="mb-0">
                              <a href="tel:+91 9672858858" className="link-body">
                                +91 9672858858
                              </a>
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:admin@quizophy.com" className="link-body">
                                admin@quizophy.com
                              </a>
                            </p>
                            <p className="mb-0">
                              <a href="mailto:support@quizophy.com" className="link-body">
                                support@quizophy.com
                              </a>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-4 mb-3 text-center">Say Hello!!</h2>
                <p className="lead text-center mb-10">
                  Reach out to us from our contact form and we will get back to you shortly.
                </p>

                <ContactForm />

              </div>
            </div>
          </div>
        </div>
      </main>

      {/* ========== footer section ========== */}
      <section className="wrapper" style={{marginTop:"10px"}}>
          <div className="container">
            <div className="">
               <Testimonial />
            </div>
          </div>
        </section>


      <Footer />
    </Fragment>
  );
};

export default Contact;
