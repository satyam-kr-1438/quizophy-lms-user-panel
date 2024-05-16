import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useState } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const HomeSkeleton:FC = () => {

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
          {/* <PageProgress/> */}
          <div className="main_featro_container main_container_padding" >
                         <div className="container-fluid home_banner_section">
                              <div className="row">
                                   <div className="col-12">
                                             <div className="search_box_home">
                                                  {/* <input onClick={()=>{
                                                       Router.push("/search-consultant")
                                                       }} readOnly type="text" className="form-control py-2 px-4"  style={{background:"white"}} placeholder='Search Consultant...' />
                                                  <span className="search_icon">
                                                       <BsSearch/>
                                                  </span> */}
                                                  <Skeleton className="form-control py-2 px-4" count={1} />
                                             </div>
                                   </div>
                              </div>
                              
                              <div className="row g-4 my-3 mx-auto">
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                  <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>
                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        <div className="col-3 padding_cat_row">
                                             <div className='home_specialist_container'>
                                                 <div className="" onClick={()=>{
                                                  }}>
                                                       <Skeleton className="home_specialist_button_skeleton" count={1} />
                                                  </div>
                                             </div>

                                        </div>
                                        
                              </div>

                              <div className="row home_slider_section">
                                   <div className="col-12">
                                        <Slider {...settings}>
                                             <div>
                                                  <div className="">
                                                     <Skeleton className="home_banner_section_second_slider_skeleton" count={1} />
                                                  </div>
                                             </div>
                                             <div>
                                                 <div className="">
                                                     <Skeleton className="home_banner_section_second_slider_skeleton" count={1} />
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="">
                                                     <Skeleton className="home_banner_section_second_slider_skeleton" count={1} />
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="">
                                                     <Skeleton className="home_banner_section_second_slider_skeleton" count={1} />
                                                  </div>
                                             </div>
                                             <div>
                                                  <div className="">
                                                     <Skeleton className="home_banner_section_second_slider_skeleton" count={1} />
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
                                             {/* <h5>Appointments</h5> */}
                                             <Skeleton className="" style={{width:"100px",height:"27px"}} count={1} />
                                             <Skeleton className="" style={{width:"60px",height:"27px"}} count={1} />
                                        </div>
                                   </div>
                                   
                                   <div className="row">
                                        <div className="col-12">
                                        <Slider {...appointment_settings}>
                                             <div>
                                                  <div className="home_appointment_container_wrapper_skeleton consultant_review_margin_top_bottom_appointment" onClick={()=>{
                                                  }}>
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="appointment_consultant_name_section">
                                                                      <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px",height:"15px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px",height:"15px"}}/></span> 
                                                                 </div>
                                                            </div>
                                                            <div className="appointment_consultant_profile">
                                                               <Skeleton className="appointment_consultant_profile_skeleton" style={{width:"90px",height:"90px",borderRadius:"10px"}} count={1} />
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div>
                                                  <div className="home_appointment_container_wrapper_skeleton consultant_review_margin_top_bottom_appointment" onClick={()=>{
                                                  }}>
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="appointment_consultant_name_section">
                                                                      <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px",height:"15px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px",height:"15px"}}/></span> 
                                                                 </div>
                                                            </div>
                                                            <div className="appointment_consultant_profile">
                                                               <Skeleton className="appointment_consultant_profile_skeleton" style={{width:"90px",height:"90px",borderRadius:"10px"}} count={1} />
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
                                             <Skeleton className="" style={{width:"100px",height:"27px"}} count={1} />
                                             <Skeleton className="" style={{width:"60px",height:"27px"}} count={1} />
                                        </div>
                                   </div>
                                   
                                   <div className="row">
                                        <div className="col-12">
                                        <Slider {...featured_settings}>
                                             <div>
                                                  <div className="featured_consultant_main_container_wrapper_skeleton consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="">
                                                                      <Skeleton  className="featured_consultant_profile_skeleton"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div>
                                                  <div className="featured_consultant_main_container_wrapper_skeleton consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="">
                                                                      <Skeleton  className="featured_consultant_profile_skeleton"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>

                                             <div>
                                                  <div className="featured_consultant_main_container_wrapper_skeleton consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="">
                                                                      <Skeleton  className="featured_consultant_profile_skeleton"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>


                                             <div>
                                                  <div className="featured_consultant_main_container_wrapper_skeleton consultant_review_margin_top_bottom">
                                                       <div className="consultant_review_main_container">
                                                            <div className="consultant_eview_container">
                                                                 <div className="">
                                                                      <Skeleton  className="featured_consultant_profile_skeleton"/>
                                                                 </div>
                                                                 <div className="featured_consultant_name_section">
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                      <span className=""><Skeleton style={{width:"140px"}}/></span> 
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div className="featured_consultant_bottom_section">
                                                            <div className="featured_consultant_review_container">
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
                                                                 </span>
                                                                 <span className="">
                                                                      <span className=""><Skeleton style={{width:"80px"}}/></span> 
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
                                             <Skeleton className="" style={{width:"100px",height:"27px"}} count={1} />
                                             <Skeleton className="" style={{width:"60px",height:"27px"}} count={1} />
                                   </div>
                              </div>
                         </div>

                         <div className="container-fluid">
                              <div className="row home_slider_section">
                                   <div>
                                   <Slider {...settings2}>
                                        <div className="top_consultant_section">
                                           <Skeleton className="" style={{width:"80px",height:"30px"}} count={1} />
                                        </div>
                                        <div className="top_consultant_section">
                                           <Skeleton className="" style={{width:"80px",height:"30px"}} count={1} />
                                        </div>
                                        <div className="top_consultant_section">
                                           <Skeleton className="" style={{width:"80px",height:"30px"}} count={1} />
                                        </div>
                                        <div className="top_consultant_section">
                                           <Skeleton className="" style={{width:"80px",height:"30px"}} count={1} />
                                        </div>
                                   </Slider>
                                   </div>
                              </div>
                         </div>

                         <div className="container-fluid last_section_home_page">
                              <div className="row home_slider_section">
                                   <div className="col-12">
                                        <div className="row top_consultant_thumbnail_section">
                                             <div className="col-3 home_banner_section_second">
                                             <Skeleton className="appointment_consultant_profile_skeleton" style={{width:"80px",height:"80px",borderRadius:"10px"}} count={1} />
                                             </div>
                                             <div className="col-9 top_consultant_thumbnail_section_second">
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  
                                                  <hr className="dashed_seperator_line"/>

                                                  <div className="top_consultant_review">
                                                       <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                       <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   
                                   <div className="col-12">
                                        <div className="row top_consultant_thumbnail_section">
                                             <div className="col-3 home_banner_section_second">
                                             <Skeleton className="appointment_consultant_profile_skeleton" style={{width:"80px",height:"80px",borderRadius:"10px"}} count={1} />
                                             </div>
                                             <div className="col-9 top_consultant_thumbnail_section_second">
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  
                                                  <hr className="dashed_seperator_line"/>

                                                  <div className="top_consultant_review">
                                                       <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                       <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  </div>
                                             </div>
                                        </div>
                                   </div>


                                   <div className="col-12">
                                        <div className="row top_consultant_thumbnail_section">
                                             <div className="col-3 home_banner_section_second">
                                             <Skeleton className="appointment_consultant_profile_skeleton" style={{width:"80px",height:"80px",borderRadius:"10px"}} count={1} />
                                             </div>
                                             <div className="col-9 top_consultant_thumbnail_section_second">
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  
                                                  <hr className="dashed_seperator_line"/>

                                                  <div className="top_consultant_review">
                                                       <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                       <span className=""><Skeleton style={{width:"120px",height:"15px"}}/></span> 
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
        </div>
    </Fragment>
  )
}

export default HomeSkeleton