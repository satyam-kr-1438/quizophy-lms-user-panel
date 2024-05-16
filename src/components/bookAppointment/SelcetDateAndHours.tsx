import { selectPackageDTO } from 'components/dto/props.dto';
import React, { Fragment,FC, useState, useRef } from 'react'
import Flatpickr from "react-flatpickr";
import { IoArrowBackSharp, IoCopyOutline } from 'react-icons/io5';

const SelcetDateAndHours:FC<selectPackageDTO> = ({changeStepAndStoreData}) => {     
  return (
      <Fragment>
            <div className="row">
               <div className="col-12 margin_top_book_my_appointment">
                     <div className="consultant_first_section_container_new">
                        <div className="col-5 consultant_first_section_image">
                              <img src="/img/festro/consultant_Profile_Photo.jpg" className="consultant_profile_image_2" alt="Consultant Profile"/>
                        </div>
                        <div className="col-7 consultant_first_section_content">
                              <h4 className="margin-top-11">Mr. Shailendra Shekhawat</h4>
                              <p className="consultant_specialist_section">Destination Wedding Planner</p>
                              <p className="consultant_location_section"> Jaipur | Rajasthan</p>
                              <hr className="seperator_line_consultant"/>
                              <p className="consultant_location_section">Wedding planner | Decore Planner | Accommodation | Manage Events</p>
                              <hr className="seperator_line_consultant"/>
                              <p className="consultant_location_section">
                                    <img src="/img/festro/star.png" className="review_star" alt="Consultant Reviews"/> 
                                    <b> 4.8</b> &nbsp; 106 Reviews
                              </p>
                           </div>
                     </div>
                     <hr className="dashed_seperator_line"/>
               </div>
               
               {/* <div className="col-12">
                    <div className="refer_container_main">
                         <div className="_refer_back_icon_heading_main">
                            <span><IoArrowBackSharp className="refer_and_earn_icon" onClick={()=>{
                                if(typeof window !="undefined")
                                    window.history.go(-1)
                            }}/></span>
                            <span className="refer_and_earn_heading">Refer & Earn</span>
                         </div>
                         <div className="refer_gift_container">
                            <img src="/img/festro/refer-gift.png"/>
                         </div>
                         <div className="refer_content_container">
                            <h5>Invite your friends and earn upto ₹1 Lakh per user</h5>
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
                </div> */}
                    <div className="col-12">
                        <h5 className="appointment_select_date">Select Date</h5>
                    </div>
                    <div className="col-12">
                        <div className="book_appointment_date_section">
                            <Flatpickr
                              className=" py-2"
                              value={new Date()}
                              options={{ inline: true }}
                              onChange={(date) =>{
                                console.log(date)
                              }}
                            />
                        </div>
                    </div>
               </div>


               <div className="row g-2">
                    <div className="col-12">
                        <h5 className="mt-4 appointment_select_date">Select Hours</h5>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  08:00 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  08:30 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  09:00 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  09:30 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  10:00 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  10:30 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  11:00 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  11:30 AM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  12:00 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  12:30 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section_selected">
                                  01:00 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  01:30 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  02:00 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  02:30 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  03:00 PM
                            </div>
                       </div>
                    </div>
                    <div className="col-3">
                       <div>
                          <div className="book_appointment_hours_section">
                                  03:30 PM
                            </div>
                       </div>
                    </div> 

                    <div className="col-12">
                                        <div className="consultant_review_apply_now_button">
                                             <button onClick={()=>{
                                                changeStepAndStoreData(2)
                                             }}>Next</button>
                                        </div>
                    </div>                   
               </div>
    </Fragment>
  )
}

export default SelcetDateAndHours