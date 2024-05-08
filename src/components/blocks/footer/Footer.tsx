import { FC } from 'react';
// -------- custom component -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// -------- data -------- //
import footerNav, { footerNav2 } from 'data/footer';

const Footer: FC = () => {
  return (
    <footer className="bg-gray">
      <div className="container py-13 py-md-15">
        <div className="d-lg-flex flex-row align-items-lg-center">
          <h3 className="display-3 ls-sm mb-6 mb-lg-0 pe-lg-20 pe-xl-22 pe-xxl-25">
            Join our community by using our services and grow your business.
          </h3>

          <a
               href="#"
               data-bs-toggle="modal"
               data-bs-target="#modal-signin"
               className="btn btn-sm btn-primary rounded-pill"
          >
               GET STARTED
          </a>
        </div>

        <hr className="mt-11 mb-12" />
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <img className="mb-4" style={{width:"180px"}} src="/img/logo-dark.png" srcSet="/img/logo-dark@2x.png 2x" alt="" />
              <div>
                  <address className="" style={{fontSize:"14px"}}>RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan 302020</address>
                  <a href="mailto:admin@quizophy.com" style={{fontSize:"14px"}} className="link-body">
                    admin@quizophy.com
                  </a>
                  <br />  <a href="tel:+91 9672858858" style={{fontSize:"14px"}} className="link-body">
                  +91 9672858858
                  </a>
              </div>

              {/* <p className="mb-4">
                © {new Date()?.getFullYear()} Quizophy. <br className="d-none d-lg-block" />
                All rights reserved.
              </p> */}
              {/* <div className="widget"> */}
                  {/* <address className="pe-xl-15 pe-xxl-17" style={{fontSize:"14px"}}>RIICO Industrial Area, Mansarovar, Jaipur, Rajasthan 302020</address>
                  <a href="mailto:#" style={{fontSize:"14px"}} className="link-body">
                    admin@quizophy.com
                  </a>
                  <br />  <a href="tel:+91 9672858858" style={{fontSize:"14px"}} className="link-body">
                  +91 9672858858
                  </a> */}
            {/* </div> */}

              <SocialLinks className="nav social social-muted" />
            </div>
          </div>

          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Resources</h4>
              <ul className="list-unstyled text-reset mb-0">
                {footerNav.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-4 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Resources</h4>
              <ul className="list-unstyled text-reset mb-0">
                {footerNav2.map(({ title, url }) => (
                  <li key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="col-md-12 col-lg-3">
            <div className="widget">
              <h4 className="widget-title ls-sm mb-3">Our Newsletter</h4>
              <p className="mb-5">Subscribe to our newsletter to get our news & deals delivered to you.</p>
              <div className="newsletter-wrapper">
                <div id="mc_embed_signup2">
                  <form
                    action="#"
                    method="post"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    className="validate "
                    target="_blank"
                    noValidate
                  >
                    <div id="mc_embed_signup_scroll2">
                      <div className="mc-field-group input-group form-floating">
                        {/* <input
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL2"
                          placeholder="Get Started"
                          className="required email form-control"
                        /> */}
                        {/* <label htmlFor="mce-EMAIL2">Get Started</label>
                        <input
                          type="submit"
                          value="Join"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        /> */}
                          <a
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#modal-signin"
                            className="btn btn-sm btn-primary rounded-pill"
                          >
                            FREE SIGN-UP !
                          </a>
                      </div>

                      {/* <div id="mce-responses2" class="clear">
                    <div class="response" id="mce-error-response2" style="display:none"></div>
                    <div class="response" id="mce-success-response2" style="display:none"></div>
                  </div> 

                  <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" tabindex="-1" value=""></div>
                  <div class="clear"></div> */}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
