import PageProgress from 'components/common/PageProgress'
import TopNavigation from 'components/layouts/TopNavigation'
import React, { FC, Fragment, useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import { FaStar } from 'react-icons/fa'
import { IoMdTime } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { useRouter } from 'next/router';
import FavouriteConsultantSkeleton from 'components/skeleton/FavouriteConsultantSkeleton';

const FavouriteConsultant:FC = () => {
    const Router=useRouter()
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
       setTimeout(()=>{
           setLoading(false)
       },1000)
    },[])
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
              <TopNavigation text="Consultants"/>
             {
                loading ? <FavouriteConsultantSkeleton/>:  
                <>
                        <div className="main_featro_container margin_bootom_every_component">
                        
                                <div className="container-fluid mt-5 mb-3">
                                        <div className="row home_slider_section">
                                            <div>
                                            <Slider {...settings2}>
                                                    <div className="top_consultant_section">
                                                    <button className="slider_btn_home_top_consultant_main">All</button>
        
                                                    </div>
                                                    <div className="top_consultant_section">
                                                    <button className="slider_btn_home_top_consultant" onClick={()=>{
                                                        Router.push("/best-consultant")
                                                    }}>Best</button>
        
                                                    </div>
                                                    <div className="top_consultant_section">
                                                    <button className="slider_btn_home_top_consultant">Wedding</button>
        
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
                                                        <span className="card_consultant_name">Rajendra Rao <VscVerifiedFilled className="margin-top-negetive-2 verified-color verified-resize" /> </span>
                                                        <p className="top_consultant_tagline">Destintion Wedding Planner</p>
                                                        <p className="top_consultant_tagline"><CiLocationOn className="margin-top-negetive-2"/> Jaipur | Rajasthan</p>
                                                        
                                                        <hr className="dashed_seperator_line"/>
        
                                                        <div className="top_consultant_review">
                                                                <span className="featured_consultant_review_content">
                                                                    <FaStar className="star-icon" />
                                                                    <b>5.0</b> • 82 Reviews
                                                                </span>
        
                                                                <span className="featured_consultant_review_content">
                                                                    <IoMdTime className="margin-top-negetive-2" /> 10+ Years Exp.
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
                                                        <span className="card_consultant_name">Pravendra Singh</span>
                                                        <p className="top_consultant_tagline">Co-orporate Event Management</p>
                                                        <p className="top_consultant_tagline"><CiLocationOn className="margin-top-negetive-2"/> Jaipur | Rajasthan</p>
                                                        
                                                        <hr className="dashed_seperator_line"/>
        
                                                        <div className="top_consultant_review">
                                                                <span className="featured_consultant_review_content">
                                                                    <FaStar className="star-icon" />
                                                                    <b>4.8</b> • 56 Reviews
                                                                </span>
        
                                                                <span className="featured_consultant_review_content">
                                                                    <IoMdTime className="margin-top-negetive-2" /> 13+ Years Exp.
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
                                                        <span className="card_consultant_name">Satyam Kumar</span>
                                                        <p className="top_consultant_tagline">Best Birthday Planner | Decore</p>
                                                        <p className="top_consultant_tagline"><CiLocationOn className="margin-top-negetive-2"/> Patna | Bihar</p>
                                                        
                                                        <hr className="dashed_seperator_line"/>
        
                                                        <div className="top_consultant_review">
                                                                <span className="featured_consultant_review_content">
                                                                    <FaStar className="star-icon" />
                                                                    <b>4.5</b> • 46 Reviews
                                                                </span>
        
                                                                <span className="featured_consultant_review_content">
                                                                    <IoMdTime className="margin-top-negetive-2" /> 05+ Years Exp.
                                                                </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                    
                                        </div>
                                    </div>
                                        
                        </div>
                </>
             }
        </Fragment>
  )
}

export default FavouriteConsultant