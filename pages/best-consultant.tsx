import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { FC, Fragment, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { useRouter } from 'next/router';
import ConsultantNotFound from 'components/common/ConsultantNotFound';

const BestConsultant:FC = () => {
    const Router=useRouter()
    const [consultantType,setConsultantType]=useState(false)
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
                slidesToShow: 4,
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
        <TopNavigation text="Best Consultants" animation="fade-left"/>
        <div className="main_featro_container margin_bootom_every_component" data-aos="fade-left">
              {
                consultantType ? <ConsultantNotFound/>:<>
                     <div className="container-fluid mt-5 mb-3">
                        <div className="row home_slider_section">
                            <div>
                            <Slider {...settings2}>
                                    <div className="top_consultant_section">
                                    <button className="slider_btn_home_top_consultant_main" onClick={()=>{
                                        Router.push("/favourite-consultant")
                                    }}>All</button>

                                    </div>
                                    <div className="top_consultant_section">
                                    <button className="slider_btn_home_top_consultant">Best</button>

                                    </div>
                                    <div className="top_consultant_section">
                                    <button className="slider_btn_home_top_consultant" onClick={()=>{
                                        setConsultantType(true)
                                    }}>Wedding</button>

                                    </div>
                                    <div className="top_consultant_section">
                                    <button className="slider_btn_home_top_consultant">Visit Now</button>

                                    </div>
                                   
                                </Slider>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid last_section_home_page">
                        <div className="row home_slider_section">
                        <div className="col-12">
                         <div className="row top_consultant_thumbnail_section"  onClick={()=>{
                              Router.push("/consultant/consultant_slug")
                         }}>
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                   <h4>Rajendra Rao</h4>
                                   <p className="top_consultant_tagline">Wedding Planner & Accomodation Provider</p>
                                   <p className="top_consultant_tagline">Jaipur | Rajasthan</p>
                                   
                                   <hr className="dashed_seperator_line"/>

                                   <div className="top_consultant_review">
                                        <span className="featured_consultant_review_content">
                                             <img src="/img/festro/star.png" className="review_star" alt="Consultant Reviews"/> 
                                             <b>5.0</b> • 82 Reviews
                                        </span>

                                        <span className="featured_consultant_review_content">
                                             10+ Years Exp.
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section"  onClick={()=>{
                              Router.push("/consultant/consultant_slug")
                         }}>
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                   <h4>Pravendra Singh</h4>
                                   <p className="top_consultant_tagline">Co-orporate Event | Destination Wedding</p>
                                   <p className="top_consultant_tagline">Jaipur | Rajasthan</p>
                                   
                                   <hr className="dashed_seperator_line"/>

                                   <div className="top_consultant_review">
                                        <span className="featured_consultant_review_content">
                                             <img src="/img/festro/star.png" className="review_star" alt="Consultant Reviews"/> 
                                             <b>4.8</b> • 56 Reviews
                                        </span>

                                        <span className="featured_consultant_review_content">
                                             13+ Years Exp.
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>

                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section"  onClick={()=>{
                              Router.push("/consultant/consultant_slug")
                         }}>
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                   <h4>Satyam Kumar</h4>
                                   <p className="top_consultant_tagline">Best Birthday Planner | Decore</p>
                                   <p className="top_consultant_tagline">Patna | Bihar</p>
                                   
                                   <hr className="dashed_seperator_line"/>

                                   <div className="top_consultant_review">
                                        <span className="featured_consultant_review_content">
                                             <img src="/img/festro/star.png" className="review_star" alt="Consultant Reviews"/> 
                                             <b>4.5</b> • 46 Reviews
                                        </span>

                                        <span className="featured_consultant_review_content">
                                             05+ Years Exp.
                                        </span>
                                   </div>
                              </div>
                         </div>
                    </div>
                        </div>
                    </div>
                </>
              }
                          
        </div>
    </Fragment>
  )
}

export default BestConsultant