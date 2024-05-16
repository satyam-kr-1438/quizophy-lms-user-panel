import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useState } from 'react'
import { BsSearch } from "react-icons/bs";
import { IoIosArrowDown, IoIosNotificationsOutline } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';

import { useRouter } from 'next/router';
import { IoWalletOutline } from 'react-icons/io5';
const Home2:FC = () => {
     const [open,setOpen]=useState(false)
     const [open2,setOpen2]=useState(false)
     const Router=useRouter()

     const settings = {
        dots: false,
        infinite: true,
        arrow:false,
        autoplay:false,
        autoplaySpeed:6000,
        speed: 2500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        rows: 1,
      };
      const settings2 = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay:false,
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
        <div style={{background:"#FFC75F", backgroundImage: "linear-gradient(90deg, rgb(33, 147, 176) 0%, rgb(1, 168, 128) 100%)", paddingBottom:"20px",borderRadius:"0px 0px 20px 20px"}}>
           <div className="d-flex justify-content-between align-items-center" style={{height:"52px",padding:"10px 0px",marginBottom:"30px"}}>
                    <div className="" style={{marginLeft:"10px"}}>
                        {<button  className="offcanvas-nav-btn" style={{border:"none",outline:"none",background:"none"}} onClick={()=>{
                            }}>
                            <img src="/img/festro/drawer-icon.3dd24632.svg" style={{width:"22px",color:"white"}} alt="close" className="style_img__26PED"/>
                        </button>}
                    </div>
                    <div style={{paddingRight:"20px"}}>
                        <IoWalletOutline className="notification_icon" style={{color:"white"}}/>
                        <IoIosNotificationsOutline className="notification_icon2" style={{marginLeft:"30px",color:"white"}} onClick={()=>{
                        }}/>
                    </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                              <div className="search_box_home">
                                       <input type="text" disabled className="form-control py-2 px-4"  style={{background:"white"}} placeholder='Search Consultant...' />
                                       <span className="search_icon">
                                          <BsSearch/>
                                       </span>
                              </div>
                    </div>
                </div>
                <div className="row g-4 my-3 mx-auto">
                                        <div className="col-3">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-3">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3">
                                             <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3">
                                            <div className='home_specialist_container'>
                                                  <div className="home_specialist_button">
                                                       <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                       <span>Cricket</span>
                                                  </div>
                                             </div>

                                        </div>
                                        
                                        {
                                             open && <>
                                                  <div className="col-3">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button">
                                                                      <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                                      <span>Cricket</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                                  <div className="col-3">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button">
                                                                      <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                                      <span>Cricket</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                                  <div className="col-3">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button">
                                                                      <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                                      <span>Cricket</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                                  <div className="col-3">
                                                       <div className='home_specialist_container'>
                                                                 <div className="home_specialist_button">
                                                                      <img className="style_category__feed__image__1HvUy" src="https://probo.gumlet.io/image/upload/probo_product_images/IMAGE_84a96ca4-3bb3-44b8-8c12-f8b308baa45e.png" alt=" Home"  />
                                                                      <span>Cricket</span>
                                                                 </div>
                                                            </div>
                                                  </div>
                                             </>
                                        }
                                        <div className="col-3">
                                                       <div className='home_specialist_container2'>
                                                                 <div className="home_specialist_button2" onClick={()=>{
                                                                      setOpen(!open)
                                                                 }}>
                                                                     <img className="style_category__feed__image__1HvUy" src="https://trading.probo.in/static/media/arrow_up.5cfe61f7.svg" alt=" Home" style={{transform:`${!open?"rotate(180deg)":""}`,objectPosition:"center"}} />
                                                                 </div>
                                                            </div>
                                                  </div>
                             </div>
            </div>
        </div>
        <div className="" style={{marginTop:"-20px"}} >
            <div className="container-fluid home_banner_section">
                             <div className="row home_slider_section">
                     <div>
                       <Slider {...settings}>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider1.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider2.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider3.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider4.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider5.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider6.avif" alt="Slider First"/>
                                        </div>
                            </div>
                        </Slider>
                     </div>
                </div>
            </div>

            {/* <div className="container-fluid">
                <div className="row home_slider_section">
                     <div>
                       <Slider {...settings}>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider1.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider2.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider3.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider4.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider5.avif" alt="Slider First"/>
                                        </div>
                            </div>
                            <div>
                                        <div className="home_banner_section_second_slider">
                                          <img src="/img/festro/home_slider6.avif" alt="Slider First"/>
                                        </div>
                            </div>
                        </Slider>
                     </div>
                </div>
            </div> */}

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

            <div className="container-fluid last_section_home_page" style={{paddingBottom:"100px"}}>
                <div className="row home_slider_section">
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section">
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                    <h4>Satyam Kumar</h4>
                                    <p>Consultant | Address</p>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                </div>
                         </div>
                    </div>
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section">
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                    <h4>Satyam Kumar</h4>
                                    <p>Consultant | Address</p>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                </div>
                         </div>
                    </div>
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section">
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                    <h4>Satyam Kumar</h4>
                                    <p>Consultant | Address</p>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                </div>
                         </div>
                    </div>
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section">
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                    <h4>Satyam Kumar</h4>
                                    <p>Consultant | Address</p>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                </div>
                         </div>
                    </div>
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section">
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                    <h4>Satyam Kumar</h4>
                                    <p>Consultant | Address</p>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                </div>
                         </div>
                    </div>
                    <div className="col-12">
                         <div className="row top_consultant_thumbnail_section">
                              <div className="col-3 home_banner_section_second">
                                   <img src="/img/festro/consultant_profile_home.png" alt="Consultant Profile"/>
                              </div>
                              <div className="col-9 top_consultant_thumbnail_section_second">
                                    <h4>Satyam Kumar</h4>
                                    <p>Consultant | Address</p>
                                    <Rating name="half-rating-read" defaultValue={4.5} precision={0.5} className="rating_consultant" readOnly />
                                </div>
                         </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Home2