import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';
import { BsSearch } from 'react-icons/bs';

const ConsultantNotFound:FC = () => {
    const Router=useRouter()
    const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:true,
        autoplaySpeed:2000,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 400,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 311,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <Fragment>
        <PageProgress/>
        <div className="main_featro_container margin_bootom_every_component">
        
                <div className="container-fluid my-3">
                        <div className="row home_slider_section">
                            <div>
                            <div className="search_box_home_notfound">
                                       <span className="search_icon_not_found">
                                          <BsSearch/>
                                       </span>
                                       <input type="text" className="form-control py-2 px-4"  placeholder='Search...' />
                                       <span className="search_cross_icon_not_found">
                                          <svg width="18" height="18" viewBox="0 0 36 36" data-testid="close-icon"><path d="M28.5 9.62L26.38 7.5 18 15.88 9.62 7.5 7.5 9.62 15.88 18 7.5 26.38l2.12 2.12L18 20.12l8.38 8.38 2.12-2.12L20.12 18z"></path></svg>
                                       </span>
                              </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid last_section_home_page">
                        <div className="row home_slider_section">
                           <div className="col-12 not_found_container">
                                <div className='not_found_img'>
                                    <img src="/img/festro/consultant_not_found.png" alt="Consultant"/>
                                </div>
                                <div className="not_found_heading_p">
                                    <h4>Not Found !!</h4>
                                    <p>Sorry, the Key you entered cannot be
                                    found, please check again or search with
                                    another keyword</p>
                                </div>
                           </div>
                        </div>
                    </div>
                          
        </div>
    </Fragment>
  )
}

export default ConsultantNotFound