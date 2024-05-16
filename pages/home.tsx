import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useEffect, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { IoMdTime } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FcVideoCall } from "react-icons/fc";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoCalendarOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { useRouter } from 'next/router';
import { MdOutlineBusinessCenter } from "react-icons/md";
import HomeSkeleton from 'components/skeleton/HomeSkeleton';

const Home:FC = () => {
     const [open,setOpen]=useState(false)
     const [open2,setOpen2]=useState(false)
     const Router=useRouter()
     const [loading,setLoading]=useState(true)
     useEffect(()=>{
          setTimeout(()=>{
               setLoading(false)
          },1000)
     },[])
     const settings = {
        dots: false,
        infinite: true,
        arrow:false,
        autoplay:true,
        autoplaySpeed:4000,
        speed: 500,
        slidesToShow: 1,
     //    slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        rows: 1,
      };
     const featured_settings = {
          dots: false,
          infinite: true,
          arrow:false,
          autoplay:false,
          autoplaySpeed:4000,
          speed: 500,
          slidesToShow: 1,
          // slidesToScroll: 1,
          centerMode: true,
          centerPadding: "30px",
          rows: 1,
     };
     const appointment_settings = {
          dots: true,
          infinite: false,
          speed: 500,
          autoplay:false,
          slidesToShow: 1,
          // slidesToScroll: 1,
          initialSlide: 0
     };
      const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:false,
        slidesToShow: 4,
     //    slidesToScroll: 1,
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
          {
               loading? <HomeSkeleton/>:<>
                   <div className="main_featro_container main_container_padding" >
                         <div className="container-fluid home_banner_section">
                              <div className="row">
                                   <div className="col-12">
                                             <div className="search_box_home">
                                                  <input onClick={()=>{
                                                       Router.push("/search-consultant")
                                                       }} readOnly type="text" className="form-control py-2 px-4"  style={{background:"white"}} placeholder='Search Consultant...' />
                                                  <span className="search_icon">
                                                       <BsSearch/>
                                                  </span>
                                             </div>
                                   </div>
                              </div>
                              
                              <div className="row g-4 my-3 mx-auto">
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button" onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/Venue.png" alt="Home"  />
                                                       <span>Venue</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/weeding-planner.png" alt="Home"  />
                                                       <span>Wed Planner </span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/catering.png" alt="Home"  />
                                                       <span>Catering</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/decoration.png" alt="Home"  />
                                                       <span>Decore</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/gifts.png" alt="Home"  />
                                                       <span>Gifts</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/honeymoon.png" alt="Home"  />
                                                       <span>Honeymoon</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                       <img className="style_category__feed__image__1HvUy" src="/img/festro/entertainment.png" alt="Home"  />
                                                       <span>Entertainment</span>
                                                  </div>
                                             </div>

                                        </div>
                                        
                                        {
                                             open && <>
                                                  <div className="col-3 padding_cat_row">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                                      <img className="style_category__feed__image__1HvUy" src="/img/festro/dj.png" alt="Home"  />
                                                                      <span>DJ</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                                  <div className="col-3 padding_cat_row">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                                      <img className="style_category__feed__image__1HvUy" src="/img/festro/Choreographers.png" alt="Home"  />
                                                                      <span>Choreography</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                                  <div className="col-3 padding_cat_row">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                                      <img className="style_category__feed__image__1HvUy" src="/img/festro/song.png" alt="Home"  />
                                                                      <span>Concert</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                                  <div className="col-3 padding_cat_row">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button"  onClick={()=>{
                                                       Router.push("/consultants")
                                                  }}>
                                                                      <img className="style_category__feed__image__1HvUy" src="/img/festro/logisticks.png" alt="Home"  />
                                                                      <span>Logistic</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                             </>
                                        }
                                        <div className="col-3 padding_cat_row">
                                                       <div className='home_specialist_container2'  >
                                                                 <div className="home_specialist_button2" onClick={()=>{
                                                                      setOpen(!open)
                                                                 }}>
                                                                      <img className="style_category__feed__image__1HvUy" src="/img/festro/arrow_up.svg" alt="Home" style={{transform:`${!open?"rotate(180deg)":""}`,objectPosition:"center"}} />
                                                                 </div>
                                                            </div>
                                                  </div>
                              </div>

                              <div className="row home_slider_section">
                                   <div className="col-12">
                                        <Slider {...settings}>
                                             <div>
                                                  <div className="home_banner_section_second_slider">
                                                       <img src="/img/festro/slide1.jpg" alt="Slider First"/>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="home_banner_section_second_slider">
                                                       <img src="/img/festro/slide2.jpg" alt="Slider First"/>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="home_banner_section_second_slider">
                                                       <img src="/img/festro/slide3.jpg" alt="Slider First"/>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="home_banner_section_second_slider">
                                                       <img src="/img/festro/slide4.jpg" alt="Slider First"/>
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="home_banner_section_second_slider">
                                                       <img src="/img/festro/slide5.jpg" alt="Slider First"/>
                                                  </div>
                                             </div>
                                        </Slider>
                                   </div>
                              </div>
                         </div>
                         
                         <div className="container-fluid my-0 py-0">
                              <div className="consultant_profile_last_section">
                                   <div className="col-12">
                                        <div className="consultant_section5_data">
                                             <h5>Appointments</h5>
                                             <p className="consultant_section5_view_all" onClick={()=>{
                                                  Router.push("/appointments")
                                             }}>View All</p>
                                        </div>
                                   </div>
                                   
                                   <div className="row">
                                        <div className="col-12">
                                        <Slider {...appointment_settings}>
                                             <div>
                                                  <div className="home_appointment_container_wrapper consultant_review_margin_top_bottom_appointment" onClick={()=>{
                                                       Router.push("/appointment/session_slug")
                                                  }}>
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="appointment_consultant_name_section">
                                                                      <span className="appointmentDate"><IoCalendarOutline className="margin-top-negetive-2" /> &nbsp; 22 Jan 2024 </span> 
                                                                      <span className="appointmentCall"> <FcVideoCall className="margin-top-negetive-2 call-size" /> </span>
                                                                      <p className="appointment_time"><IoMdTime className="margin-top-negetive-2" /> 03:00 PM</p>
                                                                      <h5>Vishavjeet Singh Choudhary <VscVerifiedFilled className="margin-top-negetive-2 verified-color" /></h5>
                                                                      <span className="consultant_tagline display_block">Wedding planner | Decore Specialist</span>
                                                                 </div>
                                                            </div>
                                                            <div className="appointment_consultant_profile">
                                                                 <img src="/img/festro/consultant_Profile_Photo.jpg" alt="Appointment"/>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div>
                                                  <div className="home_appointment_container_wrapper consultant_review_margin_top_bottom_appointment"  onClick={()=>{
                                                       Router.push("/appointment/session_slug")
                                                  }}>
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="appointment_consultant_name_section">
                                                                      <span className="appointmentDate"><IoCalendarOutline className="margin-top-negetive-2" /> &nbsp;  22 Jan 2024 </span> 
                                                                      <span className="appointmentCall"> <FcVideoCall className="margin-top-negetive-2 call-size" /> </span>
                                                                      <p className="appointment_time"><IoMdTime className="margin-top-negetive-2" /> 03:00 PM</p>
                                                                      <h5>Vishavjeet Singh Choudhary <VscVerifiedFilled className="margin-top-negetive-2 verified-color" /></h5>
                                                                      <span className="consultant_tagline display_block">Wedding planner | Decore Specialist</span>
                                                                 </div>
                                                            </div>
                                                            <div className="appointment_consultant_profile">
                                                                 <img src="/img/festro/consultant_Profile_Photo.jpg" alt="Appointment"/>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Slider>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="container-fluid my-0 py-0">
                              <div className="consultant_profile_last_section">
                                   <div className="col-12" style={{marginTop:"20px"}}>
                                        <div className="consultant_section5_data">
                                             <h5>Featured Consultant</h5>
                                             <p className="consultant_section5_view_all" onClick={()=>{
                                                  Router.push("/consultant/review/consultant_slug")
                                             }}>View All</p>
                                        </div>
                                   </div>
                                   
                                   <div className="row">
                                        <div className="col-12">
                                        <Slider {...featured_settings}>
                                             <div onClick={()=>{ Router.push("/consultant/consultant_slug") }}>
                                                  <div className="featured_consultant_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="featured_consultant_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <h5>Vishavjeet Singh Choudhary <VscVerifiedFilled className="margin-top-negetive-2 verified-color" /></h5>
                                                                      <span className="consultant_tagline">Wedding planner | Decore Specialist</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="featured_consultant_review_content">
                                                                      <FaStar className="star-icon" />
                                                                      <b>4.8</b> • 56 Reviews
                                                                 </span>

                                                                 <span className="featured_consultant_review_content consultant_exp_block featured_icon">
                                                                      <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 10+ Years Exp.
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div onClick={()=>{ Router.push("/consultant/consultant_slug") }}>
                                                  <div className="featured_consultant_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="featured_consultant_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <h5>Vishavjeet Singh Choudhary <VscVerifiedFilled className="margin-top-negetive-2 verified-color" /></h5>
                                                                      <span className="consultant_tagline">Wedding planner | Decore Specialist</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="featured_consultant_review_content">
                                                                      <FaStar className="star-icon" />
                                                                      <b>4.8</b> • 56 Reviews
                                                                 </span>

                                                                 <span className="featured_consultant_review_content consultant_exp_block featured_icon">
                                                                      <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 10+ Years Exp.
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div onClick={()=>{ Router.push("/consultant/consultant_slug") }}>
                                                  <div className="featured_consultant_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="featured_consultant_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <h5>Vishavjeet Singh Choudhary <VscVerifiedFilled className="margin-top-negetive-2 verified-color" /></h5>
                                                                      <span className="consultant_tagline">Wedding planner | Decore Specialist</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="featured_consultant_review_content">
                                                                      <FaStar className="star-icon" />
                                                                      <b>4.8</b> • 56 Reviews
                                                                 </span>

                                                                 <span className="featured_consultant_review_content consultant_exp_block featured_icon">
                                                                      <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 10+ Years Exp.
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div onClick={()=>{ Router.push("/consultant/consultant_slug") }}>
                                                  <div className="featured_consultant_main_container_wrapper consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="featured_consultant_profile">
                                                                      <img src="/img/festro/consultant_profile_home.png" alt="Review"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <h5>Vishavjeet Singh Choudhary</h5>
                                                                      <span className="consultant_tagline">Wedding planner | Decore Specialist</span>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="featured_consultant_review_content">
                                                                      <FaStar className="star-icon" />
                                                                      <b>4.8</b> • 56 Reviews
                                                                 </span>

                                                                 <span className="featured_consultant_review_content consultant_exp_block featured_icon">
                                                                      <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 10+ Years Exp.
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </Slider>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="container-fluid my-0 py-0">
                              <div className="py-0 my-0">
                                   <div className="col-12 home_section2_conatiner">
                                        <div>
                                             <p className="home_heading_top_consultant">Top Consultant</p>
                                        </div>
                                        <div>
                                             <p className="slider_btn_home"  style={{cursor:"pointer"}} onClick={()=>{
                                                  Router.push("/favourite-consultant")
                                             }}>View All</p>
                                        </div>
                                   </div>
                              </div>
                         </div>

                         <div className="container-fluid">
                              <div className="row home_slider_section">
                                   <div>
                                   <Slider {...settings2}>
                                        <div className="top_consultant_section">
                                             <button className="slider_btn_home_top_consultant_main">All</button>

                                        </div>
                                        <div className="top_consultant_section">
                                             <button className="slider_btn_home_top_consultant">Best</button>

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
                                                            <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 10+ Years Exp.
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
                                                            <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 13+ Years Exp.
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
                                                            <MdOutlineBusinessCenter className="margin-top-negetive-2" /> 05+ Years Exp.
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

export default Home