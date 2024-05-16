import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { VscVerifiedFilled } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const VenueCategories = () => {
    const Router=useRouter()
  return (
    <Fragment>
           <div className="container-fluid last_section_home_page" style={{paddingTop:"20px"}}>
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
    </Fragment>
  )
}

export default VenueCategories