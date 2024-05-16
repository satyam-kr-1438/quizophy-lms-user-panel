import PageProgress from 'components/common/PageProgress'
import React, { FC, Fragment, useState } from 'react'

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const SearchConsultantSkeleton:FC = () => {
      
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

export default SearchConsultantSkeleton