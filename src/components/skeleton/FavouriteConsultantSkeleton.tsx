import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useState } from 'react'
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
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const FavouriteConsultantSkeleton:FC = () => {
     const Router=useRouter()

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

export default FavouriteConsultantSkeleton