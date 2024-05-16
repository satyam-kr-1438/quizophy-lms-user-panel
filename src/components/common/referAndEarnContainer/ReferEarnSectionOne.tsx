import React, { Fragment } from 'react'
import { IoArrowBackSharp, IoCopyOutline } from 'react-icons/io5'

const ReferEarnSectionOne = () => {
  return (
    <Fragment>
         <div className="row">
                <div className="col-12">
                    <div className="refer_container_main">
                         <div className="_refer_back_icon_heading_main">
                            <span><IoArrowBackSharp className="refer_and_earn_icon" onClick={()=>{
                                if(typeof window !="undefined")
                                    window.history.go(-1)
                            }}/></span>
                            <span className="refer_and_earn_heading">Refer & Earn</span>
                         </div>
                         <div className="refer_gift_container">
                            <img src="/img/festro/refer-gift.png" alt="Refer"/>
                         </div>
                         <div className="refer_content_container">
                            <h5>Invite your friends and earn upto ₹200 per user</h5>
                         </div>
                         <div className="refer_button_container">
                            <button className="refer_main_copy_code_button">
                                <span className="refer_code_copy">T4MH26</span>
                                <span className="refer_copy_container">
                                    <span className="refer_copy_text">Copy</span>
                                    <span><IoCopyOutline className="refer_copy_icon"/></span>
                                </span>
                            </button>
                         </div>
                    </div>
                </div>
             </div>
    </Fragment>
  )
}

export default ReferEarnSectionOne