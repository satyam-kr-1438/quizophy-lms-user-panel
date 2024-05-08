import { NextPage } from 'next';
import { Fragment } from 'react';

import Footer from 'components/blocks/footer/Footer';
import Testimonial from 'components/blocks/testimonial/Testimonial';
import FAQ from 'components/blocks/faq/FAQ';
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
import AboutBanner from 'components/blocks/about/AboutBanner';
import AboutServices from 'components/blocks/about/AboutServices';
import AboutTiles1 from 'components/blocks/about/AboutTiles1';
import AboutTiles2 from 'components/blocks/about/AboutTiles2';
import AboutTiles3 from 'components/blocks/about/AboutTiles3';

const About: NextPage = () => {
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
        {/* ========== hero section ========== */}
        <AboutBanner />

        <section className="wrapper bg-light">
          <div className="container pb-14 pb-md-10">
            <AboutTiles1 />

            {/* ========== service-1 section ========== */}
            <AboutServices
              bulletColor="red"
              colOne={<AboutTiles2 />}
              rowClassNames="mb-14 mb-md-18"
              title="We have considered our solutions to support every stage of growth."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            {/* ========== service-2 section ========== */}
            <AboutServices
              colOne={<AboutTiles3 />}
              bulletColor="green"
              rowClassNames="mb-14 mb-md-18"
              title="We make spending stress free so you have the perfect control."
              description="Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor
              fringilla. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Fusce dapibus,
              tellus ac cursus commodo."
            />

            <FAQ />
            <div className="" style={{marginTop:"100px"}}>
               <Testimonial />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </Fragment>
  );
};

export default About;
