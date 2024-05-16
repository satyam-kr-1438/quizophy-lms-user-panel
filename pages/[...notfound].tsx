import { NextPage } from 'next';
import { Fragment } from 'react';

import NextLink from 'components/reuseable/links/NextLink';
import Footer from 'components/blocks/footer/Footer';
import { getAuthenticatedUserData } from 'hooks/localStorageInfo';
import DashboardNavbar from 'components/blocks/navbar/DashboardNavbar';
import DashboardNavbarModal from 'components/blocks/navbar/DashboardNavbarModal';
import AuthNavbar from 'components/blocks/navbar/AuthNavbar';
import DashboardFooter from 'components/blocks/footer/DashboardFooter';

const NotFound: NextPage = () => {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
              {getAuthenticatedUserData()?.id ?  <DashboardNavbar
                            // info
                            navOtherClass="navbar-other ms-lg-4"
                            navClassName="navbar navbar-expand-lg classic transparent navbar-light"
                            button={<DashboardNavbarModal/>}
                            />:<AuthNavbar
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
                />}
              </header>

                <main className="content-wrapper">
                  <section className="wrapper bg-light">
                    <div className="container pt-6 pb-14">
                      <div className="row">
                        <div className="col-lg-9 col-xl-8 mx-auto" style={{margin:"auto",textAlign:"center"}}>
                          <img style={{maxWidth:"270px"}} alt="Not Found" src="/img/illustrations/404PageNotFound.svg" className="my-4" />
                        </div>

                        <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                          <h1 className="mb-3">Oops! Page Not Found.</h1>
                          <p className="lead px-md-12 px-lg-5 px-xl-7">
                            The page you are looking for is not available or has been removed. Try a different page or go to
                            homepage with the button below.
                          </p>
                          {getAuthenticatedUserData()?.id ? <NextLink title="Go to Homepage" href="/dashboard/quizzes" className="btn btn-primary rounded-pill" />:<NextLink title="Go to Homepage" href="/" className="btn btn-primary rounded-pill" />}
                        </div>
                      </div>
                    </div>
                  </section>
                </main>

      {/* ========== footer section ========== */}
      {getAuthenticatedUserData()?.id?<footer className="footer_container_dashboard_content">
                  <DashboardFooter/>
                </footer>:<Footer />}
    </Fragment>
  );
};

export default NotFound;
