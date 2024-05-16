import { useRouter } from 'next/router'
import React, { Fragment, useState } from 'react'
import { AiOutlineMessage } from 'react-icons/ai'
import { BiPhoneCall } from 'react-icons/bi'
import { IoVideocamOutline } from 'react-icons/io5'
import { IoMdTime } from "react-icons/io";

import { LuMoreVertical } from "react-icons/lu";
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
const CancelledEvent = () => {
    const Router=useRouter()
    const [state, setState] = useState<any>(false)
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  return (
    <Fragment>
                <div className="col-12">
                    <div className="my_appointment_view_all_appointment_container">
                            <div className="my_appointment_view_all_appointment"  onClick={()=>{
                                        // Router.push("/appointment/session_slug")
                                   }}>
                                    <div>
                                        <img className="my_appointment_images" src="/img/festro/my_appointment.png" alt="My Appointment"/>
                                    </div>
                                    <div>
                                        <p className="my_appointment_date_show">12-Dec-2024 | 10:56PM</p>
                                        <h5 className="my_appointment_view_name">Lokendra Shekhawat</h5>
                                        <p className="my_appointment_event_type">
                                            <span>
                                                <BiPhoneCall className="margin-top-negetive-2"/> Voice call | <IoMdTime className="margin-top-negetive-2" /> 30 Minutes
                                            </span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="event_price">₹150</p> 
                                        <hr className="dashed_seperator_line"/>
                                        <span className="appointment_price">
                                            <BiPhoneCall className="my_appointment_event_icon"/>
                                        </span>
                                    </div>

                                    <div>
                                        <span>
                                            <span aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                                <LuMoreVertical className="margin-top-negetive-2"/>
                                            </span>
                                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                                <MenuItem onClick={()=>{
                                                }} className="view_more">Book Again</MenuItem>
                                                <MenuItem onClick={()=>{
                                                    Router.push("/reschedule-appointment/event_slug")
                                                }} className="view_more">Reschedule Event</MenuItem>
                                            </Menu>
                                        </span>
                                    </div>
                            </div>
                    </div>

                    <div className="appointment_seperator"></div>

                    <div className="my_appointment_view_all_appointment_container">
                            <div className="my_appointment_view_all_appointment"  onClick={()=>{
                                        // Router.push("/appointment/session_slug")
                                   }}>
                                    <div>
                                        <img className="my_appointment_images" src="/img/festro/my_appointment.png" alt="My Appointment"/>
                                    </div>
                                    <div>
                                        <p className="my_appointment_date_show">12-Dec-2024 | 10:56PM</p>
                                        <h5 className="my_appointment_view_name">Satyam Kumar</h5>
                                        <p className="my_appointment_event_type">
                                            <span>
                                                <BiPhoneCall className="margin-top-negetive-2"/> Voice call | <IoMdTime className="margin-top-negetive-2" /> 30 Minutes
                                            </span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="event_price">₹150</p> 
                                        <hr className="dashed_seperator_line"/>
                                        <span className="appointment_price">
                                            <BiPhoneCall className="my_appointment_event_icon"/>
                                        </span>
                                    </div>

                                    <div>
                                        <span>
                                            <span aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                                <LuMoreVertical className="margin-top-negetive-2"/>
                                            </span>
                                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                                <MenuItem onClick={()=>{
                                                }} className="view_more">Book Again</MenuItem>
                                                <MenuItem onClick={()=>{
                                                    Router.push("/reschedule-appointment/event_slug")
                                                }} className="view_more">Reschedule Event</MenuItem>
                                            </Menu>
                                        </span>
                                    </div>
                            </div>
                    </div>

                    <div className="appointment_seperator"></div>


                    <div className="my_appointment_view_all_appointment_container">
                            <div className="my_appointment_view_all_appointment"  onClick={()=>{
                                        // Router.push("/appointment/session_slug")
                                   }}>
                                    <div>
                                        <img className="my_appointment_images" src="/img/festro/my_appointment.png" alt="My Appointment"/>
                                    </div>
                                    <div>
                                        <p className="my_appointment_date_show">12-Dec-2024 | 10:56PM</p>
                                        <h5 className="my_appointment_view_name">Shivam Kumar</h5>
                                        <p className="my_appointment_event_type">
                                            <span>
                                                <BiPhoneCall className="margin-top-negetive-2"/> Voice call | <IoMdTime className="margin-top-negetive-2" /> 30 Minutes
                                            </span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="event_price">₹150</p> 
                                        <hr className="dashed_seperator_line"/>
                                        <span className="appointment_price">
                                            <BiPhoneCall className="my_appointment_event_icon"/>
                                        </span>
                                    </div>

                                    <div>
                                        <span>
                                            <span aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                                <LuMoreVertical className="margin-top-negetive-2"/>
                                            </span>
                                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                                <MenuItem onClick={()=>{
                                                }} className="view_more">Book Again</MenuItem>
                                                <MenuItem onClick={()=>{
                                                    Router.push("/reschedule-appointment/event_slug")
                                                }} className="view_more">Reschedule Event</MenuItem>
                                            </Menu>
                                        </span>
                                    </div>
                            </div>
                    </div>

                    <div className="appointment_seperator"></div>

                    <div className="my_appointment_view_all_appointment_container">
                            <div className="my_appointment_view_all_appointment"  onClick={()=>{
                                        // Router.push("/appointment/session_slug")
                                   }}>
                                    <div>
                                        <img className="my_appointment_images" src="/img/festro/my_appointment.png" alt="My Appointment"/>
                                    </div>
                                    <div>
                                        <p className="my_appointment_date_show">12-Dec-2024 | 10:56PM</p>
                                        <h5 className="my_appointment_view_name">Shundram Kumar</h5>
                                        <p className="my_appointment_event_type">
                                            <span>
                                                <BiPhoneCall className="margin-top-negetive-2"/> Voice call | <IoMdTime className="margin-top-negetive-2" /> 30 Minutes
                                            </span>
                                        </p>
                                    </div>
                                    <div className="">
                                        <p className="event_price">₹150</p> 
                                        <hr className="dashed_seperator_line"/>
                                        <span className="appointment_price">
                                            <BiPhoneCall className="my_appointment_event_icon"/>
                                        </span>
                                    </div>

                                    <div>
                                        <span>
                                            <span aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                                                <LuMoreVertical className="margin-top-negetive-2"/>
                                            </span>
                                            <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
                                                <MenuItem onClick={()=>{
                                                }} className="view_more">Book Again</MenuItem>
                                                <MenuItem onClick={()=>{
                                                    Router.push("/reschedule-appointment/event_slug")
                                                }} className="view_more">Reschedule Event</MenuItem>
                                            </Menu>
                                        </span>
                                    </div>
                            </div>
                    </div>

                     
                </div>
                
                 {(['bottom'] as const).map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Drawer
                          anchor={anchor}
                          open={state}
                          onClose={()=>{
                              setState(false)
                          }}
                        >
                                <div className="col-12 px-4 mt-5">
                                    <div className="text-center upcoming_cancel_appointment_cancel_text">
                                        <h5>Cancel Appointment</h5>
                                        <p>Are you sure you want to cancel your appointment</p>
                                    </div>
                                </div>
                                <div className="col-12 px-2">
                                    <div className="">
                                    <div className="festron_btn_container text-center upcoming_appointment_cancel_button">
                                            <button className='upcoming_appointment_cancel_button_1' onClick={()=>{
                                                  
                                                }}>Back</button>
                                             <button className='upcoming_appointment_cancel_button_2' onClick={()=>{
                                                  
                                             }}>Yes Cancel</button>
                                    </div>
                                    </div>
                                    
                                </div>
                        </Drawer>
                      </React.Fragment>
                  ))}
    </Fragment>
  )
}

export default CancelledEvent