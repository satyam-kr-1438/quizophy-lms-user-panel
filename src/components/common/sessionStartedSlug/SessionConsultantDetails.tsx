import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { FaStar } from 'react-icons/fa'
import { IoMdTime } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { CiLocationOn } from "react-icons/ci";

const SessionConsultantDetails = () => {
    const Router=useRouter()
  return (
    <Fragment>
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
    </Fragment>
  )
}

export default SessionConsultantDetails